import { ParserErrorListener } from 'antlr4ts/ParserErrorListener';
import { 
	ANTLRErrorListener,
	Token,
	Recognizer,
	RecognitionException
} from 'antlr4ts';
import {
	Diagnostic,
	DiagnosticSeverity,
} from 'vscode-languageserver';

export class VTLParserErrorListener implements ParserErrorListener {
	errorList: Diagnostic[] = [];

	syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {

		let endPositionInLine = charPositionInLine;
		if(offendingSymbol && offendingSymbol.text)
			endPositionInLine += offendingSymbol.text.length;

		const message = msg.split('\n');

		this.errorList.push({
			severity: DiagnosticSeverity.Error,
			range: {
				start: {
					line: line - 1,
					character: charPositionInLine 
				},
				end: {
					line: line - 1,
					character: endPositionInLine
				}
			},
			message: message[0],
			source: 'velocity'
		});
		//console.log("parser error", msg);
	}
}

export class VTLLexerErrorListener implements ANTLRErrorListener<number> {
	errorList: Diagnostic[] = [];	

	syntaxError(recognizer: Recognizer<number, any>, offendingSymbol: number | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {

		const endPositionInLine = charPositionInLine + 1;

		const message = msg.split('\n');

		this.errorList.push({
			severity: DiagnosticSeverity.Error,
			range: {
				start: {
					line: line - 1,
					character: charPositionInLine 
				},
				end: {
					line: line - 1,
					character: endPositionInLine
				}
			},
			message:  message[0],
			source: 'velocity'
		});

		//console.log("lexer error", msg);
	}
}