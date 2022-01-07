/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';
import { VTLProvider } from './VTLProvider';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
	StaticFeature,
	DocumentSelector,
	InitializeParams,
	ServerCapabilities,
	MarkupKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
	// only allow a single webview to exist at a time
	const previewProvider = new VTLProvider(context);
	const openPreviewToTheSide = () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			if (document.languageId === 'velocity') {
				previewProvider.initPreview(document.uri, editor, {
					viewColumn: vscode.ViewColumn.Two,
					preserveFocus: true
				});
			} else {
				vscode.window.showErrorMessage("Only support Velocity!");
			}
		} else {
			vscode.window.showErrorMessage("No active text editor!");
		}
	};

	context.subscriptions.push(
		vscode.commands.registerCommand('oktaVTLPreview.start', openPreviewToTheSide),
	);

	startLanguageClientAndServer(context);
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}

// export class WorkaroundFeature implements StaticFeature {
// 	fillInitializeParams?: (params: InitializeParams) => void;
// 	initialize(capabilities: ServerCapabilities<any>, documentSelector: DocumentSelector): void {
// 		return;
// 	}
// 	dispose(): void {
// 		return;
// 	}
//     fillClientCapabilities(capabilities): void {
//         capabilities.textDocument.hover.contentFormat = [MarkupKind.Markdown];
// 	}
// }

function startLanguageClientAndServer(context: vscode.ExtensionContext) {
		// The server is implemented in node
		const serverModule = context.asAbsolutePath(
			path.join('server', 'out', 'server.js')
		);
		// The debug options for the server
		// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
		const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
	
		// If the extension is launched in debug mode then the debug server options are used
		// Otherwise the run options are used
		const serverOptions: ServerOptions = {
			run: { module: serverModule, transport: TransportKind.ipc },
			debug: {
				module: serverModule,
				transport: TransportKind.ipc,
				options: debugOptions
			}
		};
	
		// Options to control the language client
		const clientOptions: LanguageClientOptions = {
			// Register the server for plain text documents
			documentSelector: [{ scheme: 'file', language: 'velocity' }],
			synchronize: {
				// Notify the server about file changes to '.clientrc files contained in the workspace
				fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
			}
		};
	
		// Create the language client and start the client.
		client = new LanguageClient(
			'languageServerExample',
			'Language Server Example',
			serverOptions,
			clientOptions
		);
	
		//client.registerFeature(new WorkaroundFeature());
	
		// Start the client. This will also launch the server
		client.start();
}
