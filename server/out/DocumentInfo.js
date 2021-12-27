"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentInfo = void 0;
const antlr4ts_1 = require("antlr4ts");
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
const VTLLexer_1 = require("./VTLLexer");
const VTLParser_1 = require("./VTLParser");
const OktaVTLParserListener_1 = require("./OktaVTLParserListener");
const VTLErrorListener_1 = require("./VTLErrorListener");
//Hold all VTL Symbols, text and errors
class DocumentInfo {
    constructor(document) {
        /**
         * Tokens in this document by line
         */
        this.tokens = new Map();
        /**
         * Variables captured in this document
         */
        this.variables = new Map();
        /**
         * Properties and Methods captured in this document
         */
        this.properties_methods = new Map();
        /**
         * Macros captured in this document
         */
        this.macros = new Map();
        /**
         * Folding ranges in the document
         */
        this.foldings = new Array();
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
        let errorList = [];
        const text = this.document.getText();
        const inputStream = antlr4ts_1.CharStreams.fromString(text);
        const lexer = new VTLLexer_1.VTLLexer(inputStream);
        lexer.removeErrorListeners();
        const lexerErrorListener = new VTLErrorListener_1.VTLLexerErrorListener();
        lexer.addErrorListener(lexerErrorListener);
        //---------------------------------
        //DEBUG
        // for (let token = lexer.nextToken(); token.type != Token.EOF; token = lexer.nextToken())
        // {
        // 	console.log(token.toString());
        // }
        // lexer.reset();
        //---------------------------------
        const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        const parser = new VTLParser_1.VTLParser(tokenStream);
        parser.removeErrorListeners();
        const parserErrorListener = new VTLErrorListener_1.VTLParserErrorListener();
        parser.addErrorListener(parserErrorListener);
        const tree = parser.parse();
        errorList = errorList.concat(lexerErrorListener.errorList, parserErrorListener.errorList);
        if (errorList.length == 0) {
            const listener = new OktaVTLParserListener_1.OktaVTLParserListener();
            ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(listener, tree);
            this.variables = listener.symbols;
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
        if (this.timer)
            this.timer.refresh();
        else
            this.timer = setTimeout(() => this.parseDocument(), 1000);
    }
    /**
     * Fetches the symbol information at the requested position
     * @param {Position} position The position to get the symbol from
     * @returns {(VTLSymbol | null)} The symbol at the position if found, or null if not found
     */
    getSymbolAt(position) {
        const lineSymbols = this.tokens.get(position.line);
        if (lineSymbols) {
            for (let i = 0; i < lineSymbols.length; i++) {
                const token = lineSymbols[i];
                if (token.range.start.line === position.line) {
                    if (position.character >= token.range.start.character &&
                        position.character <= token.range.end.character)
                        return token.symbol;
                }
            }
        }
        return null;
    }
}
exports.DocumentInfo = DocumentInfo;
//# sourceMappingURL=DocumentInfo.js.map