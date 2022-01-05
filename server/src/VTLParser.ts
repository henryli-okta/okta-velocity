// Generated from VTLParser.g4 by ANTLR 4.9.0-SNAPSHOT
/* eslint-disable  no-useless-escape*/

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
	public static readonly PIPE = 58;
	public static readonly NUMBER = 59;
	public static readonly BOOL = 60;
	public static readonly ESCAPESIGN = 61;
	public static readonly DQUOTE = 62;
	public static readonly SQUOTE = 63;
	public static readonly ESCAPED_CHAR = 64;
	public static readonly START_DIRECTIVE = 65;
	public static readonly DOLLAR = 66;
	public static readonly TEXT = 67;
	public static readonly ESCAPED_BLOCK = 68;
	public static readonly SNGLE_LINE_COMMENT = 69;
	public static readonly BLOCK_COMMENT = 70;
	public static readonly PRE_REF_EMPTY = 71;
	public static readonly REF2_EMPTY = 72;
	public static readonly REF3_EMPTY = 73;
	public static readonly LITERAL_EMPTY = 74;
	public static readonly CODE_SPACES = 75;
	public static readonly CODE_DQUOTE = 76;
	public static readonly CODE_STRING = 77;
	public static readonly STR_TEXT = 78;
	public static readonly STR_ESCAPED_CHAR = 79;
	public static readonly PRE_REF_EXCL = 80;
	public static readonly POST_REF_CBRACE = 81;
	public static readonly CODE_K_LT = 82;
	public static readonly CODE_K_LE = 83;
	public static readonly CODE_K_GT = 84;
	public static readonly CODE_K_GE = 85;
	public static readonly CODE_K_EQ = 86;
	public static readonly CODE_K_NE = 87;
	public static readonly CODE_K_TRUE = 88;
	public static readonly CODE_K_FALSE = 89;
	public static readonly CODE_K_AND = 90;
	public static readonly CODE_K_OR = 91;
	public static readonly CODE_K_NOT = 92;
	public static readonly CODE_K_NULL = 93;
	public static readonly CODE_K_IN = 94;
	public static readonly CODE_ADD = 95;
	public static readonly CODE_SUB = 96;
	public static readonly CODE_MUL = 97;
	public static readonly CODE_DIV = 98;
	public static readonly CODE_MOD = 99;
	public static readonly CODE_OR = 100;
	public static readonly CODE_AND = 101;
	public static readonly CODE_ASSIGN = 102;
	public static readonly CODE_EQ = 103;
	public static readonly CODE_NEQ = 104;
	public static readonly CODE_LT = 105;
	public static readonly CODE_LE = 106;
	public static readonly CODE_GT = 107;
	public static readonly CODE_GE = 108;
	public static readonly CODE_CPAR = 109;
	public static readonly CODE_COLON = 110;
	public static readonly CODE_RANGE = 111;
	public static readonly CODE_DOT = 112;
	public static readonly CODE_CBRACK = 113;
	public static readonly CODE_COMMA = 114;
	public static readonly RULE_parse = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_atom = 2;
	public static readonly RULE_reference = 3;
	public static readonly RULE_call = 4;
	public static readonly RULE_indexcall = 5;
	public static readonly RULE_propertycall = 6;
	public static readonly RULE_functioncall = 7;
	public static readonly RULE_arglist = 8;
	public static readonly RULE_literal = 9;
	public static readonly RULE_directive = 10;
	public static readonly RULE_expressions = 11;
	public static readonly RULE_set_directive = 12;
	public static readonly RULE_if_directive = 13;
	public static readonly RULE_elseif_directive = 14;
	public static readonly RULE_else_directive = 15;
	public static readonly RULE_foreach_directive = 16;
	public static readonly RULE_break_directive = 17;
	public static readonly RULE_stop_directive = 18;
	public static readonly RULE_custom_directive = 19;
	public static readonly RULE_macro_directive = 20;
	public static readonly RULE_parse_directive = 21;
	public static readonly RULE_define_directive = 22;
	public static readonly RULE_include_directive = 23;
	public static readonly RULE_evaluate_directive = 24;
	public static readonly RULE_macro_call_directive = 25;
	public static readonly RULE_end = 26;
	public static readonly RULE_expression = 27;
	public static readonly RULE_stringTemplate = 28;
	public static readonly RULE_list = 29;
	public static readonly RULE_map = 30;
	public static readonly RULE_map_entries = 31;
	public static readonly RULE_map_entry = 32;
	public static readonly RULE_id = 33;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "block", "atom", "reference", "call", "indexcall", "propertycall", 
		"functioncall", "arglist", "literal", "directive", "expressions", "set_directive", 
		"if_directive", "elseif_directive", "else_directive", "foreach_directive", 
		"break_directive", "stop_directive", "custom_directive", "macro_directive", 
		"parse_directive", "define_directive", "include_directive", "evaluate_directive", 
		"macro_call_directive", "end", "expression", "stringTemplate", "list", 
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'#'", "'$'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'lt'", "'le'", "'gt'", "'ge'", 
		"'eq'", "'ne'", "'true'", "'false'", "'and'", "'or'", "'not'", "'null'", 
		"'in'", "'+'", "'-'", "'*'", "'/'", "'%'", "'||'", "'&&'", "'='", "'=='", 
		"'!='", "'<'", "'<='", "'>'", "'>='", "')'", "':'", "'..'", "'.'", "']'", 
		"','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPAR", "CPAR", "OBRACK", "CBRACK", "OBRACE", "CBRACE", "STRING", 
		"INTEGER", "ID", "REFERENCE", "DOT", "COMMA", "ASSIGN", "EQ", "NE", "AND", 
		"OR", "K_NULL", "ADD", "SUB", "MUL", "DIV", "MOD", "COLON", "FLOAT", "RANGE", 
		"LT", "LE", "GT", "GE", "EXCL", "K_LT", "K_LE", "K_GT", "K_GE", "K_EQ", 
		"K_NE", "K_TRUE", "K_FALSE", "K_AND", "K_OR", "K_NOT", "K_IN", "IF", "ELSEIF", 
		"ELSE", "FOREACH", "SET", "END", "BREAK", "MACRO_ID", "MACRO", "STOP", 
		"INCLUDE", "EVALUATE", "PARSE", "DEFINE", "PIPE", "NUMBER", "BOOL", "ESCAPESIGN", 
		"DQUOTE", "SQUOTE", "ESCAPED_CHAR", "START_DIRECTIVE", "DOLLAR", "TEXT", 
		"ESCAPED_BLOCK", "SNGLE_LINE_COMMENT", "BLOCK_COMMENT", "PRE_REF_EMPTY", 
		"REF2_EMPTY", "REF3_EMPTY", "LITERAL_EMPTY", "CODE_SPACES", "CODE_DQUOTE", 
		"CODE_STRING", "STR_TEXT", "STR_ESCAPED_CHAR", "PRE_REF_EXCL", "POST_REF_CBRACE", 
		"CODE_K_LT", "CODE_K_LE", "CODE_K_GT", "CODE_K_GE", "CODE_K_EQ", "CODE_K_NE", 
		"CODE_K_TRUE", "CODE_K_FALSE", "CODE_K_AND", "CODE_K_OR", "CODE_K_NOT", 
		"CODE_K_NULL", "CODE_K_IN", "CODE_ADD", "CODE_SUB", "CODE_MUL", "CODE_DIV", 
		"CODE_MOD", "CODE_OR", "CODE_AND", "CODE_ASSIGN", "CODE_EQ", "CODE_NEQ", 
		"CODE_LT", "CODE_LE", "CODE_GT", "CODE_GE", "CODE_CPAR", "CODE_COLON", 
		"CODE_RANGE", "CODE_DOT", "CODE_CBRACK", "CODE_COMMA",
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
			this.state = 68;
			this.block();
			this.state = 69;
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
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.ID || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (VTLParser.IF - 44)) | (1 << (VTLParser.FOREACH - 44)) | (1 << (VTLParser.SET - 44)) | (1 << (VTLParser.BREAK - 44)) | (1 << (VTLParser.MACRO_ID - 44)) | (1 << (VTLParser.MACRO - 44)) | (1 << (VTLParser.STOP - 44)) | (1 << (VTLParser.INCLUDE - 44)) | (1 << (VTLParser.EVALUATE - 44)) | (1 << (VTLParser.PARSE - 44)) | (1 << (VTLParser.DEFINE - 44)) | (1 << (VTLParser.ESCAPED_CHAR - 44)) | (1 << (VTLParser.DOLLAR - 44)) | (1 << (VTLParser.TEXT - 44)) | (1 << (VTLParser.ESCAPED_BLOCK - 44)))) !== 0)) {
				{
				{
				this.state = 71;
				this.atom();
				}
				}
				this.state = 76;
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
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VTLParser.TEXT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.match(VTLParser.TEXT);
				}
				break;
			case VTLParser.ESCAPED_CHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.match(VTLParser.ESCAPED_CHAR);
				}
				break;
			case VTLParser.ESCAPED_BLOCK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 79;
				this.match(VTLParser.ESCAPED_BLOCK);
				}
				break;
			case VTLParser.DOLLAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 80;
				this.reference();
				}
				break;
			case VTLParser.ID:
			case VTLParser.IF:
			case VTLParser.FOREACH:
			case VTLParser.SET:
			case VTLParser.BREAK:
			case VTLParser.MACRO_ID:
			case VTLParser.MACRO:
			case VTLParser.STOP:
			case VTLParser.INCLUDE:
			case VTLParser.EVALUATE:
			case VTLParser.PARSE:
			case VTLParser.DEFINE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 81;
				this.directive();
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
	public reference(): ReferenceContext {
		const _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VTLParser.RULE_reference);
		let _la: number;
		try {
			let _alt: number;
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.match(VTLParser.DOLLAR);
				this.state = 85;
				this.match(VTLParser.ESCAPESIGN);
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VTLParser.EXCL) {
					{
					this.state = 86;
					this.match(VTLParser.EXCL);
					}
				}

				this.state = 89;
				this.match(VTLParser.ID);
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 90;
						this.call();
						}
						}
					}
					this.state = 95;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.match(VTLParser.DOLLAR);
				this.state = 97;
				this.match(VTLParser.ESCAPESIGN);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VTLParser.EXCL) {
					{
					this.state = 98;
					this.match(VTLParser.EXCL);
					}
				}

				this.state = 101;
				this.match(VTLParser.OBRACE);
				this.state = 102;
				this.match(VTLParser.ID);
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VTLParser.OBRACK || _la === VTLParser.DOT) {
					{
					{
					this.state = 103;
					this.call();
					}
					}
					this.state = 108;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VTLParser.PIPE) {
					{
					this.state = 109;
					this.match(VTLParser.PIPE);
					this.state = 110;
					this.literal();
					}
				}

				this.state = 113;
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
	public call(): CallContext {
		const _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VTLParser.RULE_call);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.indexcall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.propertycall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 118;
				this.functioncall();
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
	public indexcall(): IndexcallContext {
		const _localctx: IndexcallContext = new IndexcallContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VTLParser.RULE_indexcall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(VTLParser.OBRACK);
			this.state = 122;
			this.expression(0);
			this.state = 123;
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
	public propertycall(): PropertycallContext {
		const _localctx: PropertycallContext = new PropertycallContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VTLParser.RULE_propertycall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(VTLParser.DOT);
			this.state = 126;
			this.match(VTLParser.ID);
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
	public functioncall(): FunctioncallContext {
		const _localctx: FunctioncallContext = new FunctioncallContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VTLParser.RULE_functioncall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(VTLParser.DOT);
			this.state = 129;
			this.match(VTLParser.ID);
			this.state = 130;
			this.match(VTLParser.OPAR);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.NUMBER - 35)) | (1 << (VTLParser.BOOL - 35)) | (1 << (VTLParser.DQUOTE - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				this.state = 131;
				this.arglist();
				}
			}

			this.state = 134;
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
	public arglist(): ArglistContext {
		const _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VTLParser.RULE_arglist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.expression(0);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.COMMA) {
				{
				{
				this.state = 137;
				this.match(VTLParser.COMMA);
				this.state = 138;
				this.expression(0);
				}
				}
				this.state = 143;
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
	public literal(): LiteralContext {
		const _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VTLParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_la = this._input.LA(1);
			if (!(_la === VTLParser.STRING || _la === VTLParser.NUMBER || _la === VTLParser.BOOL)) {
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
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		const _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VTLParser.RULE_directive);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VTLParser.SET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.set_directive();
				}
				break;
			case VTLParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 147;
				this.if_directive();
				}
				break;
			case VTLParser.FOREACH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 148;
				this.foreach_directive();
				}
				break;
			case VTLParser.BREAK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 149;
				this.break_directive();
				}
				break;
			case VTLParser.STOP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 150;
				this.stop_directive();
				}
				break;
			case VTLParser.MACRO:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 151;
				this.macro_directive();
				}
				break;
			case VTLParser.PARSE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 152;
				this.parse_directive();
				}
				break;
			case VTLParser.DEFINE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 153;
				this.define_directive();
				}
				break;
			case VTLParser.INCLUDE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 154;
				this.include_directive();
				}
				break;
			case VTLParser.EVALUATE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 155;
				this.evaluate_directive();
				}
				break;
			case VTLParser.MACRO_ID:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 156;
				this.macro_call_directive();
				}
				break;
			case VTLParser.ID:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 157;
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
	public expressions(): ExpressionsContext {
		const _localctx: ExpressionsContext = new ExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VTLParser.RULE_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.expression(0);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.COMMA) {
				{
				{
				this.state = 161;
				this.match(VTLParser.COMMA);
				this.state = 162;
				this.expression(0);
				}
				}
				this.state = 167;
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
		this.enterRule(_localctx, 24, VTLParser.RULE_set_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(VTLParser.SET);
			this.state = 169;
			this.expression(0);
			this.state = 170;
			this.match(VTLParser.ASSIGN);
			this.state = 171;
			this.expression(0);
			this.state = 172;
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
		this.enterRule(_localctx, 26, VTLParser.RULE_if_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(VTLParser.IF);
			this.state = 175;
			this.expression(0);
			this.state = 176;
			this.match(VTLParser.CPAR);
			this.state = 177;
			this.block();
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.ELSEIF) {
				{
				{
				this.state = 178;
				this.elseif_directive();
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VTLParser.ELSE) {
				{
				this.state = 184;
				this.else_directive();
				}
			}

			this.state = 187;
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
		this.enterRule(_localctx, 28, VTLParser.RULE_elseif_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(VTLParser.ELSEIF);
			this.state = 190;
			this.expression(0);
			this.state = 191;
			this.match(VTLParser.CPAR);
			this.state = 192;
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
		this.enterRule(_localctx, 30, VTLParser.RULE_else_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(VTLParser.ELSE);
			this.state = 195;
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
		this.enterRule(_localctx, 32, VTLParser.RULE_foreach_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(VTLParser.FOREACH);
			this.state = 198;
			this.reference();
			this.state = 199;
			this.match(VTLParser.K_IN);
			this.state = 200;
			this.expression(0);
			this.state = 201;
			this.match(VTLParser.CPAR);
			this.state = 202;
			this.block();
			this.state = 203;
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
		this.enterRule(_localctx, 34, VTLParser.RULE_break_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
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
		this.enterRule(_localctx, 36, VTLParser.RULE_stop_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
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
		this.enterRule(_localctx, 38, VTLParser.RULE_custom_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(VTLParser.ID);
			this.state = 217;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.NUMBER - 35)) | (1 << (VTLParser.BOOL - 35)) | (1 << (VTLParser.DQUOTE - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
					{
					{
					this.state = 210;
					this.expression(0);
					}
					}
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 216;
				this.match(VTLParser.CPAR);
				}
				break;
			}
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 219;
				this.block();
				this.state = 220;
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
		this.enterRule(_localctx, 40, VTLParser.RULE_macro_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(VTLParser.MACRO);
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.NUMBER - 35)) | (1 << (VTLParser.BOOL - 35)) | (1 << (VTLParser.DQUOTE - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				{
				this.state = 225;
				this.expression(0);
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 231;
			this.match(VTLParser.CPAR);
			this.state = 232;
			this.block();
			this.state = 233;
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
		this.enterRule(_localctx, 42, VTLParser.RULE_parse_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(VTLParser.PARSE);
			this.state = 236;
			this.expression(0);
			this.state = 237;
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
		this.enterRule(_localctx, 44, VTLParser.RULE_define_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(VTLParser.DEFINE);
			this.state = 240;
			this.expression(0);
			this.state = 241;
			this.match(VTLParser.CPAR);
			this.state = 242;
			this.block();
			this.state = 243;
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
		this.enterRule(_localctx, 46, VTLParser.RULE_include_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(VTLParser.INCLUDE);
			this.state = 246;
			this.expressions();
			this.state = 247;
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
		this.enterRule(_localctx, 48, VTLParser.RULE_evaluate_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(VTLParser.EVALUATE);
			this.state = 250;
			this.expression(0);
			this.state = 251;
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
		this.enterRule(_localctx, 50, VTLParser.RULE_macro_call_directive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(VTLParser.MACRO_ID);
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.NUMBER - 35)) | (1 << (VTLParser.BOOL - 35)) | (1 << (VTLParser.DQUOTE - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				{
				this.state = 254;
				this.expression(0);
				}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 260;
			this.match(VTLParser.CPAR);
			this.state = 261;
			this.block();
			this.state = 262;
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
		this.enterRule(_localctx, 52, VTLParser.RULE_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
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
		const _startState = 54;
		this.enterRecursionRule(_localctx, 54, VTLParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 267;
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
				this.state = 268;
				this.expression(16);
				}
				break;

			case 2:
				{
				this.state = 269;
				this.match(VTLParser.SUB);
				this.state = 270;
				this.expression(15);
				}
				break;

			case 3:
				{
				this.state = 271;
				this.list();
				}
				break;

			case 4:
				{
				this.state = 272;
				this.map();
				}
				break;

			case 5:
				{
				this.state = 273;
				this.reference();
				}
				break;

			case 6:
				{
				this.state = 274;
				this.id();
				}
				break;

			case 7:
				{
				this.state = 275;
				this.stringTemplate();
				}
				break;

			case 8:
				{
				this.state = 276;
				this.literal();
				}
				break;

			case 9:
				{
				this.state = 277;
				this.match(VTLParser.K_NULL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 301;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 280;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 281;
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
						this.state = 282;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 284;
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
						this.state = 285;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 287;
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
						this.state = 288;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 290;
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
						this.state = 291;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 292;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 293;
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
						this.state = 294;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 295;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 296;
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
						this.state = 297;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 299;
						this.match(VTLParser.RANGE);
						this.state = 300;
						this.expression(9);
						}
						break;
					}
					}
				}
				this.state = 305;
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
	public stringTemplate(): StringTemplateContext {
		const _localctx: StringTemplateContext = new StringTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, VTLParser.RULE_stringTemplate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(VTLParser.DQUOTE);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.REFERENCE || _la === VTLParser.STR_TEXT || _la === VTLParser.STR_ESCAPED_CHAR) {
				{
				{
				this.state = 307;
				_la = this._input.LA(1);
				if (!(_la === VTLParser.REFERENCE || _la === VTLParser.STR_TEXT || _la === VTLParser.STR_ESCAPED_CHAR)) {
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
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 313;
			this.match(VTLParser.DQUOTE);
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
	public list(): ListContext {
		const _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, VTLParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(VTLParser.OBRACK);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.NUMBER - 35)) | (1 << (VTLParser.BOOL - 35)) | (1 << (VTLParser.DQUOTE - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				this.state = 316;
				this.expressions();
				}
			}

			this.state = 319;
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
		this.enterRule(_localctx, 60, VTLParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(VTLParser.OBRACE);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (VTLParser.OBRACK - 3)) | (1 << (VTLParser.OBRACE - 3)) | (1 << (VTLParser.STRING - 3)) | (1 << (VTLParser.ID - 3)) | (1 << (VTLParser.K_NULL - 3)) | (1 << (VTLParser.SUB - 3)) | (1 << (VTLParser.EXCL - 3)) | (1 << (VTLParser.K_LT - 3)) | (1 << (VTLParser.K_LE - 3)) | (1 << (VTLParser.K_GT - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VTLParser.K_GE - 35)) | (1 << (VTLParser.K_EQ - 35)) | (1 << (VTLParser.K_NE - 35)) | (1 << (VTLParser.K_TRUE - 35)) | (1 << (VTLParser.K_FALSE - 35)) | (1 << (VTLParser.K_AND - 35)) | (1 << (VTLParser.K_OR - 35)) | (1 << (VTLParser.K_NOT - 35)) | (1 << (VTLParser.K_IN - 35)) | (1 << (VTLParser.NUMBER - 35)) | (1 << (VTLParser.BOOL - 35)) | (1 << (VTLParser.DQUOTE - 35)) | (1 << (VTLParser.DOLLAR - 35)))) !== 0)) {
				{
				this.state = 322;
				this.map_entries();
				}
			}

			this.state = 325;
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
		this.enterRule(_localctx, 62, VTLParser.RULE_map_entries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.map_entry();
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VTLParser.COMMA) {
				{
				{
				this.state = 328;
				this.match(VTLParser.COMMA);
				this.state = 329;
				this.map_entry();
				}
				}
				this.state = 334;
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
		this.enterRule(_localctx, 64, VTLParser.RULE_map_entry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.expression(0);
			this.state = 336;
			this.match(VTLParser.COLON);
			this.state = 337;
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
		this.enterRule(_localctx, 66, VTLParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
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
		case 27:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 10);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03t\u0158\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03K\n\x03\f\x03\x0E\x03N\v\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04U\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x05\x05Z\n\x05\x03\x05\x03\x05\x07\x05^\n\x05\f\x05\x0E\x05a" +
		"\v\x05\x03\x05\x03\x05\x03\x05\x05\x05f\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x07\x05k\n\x05\f\x05\x0E\x05n\v\x05\x03\x05\x03\x05\x05\x05r\n\x05\x03" +
		"\x05\x05\x05u\n\x05\x03\x06\x03\x06\x03\x06\x05\x06z\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t\x87" +
		"\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n\x8E\n\n\f\n\x0E\n\x91\v\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\xA1\n\f\x03\r\x03\r\x03\r\x07\r\xA6\n\r\f\r\x0E\r\xA9\v" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\xB6\n\x0F\f\x0F\x0E\x0F\xB9\v\x0F\x03\x0F" +
		"\x05\x0F\xBC\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07" +
		"\x15\xD6\n\x15\f\x15\x0E\x15\xD9\v\x15\x03\x15\x05\x15\xDC\n\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\xE1\n\x15\x03\x16\x03\x16\x07\x16\xE5\n\x16\f" +
		"\x16\x0E\x16\xE8\v\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x07\x1B\u0102\n\x1B\f\x1B\x0E\x1B\u0105\v\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0119\n\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u0130\n\x1D\f\x1D\x0E\x1D\u0133\v\x1D\x03" +
		"\x1E\x03\x1E\x07\x1E\u0137\n\x1E\f\x1E\x0E\x1E\u013A\v\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x05\x1F\u0140\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x05" +
		" \u0146\n \x03 \x03 \x03!\x03!\x03!\x07!\u014D\n!\f!\x0E!\u0150\v!\x03" +
		"\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x02\x02\x038$\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02\x02\f\x04\x02\t\t=" +
		">\x04\x02!!,,\x03\x02\x17\x19\x03\x02\x15\x16\x04\x02\x10\x11&\'\x04\x02" +
		"\x1D \"%\x04\x02\x12\x12**\x04\x02\x13\x13++\x04\x02\f\fPQ\x05\x02\v\v" +
		"\x14\x14\"-\x02\u016A\x02F\x03\x02\x02\x02\x04L\x03\x02\x02\x02\x06T\x03" +
		"\x02\x02\x02\bt\x03\x02\x02\x02\ny\x03\x02\x02\x02\f{\x03\x02\x02\x02" +
		"\x0E\x7F\x03\x02\x02\x02\x10\x82\x03\x02\x02\x02\x12\x8A\x03\x02\x02\x02" +
		"\x14\x92\x03\x02\x02\x02\x16\xA0\x03\x02\x02\x02\x18\xA2\x03\x02\x02\x02" +
		"\x1A\xAA\x03\x02\x02\x02\x1C\xB0\x03\x02\x02\x02\x1E\xBF\x03\x02\x02\x02" +
		" \xC4\x03\x02\x02\x02\"\xC7\x03\x02\x02\x02$\xCF\x03\x02\x02\x02&\xD1" +
		"\x03\x02\x02\x02(\xD3\x03\x02\x02\x02*\xE2\x03\x02\x02\x02,\xED\x03\x02" +
		"\x02\x02.\xF1\x03\x02\x02\x020\xF7\x03\x02\x02\x022\xFB\x03\x02\x02\x02" +
		"4\xFF\x03\x02\x02\x026\u010A\x03\x02\x02\x028\u0118\x03\x02\x02\x02:\u0134" +
		"\x03\x02\x02\x02<\u013D\x03\x02\x02\x02>\u0143\x03\x02\x02\x02@\u0149" +
		"\x03\x02\x02\x02B\u0151\x03\x02\x02\x02D\u0155\x03\x02\x02\x02FG\x05\x04" +
		"\x03\x02GH\x07\x02\x02\x03H\x03\x03\x02\x02\x02IK\x05\x06\x04\x02JI\x03" +
		"\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02M\x05" +
		"\x03\x02\x02\x02NL\x03\x02\x02\x02OU\x07E\x02\x02PU\x07B\x02\x02QU\x07" +
		"F\x02\x02RU\x05\b\x05\x02SU\x05\x16\f\x02TO\x03\x02\x02\x02TP\x03\x02" +
		"\x02\x02TQ\x03\x02\x02\x02TR\x03\x02\x02\x02TS\x03\x02\x02\x02U\x07\x03" +
		"\x02\x02\x02VW\x07D\x02\x02WY\x07?\x02\x02XZ\x07!\x02\x02YX\x03\x02\x02" +
		"\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[_\x07\v\x02\x02\\^\x05\n\x06" +
		"\x02]\\\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02" +
		"\x02\x02`u\x03\x02\x02\x02a_\x03\x02\x02\x02bc\x07D\x02\x02ce\x07?\x02" +
		"\x02df\x07!\x02\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02\x02" +
		"\x02gh\x07\x07\x02\x02hl\x07\v\x02\x02ik\x05\n\x06\x02ji\x03\x02\x02\x02" +
		"kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mq\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02op\x07<\x02\x02pr\x05\x14\v\x02qo\x03\x02\x02\x02qr" +
		"\x03\x02\x02\x02rs\x03\x02\x02\x02su\x07\b\x02\x02tV\x03\x02\x02\x02t" +
		"b\x03\x02\x02\x02u\t\x03\x02\x02\x02vz\x05\f\x07\x02wz\x05\x0E\b\x02x" +
		"z\x05\x10\t\x02yv\x03\x02\x02\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02" +
		"z\v\x03\x02\x02\x02{|\x07\x05\x02\x02|}\x058\x1D\x02}~\x07\x06\x02\x02" +
		"~\r\x03\x02\x02\x02\x7F\x80\x07\r\x02\x02\x80\x81\x07\v\x02\x02\x81\x0F" +
		"\x03\x02\x02\x02\x82\x83\x07\r\x02\x02\x83\x84\x07\v\x02\x02\x84\x86\x07" +
		"\x03\x02\x02\x85\x87\x05\x12\n\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03" +
		"\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x07\x04\x02\x02\x89\x11\x03" +
		"\x02\x02\x02\x8A\x8F\x058\x1D\x02\x8B\x8C\x07\x0E\x02\x02\x8C\x8E\x05" +
		"8\x1D\x02\x8D\x8B\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x13\x03\x02\x02\x02\x91\x8F\x03" +
		"\x02\x02\x02\x92\x93\t\x02\x02\x02\x93\x15\x03\x02\x02\x02\x94\xA1\x05" +
		"\x1A\x0E\x02\x95\xA1\x05\x1C\x0F\x02\x96\xA1\x05\"\x12\x02\x97\xA1\x05" +
		"$\x13\x02\x98\xA1\x05&\x14\x02\x99\xA1\x05*\x16\x02\x9A\xA1\x05,\x17\x02" +
		"\x9B\xA1\x05.\x18\x02\x9C\xA1\x050\x19\x02\x9D\xA1\x052\x1A\x02\x9E\xA1" +
		"\x054\x1B\x02\x9F\xA1\x05(\x15\x02\xA0\x94\x03\x02\x02\x02\xA0\x95\x03" +
		"\x02\x02\x02\xA0\x96\x03\x02\x02\x02\xA0\x97\x03\x02\x02\x02\xA0\x98\x03" +
		"\x02\x02\x02\xA0\x99\x03\x02\x02\x02\xA0\x9A\x03\x02\x02\x02\xA0\x9B\x03" +
		"\x02\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D\x03\x02\x02\x02\xA0\x9E\x03" +
		"\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x17\x03\x02\x02\x02\xA2\xA7\x05" +
		"8\x1D\x02\xA3\xA4\x07\x0E\x02\x02\xA4\xA6\x058\x1D\x02\xA5\xA3\x03\x02" +
		"\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02" +
		"\x02\x02\xA8\x19\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x072" +
		"\x02\x02\xAB\xAC\x058\x1D\x02\xAC\xAD\x07\x0F\x02\x02\xAD\xAE\x058\x1D" +
		"\x02\xAE\xAF\x07\x04\x02\x02\xAF\x1B\x03\x02\x02\x02\xB0\xB1\x07.\x02" +
		"\x02\xB1\xB2\x058\x1D\x02\xB2\xB3\x07\x04\x02\x02\xB3\xB7\x05\x04\x03" +
		"\x02\xB4\xB6\x05\x1E\x10\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB9\x03\x02\x02" +
		"\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBB\x03\x02\x02" +
		"\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x05 \x11\x02\xBB\xBA\x03\x02\x02" +
		"\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x056\x1C" +
		"\x02\xBE\x1D\x03\x02\x02\x02\xBF\xC0\x07/\x02\x02\xC0\xC1\x058\x1D\x02" +
		"\xC1\xC2\x07\x04\x02\x02\xC2\xC3\x05\x04\x03\x02\xC3\x1F\x03\x02\x02\x02" +
		"\xC4\xC5\x070\x02\x02\xC5\xC6\x05\x04\x03\x02\xC6!\x03\x02\x02\x02\xC7" +
		"\xC8\x071\x02\x02\xC8\xC9\x05\b\x05\x02\xC9\xCA\x07-\x02\x02\xCA\xCB\x05" +
		"8\x1D\x02\xCB\xCC\x07\x04\x02\x02\xCC\xCD\x05\x04\x03\x02\xCD\xCE\x05" +
		"6\x1C\x02\xCE#\x03\x02\x02\x02\xCF\xD0\x074\x02\x02\xD0%\x03\x02\x02\x02" +
		"\xD1\xD2\x077\x02\x02\xD2\'\x03\x02\x02\x02\xD3\xDB\x07\v\x02\x02\xD4" +
		"\xD6\x058\x1D\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9" +
		"\xD7\x03\x02\x02\x02\xDA\xDC\x07\x04\x02\x02\xDB\xD7\x03\x02\x02\x02\xDB" +
		"\xDC\x03\x02\x02\x02\xDC\xE0\x03\x02\x02\x02\xDD\xDE\x05\x04\x03\x02\xDE" +
		"\xDF\x056\x1C\x02\xDF\xE1\x03\x02\x02\x02\xE0\xDD\x03\x02\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1)\x03\x02\x02\x02\xE2\xE6\x076\x02\x02\xE3\xE5" +
		"\x058\x1D\x02\xE4\xE3\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4" +
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6" +
		"\x03\x02\x02\x02\xE9\xEA\x07\x04\x02\x02\xEA\xEB\x05\x04\x03\x02\xEB\xEC" +
		"\x056\x1C\x02\xEC+\x03\x02\x02\x02\xED\xEE\x07:\x02\x02\xEE\xEF\x058\x1D" +
		"\x02\xEF\xF0\x07\x04\x02\x02\xF0-\x03\x02\x02\x02\xF1\xF2\x07;\x02\x02" +
		"\xF2\xF3\x058\x1D\x02\xF3\xF4\x07\x04\x02\x02\xF4\xF5\x05\x04\x03\x02" +
		"\xF5\xF6\x056\x1C\x02\xF6/\x03\x02\x02\x02\xF7\xF8\x078\x02\x02\xF8\xF9" +
		"\x05\x18\r\x02\xF9\xFA\x07\x04\x02\x02\xFA1\x03\x02\x02\x02\xFB\xFC\x07" +
		"9\x02\x02\xFC\xFD\x058\x1D\x02\xFD\xFE\x07\x04\x02\x02\xFE3\x03\x02\x02" +
		"\x02\xFF\u0103\x075\x02\x02\u0100\u0102\x058\x1D\x02\u0101\u0100\x03\x02" +
		"\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103" +
		"\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03\x02" +
		"\x02\x02\u0106\u0107\x07\x04\x02\x02\u0107\u0108\x05\x04\x03\x02\u0108" +
		"\u0109\x056\x1C\x02\u01095\x03\x02\x02\x02\u010A\u010B\x073\x02\x02\u010B" +
		"7\x03\x02\x02\x02\u010C\u010D\b\x1D\x01\x02\u010D\u010E\t\x03\x02\x02" +
		"\u010E\u0119\x058\x1D\x12\u010F\u0110\x07\x16\x02\x02\u0110\u0119\x05" +
		"8\x1D\x11\u0111\u0119\x05<\x1F\x02\u0112\u0119\x05> \x02\u0113\u0119\x05" +
		"\b\x05\x02\u0114\u0119\x05D#\x02\u0115\u0119\x05:\x1E\x02\u0116\u0119" +
		"\x05\x14\v\x02\u0117\u0119\x07\x14\x02\x02\u0118\u010C\x03\x02\x02\x02" +
		"\u0118\u010F\x03\x02\x02\x02\u0118\u0111\x03\x02\x02\x02\u0118\u0112\x03" +
		"\x02\x02\x02\u0118\u0113\x03\x02\x02\x02\u0118\u0114\x03\x02\x02\x02\u0118" +
		"\u0115\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0117\x03\x02" +
		"\x02\x02\u0119\u0131\x03\x02\x02\x02\u011A\u011B\f\x10\x02\x02\u011B\u011C" +
		"\t\x04\x02\x02\u011C\u0130\x058\x1D\x11\u011D\u011E\f\x0F\x02\x02\u011E" +
		"\u011F\t\x05\x02\x02\u011F\u0130\x058\x1D\x10\u0120\u0121\f\x0E\x02\x02" +
		"\u0121\u0122\t\x06\x02\x02\u0122\u0130\x058\x1D\x0F\u0123\u0124\f\r\x02" +
		"\x02\u0124\u0125\t\x07\x02\x02\u0125\u0130\x058\x1D\x0E\u0126\u0127\f" +
		"\f\x02\x02\u0127\u0128\t\b\x02\x02\u0128\u0130\x058\x1D\r\u0129\u012A" +
		"\f\v\x02\x02\u012A\u012B\t\t\x02\x02\u012B\u0130\x058\x1D\f\u012C\u012D" +
		"\f\n\x02\x02\u012D\u012E\x07\x1C\x02\x02\u012E\u0130\x058\x1D\v\u012F" +
		"\u011A\x03\x02\x02\x02\u012F\u011D\x03\x02\x02\x02\u012F\u0120\x03\x02" +
		"\x02\x02\u012F\u0123\x03\x02\x02\x02\u012F\u0126\x03\x02\x02\x02\u012F" +
		"\u0129\x03\x02\x02\x02\u012F\u012C\x03\x02\x02\x02\u0130\u0133\x03\x02" +
		"\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"9\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0138\x07@\x02\x02" +
		"\u0135\u0137\t\n\x02\x02\u0136\u0135\x03\x02\x02\x02\u0137\u013A\x03\x02" +
		"\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139" +
		"\u013B\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013C\x07@\x02" +
		"\x02\u013C;\x03\x02\x02\x02\u013D\u013F\x07\x05\x02\x02\u013E\u0140\x05" +
		"\x18\r\x02\u013F\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141\u0142\x07\x06\x02\x02\u0142=\x03\x02\x02" +
		"\x02\u0143\u0145\x07\x07\x02\x02\u0144\u0146\x05@!\x02\u0145\u0144\x03" +
		"\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147" +
		"\u0148\x07\b\x02\x02\u0148?\x03\x02\x02\x02\u0149\u014E\x05B\"\x02\u014A" +
		"\u014B\x07\x0E\x02\x02\u014B\u014D\x05B\"\x02\u014C\u014A\x03\x02\x02" +
		"\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F" +
		"\x03\x02\x02\x02\u014FA\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0152\x058\x1D\x02\u0152\u0153\x07\x1A\x02\x02\u0153\u0154\x058\x1D\x02" +
		"\u0154C\x03\x02\x02\x02\u0155\u0156\t\v\x02\x02\u0156E\x03\x02\x02\x02" +
		"\x1DLTY_elqty\x86\x8F\xA0\xA7\xB7\xBB\xD7\xDB\xE0\xE6\u0103\u0118\u012F" +
		"\u0131\u0138\u013F\u0145\u014E";
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
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
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


export class ReferenceContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(VTLParser.DOLLAR, 0); }
	public ESCAPESIGN(): TerminalNode { return this.getToken(VTLParser.ESCAPESIGN, 0); }
	public ID(): TerminalNode { return this.getToken(VTLParser.ID, 0); }
	public EXCL(): TerminalNode | undefined { return this.tryGetToken(VTLParser.EXCL, 0); }
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	public OBRACE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.OBRACE, 0); }
	public CBRACE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.CBRACE, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(VTLParser.PIPE, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_reference; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public indexcall(): IndexcallContext | undefined {
		return this.tryGetRuleContext(0, IndexcallContext);
	}
	public propertycall(): PropertycallContext | undefined {
		return this.tryGetRuleContext(0, PropertycallContext);
	}
	public functioncall(): FunctioncallContext | undefined {
		return this.tryGetRuleContext(0, FunctioncallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_call; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
}


export class IndexcallContext extends ParserRuleContext {
	public OBRACK(): TerminalNode { return this.getToken(VTLParser.OBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CBRACK(): TerminalNode { return this.getToken(VTLParser.CBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_indexcall; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterIndexcall) {
			listener.enterIndexcall(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitIndexcall) {
			listener.exitIndexcall(this);
		}
	}
}


export class PropertycallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(VTLParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(VTLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_propertycall; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterPropertycall) {
			listener.enterPropertycall(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitPropertycall) {
			listener.exitPropertycall(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(VTLParser.DOT, 0); }
	public ID(): TerminalNode { return this.getToken(VTLParser.ID, 0); }
	public OPAR(): TerminalNode { return this.getToken(VTLParser.OPAR, 0); }
	public CPAR(): TerminalNode { return this.getToken(VTLParser.CPAR, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_functioncall; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterFunctioncall) {
			listener.enterFunctioncall(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitFunctioncall) {
			listener.exitFunctioncall(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return VTLParser.RULE_arglist; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterArglist) {
			listener.enterArglist(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitArglist) {
			listener.exitArglist(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VTLParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(VTLParser.NUMBER, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(VTLParser.BOOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_literal; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
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
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
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
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public stringTemplate(): StringTemplateContext | undefined {
		return this.tryGetRuleContext(0, StringTemplateContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
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


export class StringTemplateContext extends ParserRuleContext {
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VTLParser.DQUOTE);
		} else {
			return this.getToken(VTLParser.DQUOTE, i);
		}
	}
	public STR_TEXT(): TerminalNode[];
	public STR_TEXT(i: number): TerminalNode;
	public STR_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VTLParser.STR_TEXT);
		} else {
			return this.getToken(VTLParser.STR_TEXT, i);
		}
	}
	public STR_ESCAPED_CHAR(): TerminalNode[];
	public STR_ESCAPED_CHAR(i: number): TerminalNode;
	public STR_ESCAPED_CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VTLParser.STR_ESCAPED_CHAR);
		} else {
			return this.getToken(VTLParser.STR_ESCAPED_CHAR, i);
		}
	}
	public REFERENCE(): TerminalNode[];
	public REFERENCE(i: number): TerminalNode;
	public REFERENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VTLParser.REFERENCE);
		} else {
			return this.getToken(VTLParser.REFERENCE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VTLParser.RULE_stringTemplate; }
	// @Override
	public enterRule(listener: VTLParserListener): void {
		if (listener.enterStringTemplate) {
			listener.enterStringTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: VTLParserListener): void {
		if (listener.exitStringTemplate) {
			listener.exitStringTemplate(this);
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


