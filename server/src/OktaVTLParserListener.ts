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
	variables = new Map<string, VTLSymbol>();
	properties_methods = new Map<string, VTLSymbol>();
	macros = new Map<string, VTLSymbol>();
	//key is the line number
	tokens = new Map<number, Array<VTLToken>>();
	foldings = new Array<FoldingRange>();

	private addVTLInstance(map: Map<string, VTLSymbol>, node: TerminalNode, type: VTLType) {
		const name = node.text.replace(/\$!?\{?/, "").replace("}", ""); // For type(REFERENCE)

		const range = {
			start: {
				line: node.symbol.line - 1,
				character: node.symbol.charPositionInLine
			},
			end: {
				line: node.symbol.line - 1,
				character: (node.symbol.charPositionInLine + (name?.length ?? 0))
			}
		};

		let symbol = map.get(name);

		if (symbol) {
			symbol.ranges.push(range);
		} else {
			symbol = {
				name: name,
				type: type,
				argList: [],
				ranges: [range]
			};
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
		const idNode = ctx.id()?.ID();
		if (idNode) {
			this.addVTLInstance(this.variables, idNode, VTLType.Variable);
		}
		//skip the format with formal_property_or_method
	}

	enterFormal_property_or_method(ctx: Formal_property_or_methodContext) {
		const idNode = ctx.id()?.ID();
		if (idNode) {
			this.addVTLInstance(this.variables, idNode, VTLType.Variable);
		}
	}

	enterVariable(ctx: VariableContext) {
		const idNode = ctx.id()?.ID();
		const refrenceNode = ctx.REFERENCE();
		if (idNode) {
			this.addVTLInstance(this.variables, idNode, VTLType.Variable);
		} else if (refrenceNode) {
			this.addVTLInstance(this.variables, refrenceNode, VTLType.Variable);
		}
	}

	enterProperty_or_method(ctx: Property_or_methodContext) {
		const varCtx = ctx.variable();
		const idNode = varCtx.id()?.ID();
		
		if (idNode) {
			this.addVTLInstance(this.variables, idNode, VTLType.Variable);
		}
	}

	enterProperty_end(ctx: Property_endContext) {
		const idNode = ctx.ID(); //ether proper or method
		if (ctx.DOT() && idNode) {
			this.addVTLInstance(this.properties_methods, idNode, VTLType.Property_Method);
		}
	}

	enterMacro_directive(ctx: Macro_directiveContext) {
		const expList = ctx.expression();
		if (expList && expList.length > 0) {
			const idNode = expList[0].id()?.ID();
			if (idNode) {
				this.addVTLInstance(this.macros, idNode, VTLType.Variable);
			}
		}
	}

}