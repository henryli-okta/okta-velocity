import { VTLParserListener } from './VTLParserListener';

import {
	VariableContext, 
	Macro_directiveContext,
	FormalContext,
	Formal_property_or_methodContext,
	Property_or_methodContext,
	Property_endContext
} from "./VTLParser";

import { 
	VTLSymbol, 
	VTLType, 
	VTLToken
} from './VTLSymbol';

import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { FoldingRange, FoldingRangeKind } from 'vscode-languageserver';

export class OktaVTLParserListener implements VTLParserListener {
	symbols = new Map<string, VTLSymbol>();
	properties_methods = new Map<string, VTLSymbol>();
	macros = new Map<string, VTLSymbol>();
	//key is the line number
	tokens = new Map<number, Array<VTLToken>>();
	foldings = new Array<FoldingRange>();

	constructor() {}

	private addVTLInstance(map: Map<string, VTLSymbol>, node: TerminalNode, type: VTLType) {
		let name = node.text.replace("$", "");

		let range = {
			start: {
				line: node.symbol.line - 1,
				character: node.symbol.charPositionInLine
			},
			end: {
				line: node.symbol.line - 1,
				character: (node.symbol.charPositionInLine + (name?.length ?? 0))
			}
		}

		let symbol = map.get(name);

		if (symbol) {
			symbol.ranges.push(range);
		} else {
			symbol = {
				name: name,
				type: type,
				argList: [],
				ranges: [range]
			}
			map.set(name, symbol);
		}

		const token: VTLToken = {range, symbol};
		let lineTokens = this.tokens.get(range.start.line);
		if (lineTokens) {
			lineTokens.push(token);
		} else {
			lineTokens = [token];
			this.tokens.set(range.start.line, lineTokens);
		}
	}

	enterFormal(ctx: FormalContext) {
		let idNode = ctx.id()?.ID();
		if (idNode) {
			this.addVTLInstance(this.symbols, idNode, VTLType.Symbol);
		}
	}

	enterFormal_property_or_method(ctx: Formal_property_or_methodContext) {
		let idNode = ctx.id()?.ID();
		let propEndCtxList = ctx.property_end();
		if (propEndCtxList.length > 0) {
			let propEndCtx = propEndCtxList[0];
			if (propEndCtx.DOT() && idNode) {
				this.addVTLInstance(this.symbols, idNode, VTLType.Symbol);
			} else if (propEndCtx.OPAR() && propEndCtx.CPAR() && idNode) {
				this.addVTLInstance(this.properties_methods, idNode, VTLType.Method);
				this.addVTLInstance(this.symbols, idNode, VTLType.Symbol);
			}
		}
	}

	enterVariable(ctx: VariableContext) {
		const idNode = ctx.id()?.ID();
		const refrenceNode = ctx.REFERENCE();
		if (idNode) {
			this.addVTLInstance(this.symbols, idNode, VTLType.Symbol);
		} else if (refrenceNode) {
			this.addVTLInstance(this.symbols, refrenceNode, VTLType.Symbol);
		}
	}

	enterProperty_or_method(ctx: Property_or_methodContext) {
		const varCtx = ctx.variable();
		const idNode = varCtx.id()?.ID();
		
		if (idNode) {
			let propEndCtxList = ctx.property_end();
			if (propEndCtxList.length > 0) {
				let propEndCtx = propEndCtxList[0];
				if (propEndCtx.DOT()) {
					this.addVTLInstance(this.symbols, idNode, VTLType.Symbol);
				} else if (propEndCtx.OPAR() && propEndCtx.CPAR()) {
					this.addVTLInstance(this.properties_methods, idNode, VTLType.Method);
				}
			}
		}
	}

	enterProperty_end(ctx: Property_endContext) {
		const idNode = ctx.ID();
		if (ctx.DOT() && idNode) {
			this.addVTLInstance(this.properties_methods, idNode, VTLType.Property);
			this.addVTLInstance(this.symbols, idNode, VTLType.Symbol);
		}
	}

	enterMacro_directive(ctx: Macro_directiveContext) {
		let expList = ctx.expression();
		if (expList && expList.length > 0) {
			let idNode = expList[0].id()?.ID();
			if (idNode) {
				this.addVTLInstance(this.macros, idNode, VTLType.Symbol);
			}
		}
	}

}