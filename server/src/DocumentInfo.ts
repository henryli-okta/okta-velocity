import { Diagnostic, Position, FoldingRange } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { VTLLexer } from './VTLLexer';
import { VTLParser } from './VTLParser';
import { OktaVTLParserListener } from './OktaVTLParserListener';
import { VTLParserListener } from './VTLParserListener';
import { VTLParserErrorListener, VTLLexerErrorListener } from './VTLErrorListener';
import { VTLSymbol, VTLToken } from './VTLSymbol';

//Hold all VTL Symbols, text and errors
export class DocumentInfo {
	/**
	 * Document handler from VSCode LSP Server
	 */
	document: TextDocument;

	/**
	 * Tokens in this document by line
	 */
	tokens = new Map<number, VTLToken[]>();

	/**
	 * Variables captured in this document
	 */
	variables = new Map<string, VTLSymbol>();

	/**
	 * Properties and Methods captured in this document
	 */
	properties_methods = new Map<string, VTLSymbol>();

	/**
	 * Macros captured in this document
	 */
	macros = new Map<string, VTLSymbol>();

	/**
	 * Folding ranges in the document
	 */
	foldings = new Array<FoldingRange>();

	/**
	 * Diagnostics event callback
	 */
	onError? : {(diagnostics: Diagnostic[]):void};

	private timer?: NodeJS.Timeout;

	constructor(document: TextDocument) {
		this.document = document;
	}

	dispose() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	/**
	 * Parse document to collect diagnostics and find symbols
	 */
	parseDocument() {
		console.log("start parsing document");
		const start = new Date();

		let errorList: Diagnostic[] = [];	

		const text = this.document.getText();
		const inputStream = CharStreams.fromString(text);

		const lexer = new VTLLexer(inputStream);
		lexer.removeErrorListeners();
		const lexerErrorListener = new VTLLexerErrorListener();
		lexer.addErrorListener(lexerErrorListener);

		//---------------------------------
		//DEBUG
		// for (let token = lexer.nextToken(); token.type != Token.EOF; token = lexer.nextToken())
		// {
		// 	console.log(token.toString());
		// }
		// lexer.reset();
		//---------------------------------

		const tokenStream = new CommonTokenStream(lexer);
		const parser = new VTLParser(tokenStream);
		parser.removeErrorListeners();
		const parserErrorListener = new VTLParserErrorListener();
		parser.addErrorListener(parserErrorListener);

		const tree = parser.parse();

		errorList = errorList.concat(lexerErrorListener.errorList, parserErrorListener.errorList);

		if (errorList.length == 0) {
			const listener = new OktaVTLParserListener();
			ParseTreeWalker.DEFAULT.walk(listener as VTLParserListener, tree);
			this.variables = listener.variables;
			this.properties_methods = listener.properties_methods;
			this.macros = listener.macros;
			this.tokens = listener.tokens;
			this.foldings = listener.foldings;
		}

		const end = new Date();
		const time = end.getTime() - start.getTime();
		console.log('Parsing: finished in ' + time + 'ms' + '. Symbol count ' + this.variables.size);

		this.timer = undefined;
		if (this.onError) {
			this.onError(errorList);
		}
	}

	/**
	 * Schedules the parsing of the document.
	 * Multiple calls to this method will only result in the actual document parsing
	 *   if the previous parsing call has finished.
	 * Otherwise the parsing will merely be rescheduled to a later time.
	 * Effectively this causes the parsing to occur only when the user has stopped
	 *   making changes to the document for more than X seconds.
	 */
	scheduleParseDocument() {
		console.log("scheduleParseDocument", this.timer);
		if(this.timer)
			this.timer.refresh();
		else
			this.timer = setTimeout(() => this.parseDocument(), 1000);
	}

	/**
	 * Fetches the symbol information at the requested position
	 * @param {Position} position The position to get the symbol from
	 * @returns {(VTLSymbol | null)} The symbol at the position if found, or null if not found
	 */
	getSymbolAt(position: Position) : VTLSymbol | null {
		const lineSymbols = this.tokens.get(position.line);
		if(lineSymbols) {
			for (let i = 0; i < lineSymbols.length; i++) {
				const token = lineSymbols[i];
				if(token.range.start.line === position.line)
				{
					if(position.character >= token.range.start.character &&
						position.character <= token.range.end.character)
						return token.symbol;
				}
			}
		}

		return null;
	}
}