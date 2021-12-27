"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VTLLexerErrorListener = exports.VTLParserErrorListener = void 0;
const vscode_languageserver_1 = require("vscode-languageserver");
class VTLParserErrorListener {
    constructor() {
        this.errorList = [];
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        let endPositionInLine = charPositionInLine;
        if (offendingSymbol && offendingSymbol.text)
            endPositionInLine += offendingSymbol.text.length;
        this.errorList.push({
            severity: vscode_languageserver_1.DiagnosticSeverity.Error,
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
            message: msg,
            source: 'velocity'
        });
        console.log("parser error", msg);
    }
}
exports.VTLParserErrorListener = VTLParserErrorListener;
class VTLLexerErrorListener {
    constructor() {
        this.errorList = [];
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        const endPositionInLine = charPositionInLine + 1;
        this.errorList.push({
            severity: vscode_languageserver_1.DiagnosticSeverity.Error,
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
            message: msg,
            source: 'velocity'
        });
        console.log("lexer error", msg);
    }
}
exports.VTLLexerErrorListener = VTLLexerErrorListener;
//# sourceMappingURL=VTLErrorListener.js.map