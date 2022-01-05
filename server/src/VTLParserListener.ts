// Generated from VTLParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./VTLParser";
import { BlockContext } from "./VTLParser";
import { AtomContext } from "./VTLParser";
import { FormalContext } from "./VTLParser";
import { VariableContext } from "./VTLParser";
import { Property_or_methodContext } from "./VTLParser";
import { Formal_property_or_methodContext } from "./VTLParser";
import { DirectiveContext } from "./VTLParser";
import { Property_endContext } from "./VTLParser";
import { ExpressionsContext } from "./VTLParser";
import { Set_directiveContext } from "./VTLParser";
import { If_directiveContext } from "./VTLParser";
import { Elseif_directiveContext } from "./VTLParser";
import { Else_directiveContext } from "./VTLParser";
import { Foreach_directiveContext } from "./VTLParser";
import { Break_directiveContext } from "./VTLParser";
import { Stop_directiveContext } from "./VTLParser";
import { Custom_directiveContext } from "./VTLParser";
import { Macro_directiveContext } from "./VTLParser";
import { Parse_directiveContext } from "./VTLParser";
import { Define_directiveContext } from "./VTLParser";
import { Include_directiveContext } from "./VTLParser";
import { Evaluate_directiveContext } from "./VTLParser";
import { Macro_call_directiveContext } from "./VTLParser";
import { EndContext } from "./VTLParser";
import { ExpressionContext } from "./VTLParser";
import { ListContext } from "./VTLParser";
import { MapContext } from "./VTLParser";
import { Map_entriesContext } from "./VTLParser";
import { Map_entryContext } from "./VTLParser";
import { IdContext } from "./VTLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VTLParser`.
 */
export interface VTLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `VTLParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.formal`.
	 * @param ctx the parse tree
	 */
	enterFormal?: (ctx: FormalContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.formal`.
	 * @param ctx the parse tree
	 */
	exitFormal?: (ctx: FormalContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.property_or_method`.
	 * @param ctx the parse tree
	 */
	enterProperty_or_method?: (ctx: Property_or_methodContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.property_or_method`.
	 * @param ctx the parse tree
	 */
	exitProperty_or_method?: (ctx: Property_or_methodContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.formal_property_or_method`.
	 * @param ctx the parse tree
	 */
	enterFormal_property_or_method?: (ctx: Formal_property_or_methodContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.formal_property_or_method`.
	 * @param ctx the parse tree
	 */
	exitFormal_property_or_method?: (ctx: Formal_property_or_methodContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.property_end`.
	 * @param ctx the parse tree
	 */
	enterProperty_end?: (ctx: Property_endContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.property_end`.
	 * @param ctx the parse tree
	 */
	exitProperty_end?: (ctx: Property_endContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.set_directive`.
	 * @param ctx the parse tree
	 */
	enterSet_directive?: (ctx: Set_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.set_directive`.
	 * @param ctx the parse tree
	 */
	exitSet_directive?: (ctx: Set_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.if_directive`.
	 * @param ctx the parse tree
	 */
	enterIf_directive?: (ctx: If_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.if_directive`.
	 * @param ctx the parse tree
	 */
	exitIf_directive?: (ctx: If_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.elseif_directive`.
	 * @param ctx the parse tree
	 */
	enterElseif_directive?: (ctx: Elseif_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.elseif_directive`.
	 * @param ctx the parse tree
	 */
	exitElseif_directive?: (ctx: Elseif_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.else_directive`.
	 * @param ctx the parse tree
	 */
	enterElse_directive?: (ctx: Else_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.else_directive`.
	 * @param ctx the parse tree
	 */
	exitElse_directive?: (ctx: Else_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.foreach_directive`.
	 * @param ctx the parse tree
	 */
	enterForeach_directive?: (ctx: Foreach_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.foreach_directive`.
	 * @param ctx the parse tree
	 */
	exitForeach_directive?: (ctx: Foreach_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.break_directive`.
	 * @param ctx the parse tree
	 */
	enterBreak_directive?: (ctx: Break_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.break_directive`.
	 * @param ctx the parse tree
	 */
	exitBreak_directive?: (ctx: Break_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.stop_directive`.
	 * @param ctx the parse tree
	 */
	enterStop_directive?: (ctx: Stop_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.stop_directive`.
	 * @param ctx the parse tree
	 */
	exitStop_directive?: (ctx: Stop_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.custom_directive`.
	 * @param ctx the parse tree
	 */
	enterCustom_directive?: (ctx: Custom_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.custom_directive`.
	 * @param ctx the parse tree
	 */
	exitCustom_directive?: (ctx: Custom_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.macro_directive`.
	 * @param ctx the parse tree
	 */
	enterMacro_directive?: (ctx: Macro_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.macro_directive`.
	 * @param ctx the parse tree
	 */
	exitMacro_directive?: (ctx: Macro_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.parse_directive`.
	 * @param ctx the parse tree
	 */
	enterParse_directive?: (ctx: Parse_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.parse_directive`.
	 * @param ctx the parse tree
	 */
	exitParse_directive?: (ctx: Parse_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.define_directive`.
	 * @param ctx the parse tree
	 */
	enterDefine_directive?: (ctx: Define_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.define_directive`.
	 * @param ctx the parse tree
	 */
	exitDefine_directive?: (ctx: Define_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.include_directive`.
	 * @param ctx the parse tree
	 */
	enterInclude_directive?: (ctx: Include_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.include_directive`.
	 * @param ctx the parse tree
	 */
	exitInclude_directive?: (ctx: Include_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.evaluate_directive`.
	 * @param ctx the parse tree
	 */
	enterEvaluate_directive?: (ctx: Evaluate_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.evaluate_directive`.
	 * @param ctx the parse tree
	 */
	exitEvaluate_directive?: (ctx: Evaluate_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.macro_call_directive`.
	 * @param ctx the parse tree
	 */
	enterMacro_call_directive?: (ctx: Macro_call_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.macro_call_directive`.
	 * @param ctx the parse tree
	 */
	exitMacro_call_directive?: (ctx: Macro_call_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.map_entries`.
	 * @param ctx the parse tree
	 */
	enterMap_entries?: (ctx: Map_entriesContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.map_entries`.
	 * @param ctx the parse tree
	 */
	exitMap_entries?: (ctx: Map_entriesContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.map_entry`.
	 * @param ctx the parse tree
	 */
	enterMap_entry?: (ctx: Map_entryContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.map_entry`.
	 * @param ctx the parse tree
	 */
	exitMap_entry?: (ctx: Map_entryContext) => void;

	/**
	 * Enter a parse tree produced by `VTLParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `VTLParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
}

