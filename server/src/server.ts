/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	CompletionParams,
	Range,
	Position,
	Location,
	ReferenceParams,
	ResponseError,
	TextEdit,
	TextDocumentSyncKind,
	InitializeResult,
	MarkupKind,
	MarkupContent,
	HoverParams,
	Hover
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { DocumentInfo } from './DocumentInfo';
import { VTLType } from './VTLSymbol';
import fs = require('fs');
import path = require('path');

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Create a DocumentInfo cache, key is the document uri
const documentInfoCache = new Map<string, DocumentInfo>();

// Okta Variables
// eslint-disable-next-line @typescript-eslint/no-var-requires
const oktaVariables = getOktaVariables();

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			// Enable incremental document sync
			textDocumentSync: TextDocumentSyncKind.Incremental,
			//Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: ['$', '.']
			},
			// Tell the client that this server supports hover
			hoverProvider: true
			//documentSymbolProvider: true,
			// referencesProvider: true,
			// definitionProvider: true,
			// foldingRangeProvider: true,
			// renameProvider: true
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
	documentInfoCache.delete(e.document.uri);
	connection.sendDiagnostics({ uri: e.document.uri, diagnostics: [] });
});

documents.onDidOpen(e => {
	//console.log("onDidOpen", e.document.uri);
	const info = new DocumentInfo(e.document);
	const uri = e.document.uri;
	info.onError = (errorList) => {
		connection.sendDiagnostics({ uri: uri, diagnostics: errorList });
	};	
	documentInfoCache.set(uri, info);
	info.parseDocument();
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);
	
	const info = documentInfoCache.get(textDocument.uri);
	if(info) {
		info.scheduleParseDocument();
	}
}

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	//console.log("onDidChangeContent", change.document.uri);
	validateTextDocument(change.document);
});

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_completionParams: CompletionParams): CompletionItem[] | null => {	
		if (!oktaVariables) {
			return null;
		}

		const charPressed = _completionParams.context!.triggerCharacter;
		const result: CompletionItem[] = [];

		if (charPressed === '.') {
			return getDotCompletionItems(_completionParams);
		}
		
		//$ doesn't work, which is a bug for vs code
		for (const key in oktaVariables) {
			const value = oktaVariables[key];
			result.push(
				{
					label: "$" + value["label"],
					kind: getCompletionItemKind(value["type"]),
					detail: value["description"]
				}
			);
		}

		return result;
	}
);

connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		return item;
	}
);

connection.onHover(
	(_hoverParams: HoverParams): Hover|null => {
		const word = getWordAtPosition(_hoverParams.textDocument.uri, _hoverParams.position, true);

		if (word == "hello") {
			const helloContent: MarkupContent = {
				kind: MarkupKind.Markdown,
				value: [
					'### Header',
					'---',
					'Some text',
					'```typescript',
					'someCode();',
					'```'
					].join('\n')
			};
			return {
				contents: helloContent
			};
		}

		if (!word) {
			return null;
		}
		
		const words: string[] = word.split(".");
		let jsonNode = oktaVariables;
		for (let index = 0; index < words.length; index++) {
			const item = words[index];
			if (jsonNode) {
				if (!jsonNode[item]) {
					break;
				}
				if (index == words.length - 1) {
					return {
						contents: {
							kind: MarkupKind.PlainText,
							value: jsonNode[item]["description"]
						}
					};
				} else {
					jsonNode = jsonNode[item]["properties"];
				}
			}
		}

		return {
			contents: {
				kind: MarkupKind.PlainText,
				value: word
			}
		};
		
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();

function getOktaVariables() {
	let result = null;
	try {
		const data = fs.readFileSync(path.resolve(__dirname, "../../media/OktaVariables.json"), 'utf8');
		const json = JSON.parse(data.toString());
		result = json;
		console.log("READ COMPLETED:" + result);
	} catch (error) {
		console.error(error);
	}
	return result;
}

function getCompletionItemKind(type:string): CompletionItemKind {
	if (type === "Variable" || type === "FinalVariable") {
		return CompletionItemKind.Variable;
	} else if (type === "Function") {
		return CompletionItemKind.Property;
	} else {
		return CompletionItemKind.Property;
	}
}

function getDotCompletionItems(_completionParams: CompletionParams): CompletionItem[] | null {
	const word = getWordAtPosition(_completionParams.textDocument.uri, _completionParams.position, false);
	if (!word) {
		return null;
	}

	const result: CompletionItem[] = [];

	const words: string[] = word.split(".");
	let jsonNode = oktaVariables;
	for (let index = 0; index < words.length; index++) {
		const item = words[index];
		if (jsonNode) {
			if (!jsonNode[item]) {
				jsonNode = null;
				break;
			}
			jsonNode = jsonNode[item]["properties"];
		}
	}
	
	if (jsonNode) {
		for (const key in jsonNode) {
			const item = jsonNode[key];
			result.push(
				{
					label: item["label"],
					kind: getCompletionItemKind(item["type"]),
					detail: item["description"]
				}
			);
		}
	}
	
	return result;
}

function getWordAtPosition(docUri: string, position: Position, isHover: boolean) {
	const doc = documents.get(docUri);
	if (!doc) {
		return null;
	}
	
	const typeIdx = position.character;
	//find out the previous $ character
	const textline = doc.getText({
		start: { 
			line: position.line,
			character: 0
		},
		end: {
			line: position.line,
			character: typeIdx
		}
	});

	let dollarIdx = -1;
	for (let i = typeIdx; i >= 0; i--) {
		if(textline[i] == '$') {
			dollarIdx = i;
			break;
		}
	}
	if(dollarIdx == -1) {
		return null;
	}

	let word = textline.substring(dollarIdx+1, typeIdx);
	if (word[0] === '!') {
		word = word.substring(1);
	}
	if (word[0] === '{') {
		word = word.substring(1);
	}

	if (isHover) {
		const line = doc.getText({
			start: { 
				line: position.line,
				character: 0
			},
			end: {
				line: position.line,
				character: typeIdx + 100
			}
		});
		if (!line[typeIdx].match("\\w")) return null;

		let end: number = typeIdx;

		while (end <= line.length - 1 && line[end].match("\\w")) { 
			end++;
		}
		const hoverWord = line.substring(typeIdx, end);
		word = word + hoverWord;
	} else {
		// remove last . character for autocompletion
		if (word && word.length > 1 && word[word.length - 1] === '.') {
			word = word.substring(0, word.length - 1);
		}
	}
	
	console.log('found word: ', word);
	return word;
}
