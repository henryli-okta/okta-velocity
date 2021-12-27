"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaVTLParserListener = void 0;
const VTLSymbol_1 = require("./VTLSymbol");
class OktaVTLParserListener {
    constructor() {
        this.symbols = new Map();
        this.properties_methods = new Map();
        this.macros = new Map();
        //key is the line number
        this.tokens = new Map();
        this.foldings = new Array();
    }
    addVTLInstance(map, node, type) {
        var _a;
        let name = node.text.replace("$", "");
        let range = {
            start: {
                line: node.symbol.line - 1,
                character: node.symbol.charPositionInLine
            },
            end: {
                line: node.symbol.line - 1,
                character: (node.symbol.charPositionInLine + ((_a = name === null || name === void 0 ? void 0 : name.length) !== null && _a !== void 0 ? _a : 0))
            }
        };
        let symbol = map.get(name);
        if (symbol) {
            symbol.ranges.push(range);
        }
        else {
            symbol = {
                name: name,
                type: type,
                argList: [],
                ranges: [range]
            };
            map.set(name, symbol);
        }
        const token = { range, symbol };
        let lineTokens = this.tokens.get(range.start.line);
        if (lineTokens) {
            lineTokens.push(token);
        }
        else {
            lineTokens = [token];
            this.tokens.set(range.start.line, lineTokens);
        }
    }
    enterFormal(ctx) {
        var _a;
        let idNode = (_a = ctx.id()) === null || _a === void 0 ? void 0 : _a.ID();
        if (idNode) {
            this.addVTLInstance(this.symbols, idNode, VTLSymbol_1.VTLType.Symbol);
        }
    }
    enterFormal_property_or_method(ctx) {
        var _a;
        let idNode = (_a = ctx.id()) === null || _a === void 0 ? void 0 : _a.ID();
        let propEndCtxList = ctx.property_end();
        if (propEndCtxList.length > 0) {
            let propEndCtx = propEndCtxList[0];
            if (propEndCtx.DOT() && idNode) {
                this.addVTLInstance(this.symbols, idNode, VTLSymbol_1.VTLType.Symbol);
            }
            else if (propEndCtx.OPAR() && propEndCtx.CPAR() && idNode) {
                this.addVTLInstance(this.properties_methods, idNode, VTLSymbol_1.VTLType.Method);
                this.addVTLInstance(this.symbols, idNode, VTLSymbol_1.VTLType.Symbol);
            }
        }
    }
    enterVariable(ctx) {
        var _a;
        const idNode = (_a = ctx.id()) === null || _a === void 0 ? void 0 : _a.ID();
        const refrenceNode = ctx.REFERENCE();
        if (idNode) {
            this.addVTLInstance(this.symbols, idNode, VTLSymbol_1.VTLType.Symbol);
        }
        else if (refrenceNode) {
            this.addVTLInstance(this.symbols, refrenceNode, VTLSymbol_1.VTLType.Symbol);
        }
    }
    enterProperty_or_method(ctx) {
        var _a;
        const varCtx = ctx.variable();
        const idNode = (_a = varCtx.id()) === null || _a === void 0 ? void 0 : _a.ID();
        if (idNode) {
            let propEndCtxList = ctx.property_end();
            if (propEndCtxList.length > 0) {
                let propEndCtx = propEndCtxList[0];
                if (propEndCtx.DOT()) {
                    this.addVTLInstance(this.symbols, idNode, VTLSymbol_1.VTLType.Symbol);
                }
                else if (propEndCtx.OPAR() && propEndCtx.CPAR()) {
                    this.addVTLInstance(this.properties_methods, idNode, VTLSymbol_1.VTLType.Method);
                }
            }
        }
    }
    enterProperty_end(ctx) {
        const idNode = ctx.ID();
        if (ctx.DOT() && idNode) {
            this.addVTLInstance(this.properties_methods, idNode, VTLSymbol_1.VTLType.Property);
            this.addVTLInstance(this.symbols, idNode, VTLSymbol_1.VTLType.Symbol);
        }
    }
    enterMacro_directive(ctx) {
        var _a;
        let expList = ctx.expression();
        if (expList && expList.length > 0) {
            let idNode = (_a = expList[0].id()) === null || _a === void 0 ? void 0 : _a.ID();
            if (idNode) {
                this.addVTLInstance(this.macros, idNode, VTLSymbol_1.VTLType.Symbol);
            }
        }
    }
}
exports.OktaVTLParserListener = OktaVTLParserListener;
//# sourceMappingURL=OktaVTLParserListener.js.map