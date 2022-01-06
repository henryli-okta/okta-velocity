// Generated from VTLParser.g4 by ANTLR 4.9.0-SNAPSHOT
/* eslint-disable no-useless-escape */

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VTLParserListener } from "./VTLParserListener";

export class VTLParser extends Parser {
	public static readonly OPAR = 1;
	public static readonly CPAR = 2;
	public static readonly OBRACK = 3;
	public static readonly CBRACK = 4;
	public static readonly OBRACE = 5;
	public static readonly CBRACE = 6;
	public static readonly STRING = 7;
	public static readonly INTEGER = 8;
	public static readonly ID = 9;
	public static readonly REFERENCE = 10;
	public static readonly DOT = 11;
	public static readonly COMMA = 12;
	public static readonly ASSIGN = 13;
	public static readonly EQ = 14;
	public static readonly NE = 15;
	public static readonly AND = 16;
	public static readonly OR = 17;
	public static readonly K_NULL = 18;
	public static readonly ADD = 19;
	public static readonly SUB = 20;
	public static readonly MUL = 21;
	public static readonly DIV = 22;
	public static readonly MOD = 23;
	public static readonly COLON = 24;
	public static readonly FLOAT = 25;
	public static readonly RANGE = 26;
	public static readonly LT = 27;
	public static readonly LE = 28;
	public static readonly GT = 29;
	public static readonly GE = 30;
	public static readonly EXCL = 31;
	public static readonly K_LT = 32;
	public static readonly K_LE = 33;
	public static readonly K_GT = 34;
	public static readonly K_GE = 35;
	public static readonly K_EQ = 36;
	public static readonly K_NE = 37;
	public static readonly K_TRUE = 38;
	public static readonly K_FALSE = 39;
	public static readonly K_AND = 40;
	public static readonly K_OR = 41;
	public static readonly K_NOT = 42;
	public static readonly K_IN = 43;
	public static readonly IF = 44;
	public static readonly ELSEIF = 45;
	public static readonly ELSE = 46;
	public static readonly FOREACH = 47;
	public static readonly SET = 48;
	public static readonly END = 49;
	public static readonly BREAK = 50;
	public static readonly MACRO_ID = 51;
	public static readonly MACRO = 52;
	public static readonly STOP = 53;
	public static readonly INCLUDE = 54;
	public static readonly EVALUATE = 55;
	public static readonly PARSE = 56;
	public static readonly DEFINE = 57;
	public static readonly ESCAPED_CHAR = 58;
	public static readonly ESCAPED_DOLLAR_OTHER = 59;
	public static readonly ESCAPED_DIRECTIVE = 60;
	public static readonly START_DIRECTIVE = 61;
	public static readonly DOLLAR_EXCL_OBRACE = 62;
	public static readonly DOLLAR_OBRACE = 63;
	public static readonly DOLLAR_EXCL = 64;
	public static readonly DOLLAR = 65;
	public static readonly TEXT = 66;
	public static readonly ESCAPED_BLOCK = 67;
	public static readonly SNGLE_LINE_COMMENT = 68;
	public static readonly VTL_COMMENT_BLOCK = 69;
	public static readonly MULTI_LINE_COMMENT = 70;
	public static readonly VAR_HASH = 71;
	public static readonly CODE_SPACES = 72;
	public static readonly FRM_DOT = 73;
	public static readonly FRM_CBRACE = 74;
	public static readonly CODE_K_LT = 75;
	public static readonly CODE_K_LE = 76;
	public static readonly CODE_K_GT = 77;
	public static readonly CODE_K_GE = 78;
	public static readonly CODE_K_EQ = 79;
	public static readonly CODE_K_NE = 80;
	public static readonly CODE_K_TRUE = 81;
	public static readonly CODE_K_FALSE = 82;
	public static readonly CODE_K_AND = 83;
	public static readonly CODE_K_OR = 84;
	public static readonly CODE_K_NOT = 85;
	public static readonly CODE_K_NULL = 86;
	public static readonly CODE_K_IN = 87;
	public static readonly CODE_ADD = 88;
	public static readonly CODE_SUB = 89;
	public static readonly CODE_MUL = 90;
	public static readonly CODE_DIV = 91;
	public static readonly CODE_MOD = 92;
	public static readonly CODE_EXCL = 93;
	public static readonly CODE_OR = 94;
	public static readonly CODE_AND = 95;
	public static readonly CODE_ASSIGN = 96;
	public static readonly CODE_EQ = 97;
	public static readonly CODE_NEQ = 98;
	public static readonly CODE_LT = 99;
	public static readonly CODE_LE = 100;
	public static readonly CODE_GT = 101;
	public static readonly CODE_GE = 102;
	public static readonly CODE_CPAR = 103;
	public static readonly CODE_COLON = 104;
	public static readonly CODE_RANGE = 105;
	public static readonly CODE_OBRACK = 106;
	public static readonly CODE_CBRACK = 107;
	public static readonly CODE_OBRACE = 108;
	public static readonly CODE_COMMA = 109;
	public static readonly RULE_parse = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_atom = 2;
	public static readonly RULE_formal = 3;
	public static readonly RULE_variable = 4;
	public static readonly RULE_property_or_method = 5;
	public static readonly RULE_formal_property_or_method = 6;
	public static readonly RULE_directive = 7;
	public static readonly RULE_property_end = 8;
	public static readonly RULE_expressions = 9;
	public static readonly RULE_set_directive = 10;
	public static readonly RULE_if_directive = 11;
	public static readonly RULE_elseif_directive = 12;
	public static readonly RULE_else_directive = 13;
	public static readonly RULE_foreach_directive = 14;
	public static readonly RULE_break_directive = 15;
	public static readonly RULE_stop_directive = 16;
	public static readonly RULE_custom_directive = 17;
	public static readonly RULE_macro_directive = 18;
	public static readonly RULE_parse_directive = 19;
	public static readonly RULE_define_directive = 20;
	public static readonly RULE_include_directive = 21;
	public static readonly RULE_evaluate_directive = 22;
	public static readonly RULE_macro_call_directive = 23;
	public static readonly RULE_end = 24;
	public static readonly RULE_expression = 25;
	public static readonly RULE_list = 26;
	public static readonly RULE_map = 27;
	public static readonly RULE_map_entries = 28;
	public static readonly RULE_map_entry = 29;
	public static readonly RULE_id = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "block", "atom", "formal", "variable", "property_or_method", 
		"formal_property_or_method", "directive", "property_end", "expressions", 
		"set_directive", "if_directive", "elseif_directive", "else_directive", 
		"foreach_directive", "break_directive", "stop_directive", "custom_directive", 
		"macro_directive", "parse_directive", "define_directive", "include_directive", 
		"evaluate_directive", "macro_call_directive", "end", "expression", "list", 
		"map", "map_entries", "map_entry", "id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'#'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'lt'", "'le'", 
		"'gt'", "'ge'", "'eq'", "'ne'", "'true'", "'false'", "'and'", "'or'", 
		"'not'", "'null'", "'in'", "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "'||'", 
		"'&&'", "'='", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "')'", "':'", 
		"'..'", "'['", undefined, "'{'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPAR", "CPAR", "OBRACK", "CBRACK", "OBRACE", "CBRACE", "STRING", 
		"INTEGER", "ID", "REFERENCE", "DOT", "COMMA", "ASSIGN", "EQ", "NE", "AND", 
		"OR", "K_NULL", "ADD", "SUB", "MUL", "DIV", "MOD", "COLON", "FLOAT", "RANGE", 
		"LT", "LE", "GT", "GE", "EXCL", "K_LT", "K_LE", "K_GT", "K_GE", "K_EQ", 
		"K_NE", "K_TRUE", "K_FALSE", "K_AND", "K_OR", "K_NOT", "K_IN", "IF", "ELSEIF", 
		"ELSE", "FOREACH", "SET", "END", "BREAK", "MACRO_ID", "MACRO", "STOP", 
		"INCLUDE", "EVALUATE", "PARSE", "DEFINE", "ESCAPED_CHAR", "ESCAPED_DOLLAR_OTHER", 
		"ESCAPED_DIRECTIVE", "START_DIRECTIVE", "DOLLAR_EXCL_OBRACE", "DOLLAR_OBRACE", 
		"DOLLAR_EXCL", "DOLLAR", "TEXT", "ESCAPED_BLOCK", "SNGLE_LINE_COMMENT", 
		"VTL_COMMENT_BLOCK", "MULTI_LINE_COMMENT", "VAR_HASH", "CODE_SPACES", 
		"FRM_DOT", "FRM_CBRACE", "CODE_K_LT", "CODE_K_LE", "CODE_K_GT", "CODE_K_GE", 
		"CODE_K_EQ", "CODE_K_NE", "CODE_K_TRUE", "CODE_K_FALSE", "CODE_K_AND", 
		"CODE_K_OR", "CODE_K_NOT", "CODE_K_NULL", "CODE_K_IN", "CODE_ADD", "CODE_SUB", 
		"CODE_MUL", "CODE_DIV", "CODE_MOD", "CODE_EXCL", "CODE_OR", "CODE_AND", 
		"CODE_ASSIGN", "CODE_EQ", "CODE_NEQ", "CODE_LT", "CODE_LE", "CODE_GT", 
		"CODE_GE", "CODE_CPAR", "CODE_COLON", "CODE_RANGE", "CODE_OBRACK", "CODE_CBRACK", 
		"CODE_OBRACE", "CODE_COMMA",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VTLParser._LITERAL_NAMES, VTLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VTLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "VTLParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return VTLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VTLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VTLParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		const _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VTLParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.block();
			this.state = 63;
			this.match(VTLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		const _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VTLParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.ID || _la === VTLParser.REFERENCE || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (VTLParser.IF - 44)) | (1 << (VTLParser.FOREACH - 44)) | (1 << (VTLParser.SET - 44)) | (1 << (VTLParser.BREAK - 44)) | (1 << (VTLParser.MACRO_ID - 44)) | (1 << (VTLParser.MACRO - 44)) | (1 << (VTLParser.STOP - 44)) | (1 << (VTLParser.INCLUDE - 44)) | (1 << (VTLParser.EVALUATE - 44)) | (1 << (VTLParser.PARSE - 44)) | (1 << (VTLParser.DEFINE - 44)) | (1 << (VTLParser.ESCAPED_CHAR - 44)) | (1 << (VTLParser.ESCAPED_DOLLAR_OTHER - 44)) | (1 << (VTLParser.ESCAPED_DIRECTIVE - 44)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 44)) | (1 << (VTLParser.DOLLAR_OBRACE - 44)) | (1 << (VTLParser.DOLLAR_EXCL - 44)) | (1 << (VTLParser.DOLLAR - 44)) | (1 << (VTLParser.TEXT - 44)) | (1 << (VTLParser.ESCAPED_BLOCK - 44)))) !== 0)) {
				{
				{
				this.state = 65;
				this.atom();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		const _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, VTLParser.RULE_atom);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.match(VTLParser.TEXT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(VTLParser.ESCAPED_CHAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.match(VTLParser.ESCAPED_BLOCK);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 74;
				this.match(VTLParser.ESCAPED_DOLLAR_OTHER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 75;
				this.variable();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 76;
				this.formal();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 77;
				this.property_or_method();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 78;
				this.match(VTLParser.ESCAPED_DIRECTIVE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 79;
				this.directive();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formal(): FormalContext {
		const _localctx: FormalContext = new FormalContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VTLParser.RULE_formal);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(VTLParser.DOLLAR_OBRACE);
				this.state = 83;
				this.formal_property_or_method();
				this.state = 84;
				this.match(VTLParser.CBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.match(VTLParser.DOLLAR_EXCL_OBRACE);
				this.state = 87;
				this.formal_property_or_method();
				this.state = 88;
				this.match(VTLParser.CBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 90;
				this.match(VTLParser.DOLLAR_OBRACE);
				this.state = 91;
				this.id();
				this.state = 92;
				this.match(VTLParser.CBRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 94;
				this.match(VTLParser.DOLLAR_EXCL_OBRACE);
				this.state = 95;
				this.id();
				this.state = 96;
				this.match(VTLParser.CBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		const _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VTLParser.RULE_variable);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VTLParser.DOLLAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.match(VTLParser.DOLLAR);
				this.state = 101;
				this.id();
				this.state = 103;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 102;
					this.match(VTLParser.DOT);
					}
					break;
				}
				}
				break;
			case VTLParser.DOLLAR_EXCL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.match(VTLParser.DOLLAR_EXCL);
				this.state = 106;
				this.id();
				this.state = 108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 107;
					this.match(VTLParser.DOT);
					}
					break;
				}
				}
				break;
			case VTLParser.REFERENCE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 110;
				this.match(VTLParser.REFERENCE);
				this.state = 112;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 111;
					this.match(VTLParser.DOT);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property_or_method(): Property_or_methodContext {
		const _localctx: Property_or_methodContext = new Property_or_methodContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VTLParser.RULE_property_or_method);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.variable();
			this.state = 118;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 117;
					this.property_end();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 120;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formal_property_or_method(): Formal_property_or_methodContext {
		const _localctx: Formal_property_or_methodContext = new Formal_property_or_methodContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VTLParser.RULE_formal_property_or_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.id();
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 123;
				this.property_end();
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OPAR) | (1 << VTLParser.OBRACK) | (1 << VTLParser.DOT))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		const _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VTLParser.RULE_directive);
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VTLParser.SET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.set_directive();
				}
				break;
			case VTLParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.if_directive();
				}
				break;
			case VTLParser.FOREACH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 130;
				this.foreach_directive();
				}
				break;
			case VTLParser.BREAK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 131;
				this.break_directive();
				}
				break;
			case VTLParser.STOP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 132;
				this.stop_directive();
				}
				break;
			case VTLParser.MACRO:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 133;
				this.macro_directive();
				}
				break;
			case VTLParser.PARSE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 134;
				this.parse_directive();
				}
				break;
			case VTLParser.DEFINE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 135;
				this.define_directive();
				}
				break;
			case VTLParser.INCLUDE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 136;
				this.include_directive();
				}
				break;
			case VTLParser.EVALUATE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 137;
				this.evaluate_directive();
				}
				break;
			case VTLParser.MACRO_ID:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 138;
				this.macro_call_directive();
				}
				break;
			case VTLParser.ID:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 139;
				this.custom_directive();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property_end(): Property_endContext {
		const _localctx: Property_endContext = new Property_endContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VTLParser.RULE_property_end);
		let _la: number;
		try {
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VTLParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 142;
				this.match(VTLParser.DOT);
				this.state = 143;
				this.match(VTLParser.ID);
				}
				break;
			case VTLParser.OBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.match(VTLParser.OBRACK);
				this.state = 145;
				this.expression(0);
				this.state = 146;
				this.match(VTLParser.CBRACK);
				}
				break;
			case VTLParser.OPAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 148;
				this.match(VTLParser.OPAR);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.INTEGER - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.REFERENCE - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.FLOAT - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_EXCL - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
					{
					this.state = 149;
					this.expressions();
					}
				}

				this.state = 152;
				this.match(VTLParser.CPAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressions(): ExpressionsContext {
		const _localctx: ExpressionsContext = new ExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VTLParser.RULE_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.expression(0);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.COMMA) {
				{
				{
				this.state = 156;
				this.match(VTLParser.COMMA);
				this.state = 157;
				this.expression(0);
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set_directive(): Set_directiveContext {
		const _localctx: Set_directiveContext = new Set_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VTLParser.RULE_set_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(VTLParser.SET);
			this.state = 164;
			this.expression(0);
			this.state = 165;
			this.match(VTLParser.ASSIGN);
			this.state = 166;
			this.expression(0);
			this.state = 167;
			this.match(VTLParser.CPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_directive(): If_directiveContext {
		const _localctx: If_directiveContext = new If_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VTLParser.RULE_if_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(VTLParser.IF);
			this.state = 170;
			this.expression(0);
			this.state = 171;
			this.match(VTLParser.CPAR);
			this.state = 172;
			this.block();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.ELSEIF) {
				{
				{
				this.state = 173;
				this.elseif_directive();
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VTLParser.ELSE) {
				{
				this.state = 179;
				this.else_directive();
				}
			}

			this.state = 182;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseif_directive(): Elseif_directiveContext {
		const _localctx: Elseif_directiveContext = new Elseif_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, VTLParser.RULE_elseif_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(VTLParser.ELSEIF);
			this.state = 185;
			this.expression(0);
			this.state = 186;
			this.match(VTLParser.CPAR);
			this.state = 187;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_directive(): Else_directiveContext {
		const _localctx: Else_directiveContext = new Else_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, VTLParser.RULE_else_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(VTLParser.ELSE);
			this.state = 190;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreach_directive(): Foreach_directiveContext {
		const _localctx: Foreach_directiveContext = new Foreach_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, VTLParser.RULE_foreach_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(VTLParser.FOREACH);
			this.state = 193;
			this.variable();
			this.state = 194;
			this.match(VTLParser.K_IN);
			this.state = 195;
			this.expression(0);
			this.state = 196;
			this.match(VTLParser.CPAR);
			this.state = 197;
			this.block();
			this.state = 198;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public break_directive(): Break_directiveContext {
		const _localctx: Break_directiveContext = new Break_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VTLParser.RULE_break_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(VTLParser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stop_directive(): Stop_directiveContext {
		const _localctx: Stop_directiveContext = new Stop_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VTLParser.RULE_stop_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(VTLParser.STOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public custom_directive(): Custom_directiveContext {
		const _localctx: Custom_directiveContext = new Custom_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, VTLParser.RULE_custom_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(VTLParser.ID);
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.INTEGER - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.REFERENCE - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.FLOAT - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_EXCL - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
					{
					{
					this.state = 205;
					this.expression(0);
					}
					}
					this.state = 210;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 211;
				this.match(VTLParser.CPAR);
				}
				break;
			}
			this.state = 217;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 214;
				this.block();
				this.state = 215;
				this.end();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macro_directive(): Macro_directiveContext {
		const _localctx: Macro_directiveContext = new Macro_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, VTLParser.RULE_macro_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(VTLParser.MACRO);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.INTEGER - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.REFERENCE - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.FLOAT - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_EXCL - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				{
				this.state = 220;
				this.expression(0);
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			this.match(VTLParser.CPAR);
			this.state = 227;
			this.block();
			this.state = 228;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parse_directive(): Parse_directiveContext {
		const _localctx: Parse_directiveContext = new Parse_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, VTLParser.RULE_parse_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(VTLParser.PARSE);
			this.state = 231;
			this.expression(0);
			this.state = 232;
			this.match(VTLParser.CPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public define_directive(): Define_directiveContext {
		const _localctx: Define_directiveContext = new Define_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, VTLParser.RULE_define_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(VTLParser.DEFINE);
			this.state = 235;
			this.expression(0);
			this.state = 236;
			this.match(VTLParser.CPAR);
			this.state = 237;
			this.block();
			this.state = 238;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public include_directive(): Include_directiveContext {
		const _localctx: Include_directiveContext = new Include_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, VTLParser.RULE_include_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(VTLParser.INCLUDE);
			this.state = 241;
			this.expressions();
			this.state = 242;
			this.match(VTLParser.CPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evaluate_directive(): Evaluate_directiveContext {
		const _localctx: Evaluate_directiveContext = new Evaluate_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, VTLParser.RULE_evaluate_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(VTLParser.EVALUATE);
			this.state = 245;
			this.expression(0);
			this.state = 246;
			this.match(VTLParser.CPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macro_call_directive(): Macro_call_directiveContext {
		const _localctx: Macro_call_directiveContext = new Macro_call_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, VTLParser.RULE_macro_call_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(VTLParser.MACRO_ID);
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.INTEGER - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.REFERENCE - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.FLOAT - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_EXCL - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				{
				this.state = 249;
				this.expression(0);
				}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 255;
			this.match(VTLParser.CPAR);
			this.state = 256;
			this.block();
			this.state = 257;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		const _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, VTLParser.RULE_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(VTLParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		const _parentctx: ParserRuleContext = this._ctx;
		const _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		const _startState = 50;
		this.enterRecursionRule(_localctx, 50, VTLParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 262;
				_la = this._input.LA(1);
				if (!(_la === VTLParser.EXCL || _la === VTLParser.K_NOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 263;
				this.expression(19);
				}
				break;

			case 2:
				{
				this.state = 264;
				this.match(VTLParser.SUB);
				this.state = 265;
				this.expression(18);
				}
				break;

			case 3:
				{
				this.state = 266;
				this.list();
				}
				break;

			case 4:
				{
				this.state = 267;
				this.map();
				}
				break;

			case 5:
				{
				this.state = 268;
				this.formal();
				}
				break;

			case 6:
				{
				this.state = 269;
				this.property_or_method();
				}
				break;

			case 7:
				{
				this.state = 270;
				this.variable();
				}
				break;

			case 8:
				{
				this.state = 271;
				this.id();
				}
				break;

			case 9:
				{
				this.state = 272;
				this.match(VTLParser.STRING);
				}
				break;

			case 10:
				{
				this.state = 273;
				this.match(VTLParser.INTEGER);
				}
				break;

			case 11:
				{
				this.state = 274;
				this.match(VTLParser.FLOAT);
				}
				break;

			case 12:
				{
				this.state = 275;
				this.match(VTLParser.K_NULL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 301;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 299;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 278;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 279;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.MUL) | (1 << VTLParser.DIV) | (1 << VTLParser.MOD))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 280;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 281;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 282;
						_la = this._input.LA(1);
						if (!(_la === VTLParser.ADD || _la === VTLParser.SUB)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 283;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 284;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 285;
						_la = this._input.LA(1);
						if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (VTLParser.EQ - 14)) | (1 << (VTLParser.NE - 14)) | (1 << (VTLParser.K_EQ - 14)) | (1 << (VTLParser.K_NE - 14)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 286;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 287;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 288;
						_la = this._input.LA(1);
						if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (VTLParser.LT - 27)) | (1 << (VTLParser.LE - 27)) | (1 << (VTLParser.GT - 27)) | (1 << (VTLParser.GE - 27)) | (1 << (VTLParser.K_LT - 27)) | (1 << (VTLParser.K_LE - 27)) | (1 << (VTLParser.K_GT - 27)) | (1 << (VTLParser.K_GE - 27)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 289;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 290;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 291;
						_la = this._input.LA(1);
						if (!(_la === VTLParser.AND || _la === VTLParser.K_AND)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 292;
						this.expression(14);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 293;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 294;
						_la = this._input.LA(1);
						if (!(_la === VTLParser.OR || _la === VTLParser.K_OR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 295;
						this.expression(13);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 296;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 297;
						this.match(VTLParser.RANGE);
						this.state = 298;
						this.expression(12);
						}
						break;
					}
					}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		const _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, VTLParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(VTLParser.OBRACK);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.INTEGER - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.REFERENCE - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.FLOAT - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_EXCL - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				this.state = 305;
				this.expressions();
				}
			}

			this.state = 308;
			this.match(VTLParser.CBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map(): MapContext {
		const _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, VTLParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(VTLParser.OBRACE);
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.INTEGER - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.REFERENCE - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.FLOAT - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_OBRACE - 35)) | (1 << (VTLParser.DOLLAR_EXCL - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				this.state = 311;
				this.map_entries();
				}
			}

			this.state = 314;
			this.match(VTLParser.CBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map_entries(): Map_entriesContext {
		const _localctx: Map_entriesContext = new Map_entriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, VTLParser.RULE_map_entries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.map_entry();
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.COMMA) {
				{
				{
				this.state = 317;
				this.match(VTLParser.COMMA);
				this.state = 318;
				this.map_entry();
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map_entry(): Map_entryContext {
		const _localctx: Map_entryContext = new Map_entryContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, VTLParser.RULE_map_entry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.expression(0);
			this.state = 325;
			this.match(VTLParser.COLON);
			this.state = 326;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		const _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, VTLParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if (!(_la === VTLParser.ID || _la === VTLParser.K_NULL || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 25:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

		case 1:
			return this.precpred(this._ctx, 16);

		case 2:
			return this.precpred(this._ctx, 15);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 13);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03o\u014D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x07\x03E\n\x03\f\x03\x0E\x03H\v\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04S\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05e\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06j\n\x06\x03\x06\x03\x06\x03\x06\x05\x06o\n\x06\x03" +
		"\x06\x03\x06\x05\x06s\n\x06\x05\x06u\n\x06\x03\x07\x03\x07\x06\x07y\n" +
		"\x07\r\x07\x0E\x07z\x03\b\x03\b\x06\b\x7F\n\b\r\b\x0E\b\x80\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8F" +
		"\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x99\n\n\x03" +
		"\n\x05\n\x9C\n\n\x03\v\x03\v\x03\v\x07\v\xA1\n\v\f\v\x0E\v\xA4\v\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xB1" +
		"\n\r\f\r\x0E\r\xB4\v\r\x03\r\x05\r\xB7\n\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x07\x13\xD1\n\x13\f\x13\x0E\x13\xD4\v\x13\x03\x13\x05" +
		"\x13\xD7\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\xDC\n\x13\x03\x14\x03\x14" +
		"\x07\x14\xE0\n\x14\f\x14\x0E\x14\xE3\v\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x07\x19\xFD\n\x19\f\x19\x0E\x19\u0100\v\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0117\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u012E" +
		"\n\x1B\f\x1B\x0E\x1B\u0131\v\x1B\x03\x1C\x03\x1C\x05\x1C\u0135\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x05\x1D\u013B\n\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x07\x1E\u0142\n\x1E\f\x1E\x0E\x1E\u0145\v\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x02\x02\x034!\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02\x02\n\x04\x02!!,,\x03\x02\x17" +
		"\x19\x03\x02\x15\x16\x04\x02\x10\x11&\'\x04\x02\x1D \"%\x04\x02\x12\x12" +
		"**\x04\x02\x13\x13++\x05\x02\v\v\x14\x14\"-\x02\u016B\x02@\x03\x02\x02" +
		"\x02\x04F\x03\x02\x02\x02\x06R\x03\x02\x02\x02\bd\x03\x02\x02\x02\nt\x03" +
		"\x02\x02\x02\fv\x03\x02\x02\x02\x0E|\x03\x02\x02\x02\x10\x8E\x03\x02\x02" +
		"\x02\x12\x9B\x03\x02\x02\x02\x14\x9D\x03\x02\x02\x02\x16\xA5\x03\x02\x02" +
		"\x02\x18\xAB\x03\x02\x02\x02\x1A\xBA\x03\x02\x02\x02\x1C\xBF\x03\x02\x02" +
		"\x02\x1E\xC2\x03\x02\x02\x02 \xCA\x03\x02\x02\x02\"\xCC\x03\x02\x02\x02" +
		"$\xCE\x03\x02\x02\x02&\xDD\x03\x02\x02\x02(\xE8\x03\x02\x02\x02*\xEC\x03" +
		"\x02\x02\x02,\xF2\x03\x02\x02\x02.\xF6\x03\x02\x02\x020\xFA\x03\x02\x02" +
		"\x022\u0105\x03\x02\x02\x024\u0116\x03\x02\x02\x026\u0132\x03\x02\x02" +
		"\x028\u0138\x03\x02\x02\x02:\u013E\x03\x02\x02\x02<\u0146\x03\x02\x02" +
		"\x02>\u014A\x03\x02\x02\x02@A\x05\x04\x03\x02AB\x07\x02\x02\x03B\x03\x03" +
		"\x02\x02\x02CE\x05\x06\x04\x02DC\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03" +
		"\x02\x02\x02FG\x03\x02\x02\x02G\x05\x03\x02\x02\x02HF\x03\x02\x02\x02" +
		"IS\x07D\x02\x02JS\x07<\x02\x02KS\x07E\x02\x02LS\x07=\x02\x02MS\x05\n\x06" +
		"\x02NS\x05\b\x05\x02OS\x05\f\x07\x02PS\x07>\x02\x02QS\x05\x10\t\x02RI" +
		"\x03\x02\x02\x02RJ\x03\x02\x02\x02RK\x03\x02\x02\x02RL\x03\x02\x02\x02" +
		"RM\x03\x02\x02\x02RN\x03\x02\x02\x02RO\x03\x02\x02\x02RP\x03\x02\x02\x02" +
		"RQ\x03\x02\x02\x02S\x07\x03\x02\x02\x02TU\x07A\x02\x02UV\x05\x0E\b\x02" +
		"VW\x07\b\x02\x02We\x03\x02\x02\x02XY\x07@\x02\x02YZ\x05\x0E\b\x02Z[\x07" +
		"\b\x02\x02[e\x03\x02\x02\x02\\]\x07A\x02\x02]^\x05> \x02^_\x07\b\x02\x02" +
		"_e\x03\x02\x02\x02`a\x07@\x02\x02ab\x05> \x02bc\x07\b\x02\x02ce\x03\x02" +
		"\x02\x02dT\x03\x02\x02\x02dX\x03\x02\x02\x02d\\\x03\x02\x02\x02d`\x03" +
		"\x02\x02\x02e\t\x03\x02\x02\x02fg\x07C\x02\x02gi\x05> \x02hj\x07\r\x02" +
		"\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02ju\x03\x02\x02\x02kl\x07B\x02" +
		"\x02ln\x05> \x02mo\x07\r\x02\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02o" +
		"u\x03\x02\x02\x02pr\x07\f\x02\x02qs\x07\r\x02\x02rq\x03\x02\x02\x02rs" +
		"\x03\x02\x02\x02su\x03\x02\x02\x02tf\x03\x02\x02\x02tk\x03\x02\x02\x02" +
		"tp\x03\x02\x02\x02u\v\x03\x02\x02\x02vx\x05\n\x06\x02wy\x05\x12\n\x02" +
		"xw\x03\x02\x02\x02yz\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02" +
		"{\r\x03\x02\x02\x02|~\x05> \x02}\x7F\x05\x12\n\x02~}\x03\x02\x02\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81" +
		"\x0F\x03\x02\x02\x02\x82\x8F\x05\x16\f\x02\x83\x8F\x05\x18\r\x02\x84\x8F" +
		"\x05\x1E\x10\x02\x85\x8F\x05 \x11\x02\x86\x8F\x05\"\x12\x02\x87\x8F\x05" +
		"&\x14\x02\x88\x8F\x05(\x15\x02\x89\x8F\x05*\x16\x02\x8A\x8F\x05,\x17\x02" +
		"\x8B\x8F\x05.\x18\x02\x8C\x8F\x050\x19\x02\x8D\x8F\x05$\x13\x02\x8E\x82" +
		"\x03\x02\x02\x02\x8E\x83\x03\x02\x02\x02\x8E\x84\x03\x02\x02\x02\x8E\x85" +
		"\x03\x02\x02\x02\x8E\x86\x03\x02\x02\x02\x8E\x87\x03\x02\x02\x02\x8E\x88" +
		"\x03\x02\x02\x02\x8E\x89\x03\x02\x02\x02\x8E\x8A\x03\x02\x02\x02\x8E\x8B" +
		"\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8D\x03\x02\x02\x02\x8F\x11" +
		"\x03\x02\x02\x02\x90\x91\x07\r\x02\x02\x91\x9C\x07\v\x02\x02\x92\x93\x07" +
		"\x05\x02\x02\x93\x94\x054\x1B\x02\x94\x95\x07\x06\x02\x02\x95\x9C\x03" +
		"\x02\x02\x02\x96\x98\x07\x03\x02\x02\x97\x99\x05\x14\v\x02\x98\x97\x03" +
		"\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x07" +
		"\x04\x02\x02\x9B\x90\x03\x02\x02\x02\x9B\x92\x03\x02\x02\x02\x9B\x96\x03" +
		"\x02\x02\x02\x9C\x13\x03\x02\x02\x02\x9D\xA2\x054\x1B\x02\x9E\x9F\x07" +
		"\x0E\x02\x02\x9F\xA1\x054\x1B\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA4\x03" +
		"\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\x15\x03" +
		"\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6\x072\x02\x02\xA6\xA7\x05" +
		"4\x1B\x02\xA7\xA8\x07\x0F\x02\x02\xA8\xA9\x054\x1B\x02\xA9\xAA\x07\x04" +
		"\x02\x02\xAA\x17\x03\x02\x02\x02\xAB\xAC\x07.\x02\x02\xAC\xAD\x054\x1B" +
		"\x02\xAD\xAE\x07\x04\x02\x02\xAE\xB2\x05\x04\x03\x02\xAF\xB1\x05\x1A\x0E" +
		"\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
		"\x02\xB5\xB7\x05\x1C\x0F\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02" +
		"\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x052\x1A\x02\xB9\x19\x03\x02\x02" +
		"\x02\xBA\xBB\x07/\x02\x02\xBB\xBC\x054\x1B\x02\xBC\xBD\x07\x04\x02\x02" +
		"\xBD\xBE\x05\x04\x03\x02\xBE\x1B\x03\x02\x02\x02\xBF\xC0\x070\x02\x02" +
		"\xC0\xC1\x05\x04\x03\x02\xC1\x1D\x03\x02\x02\x02\xC2\xC3\x071\x02\x02" +
		"\xC3\xC4\x05\n\x06\x02\xC4\xC5\x07-\x02\x02\xC5\xC6\x054\x1B\x02\xC6\xC7" +
		"\x07\x04\x02\x02\xC7\xC8\x05\x04\x03\x02\xC8\xC9\x052\x1A\x02\xC9\x1F" +
		"\x03\x02\x02\x02\xCA\xCB\x074\x02\x02\xCB!\x03\x02\x02\x02\xCC\xCD\x07" +
		"7\x02\x02\xCD#\x03\x02\x02\x02\xCE\xD6\x07\v\x02\x02\xCF\xD1\x054\x1B" +
		"\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02" +
		"\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD2\x03\x02\x02" +
		"\x02\xD5\xD7\x07\x04\x02\x02\xD6\xD2\x03\x02\x02\x02\xD6\xD7\x03\x02\x02" +
		"\x02\xD7\xDB\x03\x02\x02\x02\xD8\xD9\x05\x04\x03\x02\xD9\xDA\x052\x1A" +
		"\x02\xDA\xDC\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02\xDB\xDC\x03\x02\x02" +
		"\x02\xDC%\x03\x02\x02\x02\xDD\xE1\x076\x02\x02\xDE\xE0\x054\x1B\x02\xDF" +
		"\xDE\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1" +
		"\xE2\x03\x02\x02\x02\xE2\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4" +
		"\xE5\x07\x04\x02\x02\xE5\xE6\x05\x04\x03\x02\xE6\xE7\x052\x1A\x02\xE7" +
		"\'\x03\x02\x02\x02\xE8\xE9\x07:\x02\x02\xE9\xEA\x054\x1B\x02\xEA\xEB\x07" +
		"\x04\x02\x02\xEB)\x03\x02\x02\x02\xEC\xED\x07;\x02\x02\xED\xEE\x054\x1B" +
		"\x02\xEE\xEF\x07\x04\x02\x02\xEF\xF0\x05\x04\x03\x02\xF0\xF1\x052\x1A" +
		"\x02\xF1+\x03\x02\x02\x02\xF2\xF3\x078\x02\x02\xF3\xF4\x05\x14\v\x02\xF4" +
		"\xF5\x07\x04\x02\x02\xF5-\x03\x02\x02\x02\xF6\xF7\x079\x02\x02\xF7\xF8" +
		"\x054\x1B\x02\xF8\xF9\x07\x04\x02\x02\xF9/\x03\x02\x02\x02\xFA\xFE\x07" +
		"5\x02\x02\xFB\xFD\x054\x1B\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02" +
		"\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x03" +
		"\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0102\x07\x04\x02\x02\u0102" +
		"\u0103\x05\x04\x03\x02\u0103\u0104\x052\x1A\x02\u01041\x03\x02\x02\x02" +
		"\u0105\u0106\x073\x02\x02\u01063\x03\x02\x02\x02\u0107\u0108\b\x1B\x01" +
		"\x02\u0108\u0109\t\x02\x02\x02\u0109\u0117\x054\x1B\x15\u010A\u010B\x07" +
		"\x16\x02\x02\u010B\u0117\x054\x1B\x14\u010C\u0117\x056\x1C\x02\u010D\u0117" +
		"\x058\x1D\x02\u010E\u0117\x05\b\x05\x02\u010F\u0117\x05\f\x07\x02\u0110" +
		"\u0117\x05\n\x06\x02\u0111\u0117\x05> \x02\u0112\u0117\x07\t\x02\x02\u0113" +
		"\u0117\x07\n\x02\x02\u0114\u0117\x07\x1B\x02\x02\u0115\u0117\x07\x14\x02" +
		"\x02\u0116\u0107\x03\x02\x02\x02\u0116\u010A\x03\x02\x02\x02\u0116\u010C" +
		"\x03\x02\x02\x02\u0116\u010D\x03\x02\x02\x02\u0116\u010E\x03\x02\x02\x02" +
		"\u0116\u010F\x03\x02\x02\x02\u0116\u0110\x03\x02\x02\x02\u0116\u0111\x03" +
		"\x02\x02\x02\u0116\u0112\x03\x02\x02\x02\u0116\u0113\x03\x02\x02\x02\u0116" +
		"\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117\u012F\x03\x02" +
		"\x02\x02\u0118\u0119\f\x13\x02\x02\u0119\u011A\t\x03\x02\x02\u011A\u012E" +
		"\x054\x1B\x14\u011B\u011C\f\x12\x02\x02\u011C\u011D\t\x04\x02\x02\u011D" +
		"\u012E\x054\x1B\x13\u011E\u011F\f\x11\x02\x02\u011F\u0120\t\x05\x02\x02" +
		"\u0120\u012E\x054\x1B\x12\u0121\u0122\f\x10\x02\x02\u0122\u0123\t\x06" +
		"\x02\x02\u0123\u012E\x054\x1B\x11\u0124\u0125\f\x0F\x02\x02\u0125\u0126" +
		"\t\x07\x02\x02\u0126\u012E\x054\x1B\x10\u0127\u0128\f\x0E\x02\x02\u0128" +
		"\u0129\t\b\x02\x02\u0129\u012E\x054\x1B\x0F\u012A\u012B\f\r\x02\x02\u012B" +
		"\u012C\x07\x1C\x02\x02\u012C\u012E\x054\x1B\x0E\u012D\u0118\x03\x02\x02" +
		"\x02\u012D\u011B\x03\x02\x02\x02\u012D\u011E\x03\x02\x02\x02\u012D\u0121" +
		"\x03\x02\x02\x02\u012D\u0124\x03\x02\x02\x02\u012D\u0127\x03\x02\x02\x02" +
		"\u012D\u012A\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D\x03" +
		"\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u01305\x03\x02\x02\x02\u0131" +
		"\u012F\x03\x02\x02\x02\u0132\u0134\x07\x05\x02\x02\u0133\u0135\x05\x14" +
		"\v\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136" +
		"\x03\x02\x02\x02\u0136\u0137\x07\x06\x02\x02\u01377\x03\x02\x02\x02\u0138" +
		"\u013A\x07\x07\x02\x02\u0139\u013B\x05:\x1E\x02\u013A\u0139\x03\x02\x02" +
		"\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D" +
		"\x07\b\x02\x02\u013D9\x03\x02\x02\x02\u013E\u0143\x05<\x1F\x02\u013F\u0140" +
		"\x07\x0E\x02\x02\u0140\u0142\x05<\x1F\x02\u0141\u013F\x03\x02\x02\x02" +
		"\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03" +
		"\x02\x02\x02\u0144;\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146" +
		"\u0147\x054\x1B\x02\u0147\u0148\x07\x1A\x02\x02\u0148\u0149\x054\x1B\x02" +
		"\u0149=\x03\x02\x02\x02\u014A\u014B\t\t\x02\x02\u014B?\x03\x02\x02\x02" +
		"\x1CFRdinrtz\x80\x8E\x98\x9B\xA2\xB2\xB6\xD2\xD6\xDB\xE1\xFE\u0116\u012D" +
		"\u012F\u0134\u013A\u0143";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VTLParser.__ATN) {
			VTLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VTLParser._serializedATN));
		}

		return VTLParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(VTLParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_parse; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_block; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.TEXT, 0); }
	public ESCAPED_CHAR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.ESCAPED_CHAR, 0); }
	public ESCAPED_BLOCK(): TerminalNode | undefined { return this.tryGetToken(VTLParser.ESCAPED_BLOCK, 0); }
	public ESCAPED_DOLLAR_OTHER(): TerminalNode | undefined { return this.tryGetToken(VTLParser.ESCAPED_DOLLAR_OTHER, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public formal(): FormalContext | undefined {
		return this.tryGetRuleContext(0, FormalContext);
	}
	public property_or_method(): Property_or_methodContext | undefined {
		return this.tryGetRuleContext(0, Property_or_methodContext);
	}
	public ESCAPED_DIRECTIVE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.ESCAPED_DIRECTIVE, 0); }
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_atom; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class FormalContext extends ParserRuleContext {
	public DOLLAR_OBRACE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.DOLLAR_OBRACE, 0); }
	public formal_property_or_method(): Formal_property_or_methodContext | undefined {
		return this.tryGetRuleContext(0, Formal_property_or_methodContext);
	}
	public CBRACE(): TerminalNode { return this.getToken(VTLParser.CBRACE, 0); }
	public DOLLAR_EXCL_OBRACE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.DOLLAR_EXCL_OBRACE, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_formal; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterFormal) {
			listener.enterFormal(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitFormal) {
			listener.exitFormal(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.DOLLAR, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.DOT, 0); }
	public DOLLAR_EXCL(): TerminalNode | undefined { return this.tryGetToken(VTLParser.DOLLAR_EXCL, 0); }
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.REFERENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_variable; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class Property_or_methodContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public property_end(): Property_endContext[];
	public property_end(i: number): Property_endContext;
	public property_end(i?: number): Property_endContext | Property_endContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Property_endContext);
		} else {
			return this.getRuleContext(i, Property_endContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_property_or_method; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterProperty_or_method) {
			listener.enterProperty_or_method(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitProperty_or_method) {
			listener.exitProperty_or_method(this);
		}
	}
}


export class Formal_property_or_methodContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public property_end(): Property_endContext[];
	public property_end(i: number): Property_endContext;
	public property_end(i?: number): Property_endContext | Property_endContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Property_endContext);
		} else {
			return this.getRuleContext(i, Property_endContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_formal_property_or_method; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterFormal_property_or_method) {
			listener.enterFormal_property_or_method(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitFormal_property_or_method) {
			listener.exitFormal_property_or_method(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public set_directive(): Set_directiveContext | undefined {
		return this.tryGetRuleContext(0, Set_directiveContext);
	}
	public if_directive(): If_directiveContext | undefined {
		return this.tryGetRuleContext(0, If_directiveContext);
	}
	public foreach_directive(): Foreach_directiveContext | undefined {
		return this.tryGetRuleContext(0, Foreach_directiveContext);
	}
	public break_directive(): Break_directiveContext | undefined {
		return this.tryGetRuleContext(0, Break_directiveContext);
	}
	public stop_directive(): Stop_directiveContext | undefined {
		return this.tryGetRuleContext(0, Stop_directiveContext);
	}
	public macro_directive(): Macro_directiveContext | undefined {
		return this.tryGetRuleContext(0, Macro_directiveContext);
	}
	public parse_directive(): Parse_directiveContext | undefined {
		return this.tryGetRuleContext(0, Parse_directiveContext);
	}
	public define_directive(): Define_directiveContext | undefined {
		return this.tryGetRuleContext(0, Define_directiveContext);
	}
	public include_directive(): Include_directiveContext | undefined {
		return this.tryGetRuleContext(0, Include_directiveContext);
	}
	public evaluate_directive(): Evaluate_directiveContext | undefined {
		return this.tryGetRuleContext(0, Evaluate_directiveContext);
	}
	public macro_call_directive(): Macro_call_directiveContext | undefined {
		return this.tryGetRuleContext(0, Macro_call_directiveContext);
	}
	public custom_directive(): Custom_directiveContext | undefined {
		return this.tryGetRuleContext(0, Custom_directiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
}


export class Property_endContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.DOT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(VTLParser.ID, 0); }
	public OBRACK(): TerminalNode | undefined { return this.tryGetToken(VTLParser.OBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CBRACK(): TerminalNode | undefined { return this.tryGetToken(VTLParser.CBRACK, 0); }
	public OPAR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.OPAR, 0); }
	public CPAR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.CPAR, 0); }
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_property_end; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterProperty_end) {
			listener.enterProperty_end(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitProperty_end) {
			listener.exitProperty_end(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VTLParser.COMMA);
		} else {
			return this.getToken(VTLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_expressions; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterExpressions) {
			listener.enterExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitExpressions) {
			listener.exitExpressions(this);
		}
	}
}


export class Set_directiveContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(VTLParser.SET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASSIGN(): TerminalNode { return this.getToken(VTLParser.ASSIGN, 0); }
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_set_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterSet_directive) {
			listener.enterSet_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitSet_directive) {
			listener.exitSet_directive(this);
		}
	}
}


export class If_directiveContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(VTLParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public elseif_directive(): Elseif_directiveContext[];
	public elseif_directive(i: number): Elseif_directiveContext;
	public elseif_directive(i?: number): Elseif_directiveContext | Elseif_directiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Elseif_directiveContext);
		} else {
			return this.getRuleContext(i, Elseif_directiveContext);
		}
	}
	public else_directive(): Else_directiveContext | undefined {
		return this.tryGetRuleContext(0, Else_directiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_if_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterIf_directive) {
			listener.enterIf_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitIf_directive) {
			listener.exitIf_directive(this);
		}
	}
}


export class Elseif_directiveContext extends ParserRuleContext {
	public ELSEIF(): TerminalNode { return this.getToken(VTLParser.ELSEIF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_elseif_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterElseif_directive) {
			listener.enterElseif_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitElseif_directive) {
			listener.exitElseif_directive(this);
		}
	}
}


export class Else_directiveContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(VTLParser.ELSE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_else_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterElse_directive) {
			listener.enterElse_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitElse_directive) {
			listener.exitElse_directive(this);
		}
	}
}


export class Foreach_directiveContext extends ParserRuleContext {
	public FOREACH(): TerminalNode { return this.getToken(VTLParser.FOREACH, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public K_IN(): TerminalNode { return this.getToken(VTLParser.K_IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_foreach_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterForeach_directive) {
			listener.enterForeach_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitForeach_directive) {
			listener.exitForeach_directive(this);
		}
	}
}


export class Break_directiveContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(VTLParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_break_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterBreak_directive) {
			listener.enterBreak_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitBreak_directive) {
			listener.exitBreak_directive(this);
		}
	}
}


export class Stop_directiveContext extends ParserRuleContext {
	public STOP(): TerminalNode { return this.getToken(VTLParser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_stop_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterStop_directive) {
			listener.enterStop_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitStop_directive) {
			listener.exitStop_directive(this);
		}
	}
}


export class Custom_directiveContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(VTLParser.ID, 0); }
	public CPAR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.CPAR, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public end(): EndContext | undefined {
		return this.tryGetRuleContext(0, EndContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_custom_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterCustom_directive) {
			listener.enterCustom_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitCustom_directive) {
			listener.exitCustom_directive(this);
		}
	}
}


export class Macro_directiveContext extends ParserRuleContext {
	public MACRO(): TerminalNode { return this.getToken(VTLParser.MACRO, 0); }
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_macro_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterMacro_directive) {
			listener.enterMacro_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitMacro_directive) {
			listener.exitMacro_directive(this);
		}
	}
}


export class Parse_directiveContext extends ParserRuleContext {
	public PARSE(): TerminalNode { return this.getToken(VTLParser.PARSE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_parse_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterParse_directive) {
			listener.enterParse_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitParse_directive) {
			listener.exitParse_directive(this);
		}
	}
}


export class Define_directiveContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(VTLParser.DEFINE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_define_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterDefine_directive) {
			listener.enterDefine_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitDefine_directive) {
			listener.exitDefine_directive(this);
		}
	}
}


export class Include_directiveContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(VTLParser.INCLUDE, 0); }
	public expressions(): ExpressionsContext {
		return this.getRuleContext(0, ExpressionsContext);
	}
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_include_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterInclude_directive) {
			listener.enterInclude_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitInclude_directive) {
			listener.exitInclude_directive(this);
		}
	}
}


export class Evaluate_directiveContext extends ParserRuleContext {
	public EVALUATE(): TerminalNode { return this.getToken(VTLParser.EVALUATE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_evaluate_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterEvaluate_directive) {
			listener.enterEvaluate_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitEvaluate_directive) {
			listener.exitEvaluate_directive(this);
		}
	}
}


export class Macro_call_directiveContext extends ParserRuleContext {
	public MACRO_ID(): TerminalNode { return this.getToken(VTLParser.MACRO_ID, 0); }
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_macro_call_directive; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterMacro_call_directive) {
			listener.enterMacro_call_directive(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitMacro_call_directive) {
			listener.exitMacro_call_directive(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(VTLParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_end; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EXCL(): TerminalNode | undefined { return this.tryGetToken(VTLParser.EXCL, 0); }
	public K_NOT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_NOT, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(VTLParser.SUB, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(VTLParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(VTLParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(VTLParser.MOD, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(VTLParser.ADD, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(VTLParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.NE, 0); }
	public K_EQ(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_EQ, 0); }
	public K_NE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_NE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.LE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.GE, 0); }
	public K_LT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_LT, 0); }
	public K_LE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_LE, 0); }
	public K_GT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_GT, 0); }
	public K_GE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_GE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(VTLParser.AND, 0); }
	public K_AND(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.OR, 0); }
	public K_OR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_OR, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.RANGE, 0); }
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
	}
	public formal(): FormalContext | undefined {
		return this.tryGetRuleContext(0, FormalContext);
	}
	public property_or_method(): Property_or_methodContext | undefined {
		return this.tryGetRuleContext(0, Property_or_methodContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VTLParser.STRING, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(VTLParser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.FLOAT, 0); }
	public K_NULL(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_expression; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public OBRACK(): TerminalNode { return this.getToken(VTLParser.OBRACK, 0); }
	public CBRACK(): TerminalNode { return this.getToken(VTLParser.CBRACK, 0); }
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_list; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public OBRACE(): TerminalNode { return this.getToken(VTLParser.OBRACE, 0); }
	public CBRACE(): TerminalNode { return this.getToken(VTLParser.CBRACE, 0); }
	public map_entries(): Map_entriesContext | undefined {
		return this.tryGetRuleContext(0, Map_entriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_map; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
}


export class Map_entriesContext extends ParserRuleContext {
	public map_entry(): Map_entryContext[];
	public map_entry(i: number): Map_entryContext;
	public map_entry(i?: number): Map_entryContext | Map_entryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Map_entryContext);
		} else {
			return this.getRuleContext(i, Map_entryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VTLParser.COMMA);
		} else {
			return this.getToken(VTLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_map_entries; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterMap_entries) {
			listener.enterMap_entries(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitMap_entries) {
			listener.exitMap_entries(this);
		}
	}
}


export class Map_entryContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(VTLParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_map_entry; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterMap_entry) {
			listener.enterMap_entry(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitMap_entry) {
			listener.exitMap_entry(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(VTLParser.ID, 0); }
	public K_LT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_LT, 0); }
	public K_LE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_LE, 0); }
	public K_GT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_GT, 0); }
	public K_GE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_GE, 0); }
	public K_EQ(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_EQ, 0); }
	public K_NE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_NE, 0); }
	public K_TRUE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_TRUE, 0); }
	public K_FALSE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_FALSE, 0); }
	public K_AND(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_AND, 0); }
	public K_OR(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_OR, 0); }
	public K_NOT(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_NOT, 0); }
	public K_NULL(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_NULL, 0); }
	public K_IN(): TerminalNode | undefined { return this.tryGetToken(VTLParser.K_IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_id; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


