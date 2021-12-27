"use strict";
// Generated from VTLParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdContext = exports.Map_entryContext = exports.Map_entriesContext = exports.MapContext = exports.ListContext = exports.ExpressionContext = exports.EndContext = exports.Macro_call_directiveContext = exports.Evaluate_directiveContext = exports.Include_directiveContext = exports.Define_directiveContext = exports.Parse_directiveContext = exports.Macro_directiveContext = exports.Custom_directiveContext = exports.Stop_directiveContext = exports.Break_directiveContext = exports.Foreach_directiveContext = exports.Else_directiveContext = exports.Elseif_directiveContext = exports.If_directiveContext = exports.Set_directiveContext = exports.ExpressionsContext = exports.Property_endContext = exports.DirectiveContext = exports.Formal_property_or_methodContext = exports.Property_or_methodContext = exports.VariableContext = exports.FormalContext = exports.AtomContext = exports.BlockContext = exports.ParseContext = exports.VTLParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class VTLParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(VTLParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return VTLParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "VTLParser.g4"; }
    // @Override
    get ruleNames() { return VTLParser.ruleNames; }
    // @Override
    get serializedATN() { return VTLParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    parse() {
        let _localctx = new ParseContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, VTLParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VTLParser.ID || _la === VTLParser.REFERENCE || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (VTLParser.IF - 44)) | (1 << (VTLParser.FOREACH - 44)) | (1 << (VTLParser.SET - 44)) | (1 << (VTLParser.BREAK - 44)) | (1 << (VTLParser.MACRO_ID - 44)) | (1 << (VTLParser.MACRO - 44)) | (1 << (VTLParser.STOP - 44)) | (1 << (VTLParser.INCLUDE - 44)) | (1 << (VTLParser.EVALUATE - 44)) | (1 << (VTLParser.PARSE - 44)) | (1 << (VTLParser.DEFINE - 44)) | (1 << (VTLParser.ESCAPED_CHAR - 44)) | (1 << (VTLParser.DOLLAR_EXCL_OBRACE - 44)) | (1 << (VTLParser.DOLLAR_OBRACE - 44)) | (1 << (VTLParser.DOLLAR_EXCL - 44)) | (1 << (VTLParser.DOLLAR - 44)) | (1 << (VTLParser.TEXT - 44)) | (1 << (VTLParser.ESCAPED_BLOCK - 44)))) !== 0)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atom() {
        let _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, VTLParser.RULE_atom);
        try {
            this.state = 78;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
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
                        this.variable();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 75;
                        this.formal();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 76;
                        this.property_or_method();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 77;
                        this.directive();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formal() {
        let _localctx = new FormalContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, VTLParser.RULE_formal);
        try {
            this.state = 96;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 80;
                        this.match(VTLParser.DOLLAR_OBRACE);
                        this.state = 81;
                        this.formal_property_or_method();
                        this.state = 82;
                        this.match(VTLParser.CBRACE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 84;
                        this.match(VTLParser.DOLLAR_EXCL_OBRACE);
                        this.state = 85;
                        this.formal_property_or_method();
                        this.state = 86;
                        this.match(VTLParser.CBRACE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 88;
                        this.match(VTLParser.DOLLAR_OBRACE);
                        this.state = 89;
                        this.id();
                        this.state = 90;
                        this.match(VTLParser.CBRACE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 92;
                        this.match(VTLParser.DOLLAR_EXCL_OBRACE);
                        this.state = 93;
                        this.id();
                        this.state = 94;
                        this.match(VTLParser.CBRACE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable() {
        let _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, VTLParser.RULE_variable);
        try {
            this.state = 112;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VTLParser.DOLLAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 98;
                        this.match(VTLParser.DOLLAR);
                        this.state = 99;
                        this.id();
                        this.state = 101;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                            case 1:
                                {
                                    this.state = 100;
                                    this.match(VTLParser.DOT);
                                }
                                break;
                        }
                    }
                    break;
                case VTLParser.DOLLAR_EXCL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 103;
                        this.match(VTLParser.DOLLAR_EXCL);
                        this.state = 104;
                        this.id();
                        this.state = 106;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                            case 1:
                                {
                                    this.state = 105;
                                    this.match(VTLParser.DOT);
                                }
                                break;
                        }
                    }
                    break;
                case VTLParser.REFERENCE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 108;
                        this.match(VTLParser.REFERENCE);
                        this.state = 110;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                            case 1:
                                {
                                    this.state = 109;
                                    this.match(VTLParser.DOT);
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    property_or_method() {
        let _localctx = new Property_or_methodContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, VTLParser.RULE_property_or_method);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this.variable();
                this.state = 116;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 115;
                                    this.property_end();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 118;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formal_property_or_method() {
        let _localctx = new Formal_property_or_methodContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, VTLParser.RULE_formal_property_or_method);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this.id();
                this.state = 122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 121;
                            this.property_end();
                        }
                    }
                    this.state = 124;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OPAR) | (1 << VTLParser.OBRACK) | (1 << VTLParser.DOT))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    directive() {
        let _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, VTLParser.RULE_directive);
        try {
            this.state = 138;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VTLParser.SET:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 126;
                        this.set_directive();
                    }
                    break;
                case VTLParser.IF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 127;
                        this.if_directive();
                    }
                    break;
                case VTLParser.FOREACH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 128;
                        this.foreach_directive();
                    }
                    break;
                case VTLParser.BREAK:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 129;
                        this.break_directive();
                    }
                    break;
                case VTLParser.STOP:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 130;
                        this.stop_directive();
                    }
                    break;
                case VTLParser.MACRO:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 131;
                        this.macro_directive();
                    }
                    break;
                case VTLParser.PARSE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 132;
                        this.parse_directive();
                    }
                    break;
                case VTLParser.DEFINE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 133;
                        this.define_directive();
                    }
                    break;
                case VTLParser.INCLUDE:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 134;
                        this.include_directive();
                    }
                    break;
                case VTLParser.EVALUATE:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 135;
                        this.evaluate_directive();
                    }
                    break;
                case VTLParser.MACRO_ID:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 136;
                        this.macro_call_directive();
                    }
                    break;
                case VTLParser.ID:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 137;
                        this.custom_directive();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    property_end() {
        let _localctx = new Property_endContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, VTLParser.RULE_property_end);
        let _la;
        try {
            this.state = 151;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case VTLParser.DOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 140;
                        this.match(VTLParser.DOT);
                        this.state = 141;
                        this.match(VTLParser.ID);
                    }
                    break;
                case VTLParser.OBRACK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 142;
                        this.match(VTLParser.OBRACK);
                        this.state = 143;
                        this.expression(0);
                        this.state = 144;
                        this.match(VTLParser.CBRACK);
                    }
                    break;
                case VTLParser.OPAR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 146;
                        this.match(VTLParser.OPAR);
                        this.state = 148;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
                            {
                                this.state = 147;
                                this.expressions();
                            }
                        }
                        this.state = 150;
                        this.match(VTLParser.CPAR);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressions() {
        let _localctx = new ExpressionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, VTLParser.RULE_expressions);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.expression(0);
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VTLParser.COMMA) {
                    {
                        {
                            this.state = 154;
                            this.match(VTLParser.COMMA);
                            this.state = 155;
                            this.expression(0);
                        }
                    }
                    this.state = 160;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    set_directive() {
        let _localctx = new Set_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, VTLParser.RULE_set_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.match(VTLParser.SET);
                this.state = 162;
                this.expression(0);
                this.state = 163;
                this.match(VTLParser.ASSIGN);
                this.state = 164;
                this.expression(0);
                this.state = 165;
                this.match(VTLParser.CPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    if_directive() {
        let _localctx = new If_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, VTLParser.RULE_if_directive);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(VTLParser.IF);
                this.state = 168;
                this.expression(0);
                this.state = 169;
                this.match(VTLParser.CPAR);
                this.state = 170;
                this.block();
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VTLParser.ELSEIF) {
                    {
                        {
                            this.state = 171;
                            this.elseif_directive();
                        }
                    }
                    this.state = 176;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === VTLParser.ELSE) {
                    {
                        this.state = 177;
                        this.else_directive();
                    }
                }
                this.state = 180;
                this.end();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseif_directive() {
        let _localctx = new Elseif_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, VTLParser.RULE_elseif_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this.match(VTLParser.ELSEIF);
                this.state = 183;
                this.expression(0);
                this.state = 184;
                this.match(VTLParser.CPAR);
                this.state = 185;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    else_directive() {
        let _localctx = new Else_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, VTLParser.RULE_else_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this.match(VTLParser.ELSE);
                this.state = 188;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    foreach_directive() {
        let _localctx = new Foreach_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, VTLParser.RULE_foreach_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 190;
                this.match(VTLParser.FOREACH);
                this.state = 191;
                this.variable();
                this.state = 192;
                this.match(VTLParser.K_IN);
                this.state = 193;
                this.expression(0);
                this.state = 194;
                this.match(VTLParser.CPAR);
                this.state = 195;
                this.block();
                this.state = 196;
                this.end();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    break_directive() {
        let _localctx = new Break_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, VTLParser.RULE_break_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(VTLParser.BREAK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stop_directive() {
        let _localctx = new Stop_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, VTLParser.RULE_stop_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.match(VTLParser.STOP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    custom_directive() {
        let _localctx = new Custom_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, VTLParser.RULE_custom_directive);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(VTLParser.ID);
                this.state = 210;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 206;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
                                {
                                    {
                                        this.state = 203;
                                        this.expression(0);
                                    }
                                }
                                this.state = 208;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 209;
                            this.match(VTLParser.CPAR);
                        }
                        break;
                }
                this.state = 215;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 212;
                            this.block();
                            this.state = 213;
                            this.end();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    macro_directive() {
        let _localctx = new Macro_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, VTLParser.RULE_macro_directive);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this.match(VTLParser.MACRO);
                this.state = 221;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
                    {
                        {
                            this.state = 218;
                            this.expression(0);
                        }
                    }
                    this.state = 223;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 224;
                this.match(VTLParser.CPAR);
                this.state = 225;
                this.block();
                this.state = 226;
                this.end();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parse_directive() {
        let _localctx = new Parse_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, VTLParser.RULE_parse_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this.match(VTLParser.PARSE);
                this.state = 229;
                this.expression(0);
                this.state = 230;
                this.match(VTLParser.CPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    define_directive() {
        let _localctx = new Define_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, VTLParser.RULE_define_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(VTLParser.DEFINE);
                this.state = 233;
                this.expression(0);
                this.state = 234;
                this.match(VTLParser.CPAR);
                this.state = 235;
                this.block();
                this.state = 236;
                this.end();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    include_directive() {
        let _localctx = new Include_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, VTLParser.RULE_include_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(VTLParser.INCLUDE);
                this.state = 239;
                this.expressions();
                this.state = 240;
                this.match(VTLParser.CPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    evaluate_directive() {
        let _localctx = new Evaluate_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, VTLParser.RULE_evaluate_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                this.match(VTLParser.EVALUATE);
                this.state = 243;
                this.expression(0);
                this.state = 244;
                this.match(VTLParser.CPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    macro_call_directive() {
        let _localctx = new Macro_call_directiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, VTLParser.RULE_macro_call_directive);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.match(VTLParser.MACRO_ID);
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
                    {
                        {
                            this.state = 247;
                            this.expression(0);
                        }
                    }
                    this.state = 252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 253;
                this.match(VTLParser.CPAR);
                this.state = 254;
                this.block();
                this.state = 255;
                this.end();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    end() {
        let _localctx = new EndContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, VTLParser.RULE_end);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(VTLParser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 50;
        this.enterRecursionRule(_localctx, 50, VTLParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 260;
                            _la = this._input.LA(1);
                            if (!(_la === VTLParser.EXCL || _la === VTLParser.K_NOT)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 261;
                            this.expression(18);
                        }
                        break;
                    case 2:
                        {
                            this.state = 262;
                            this.match(VTLParser.SUB);
                            this.state = 263;
                            this.expression(17);
                        }
                        break;
                    case 3:
                        {
                            this.state = 264;
                            this.list();
                        }
                        break;
                    case 4:
                        {
                            this.state = 265;
                            this.map();
                        }
                        break;
                    case 5:
                        {
                            this.state = 266;
                            this.property_or_method();
                        }
                        break;
                    case 6:
                        {
                            this.state = 267;
                            this.variable();
                        }
                        break;
                    case 7:
                        {
                            this.state = 268;
                            this.id();
                        }
                        break;
                    case 8:
                        {
                            this.state = 269;
                            this.match(VTLParser.STRING);
                        }
                        break;
                    case 9:
                        {
                            this.state = 270;
                            this.match(VTLParser.INTEGER);
                        }
                        break;
                    case 10:
                        {
                            this.state = 271;
                            this.match(VTLParser.FLOAT);
                        }
                        break;
                    case 11:
                        {
                            this.state = 272;
                            this.match(VTLParser.K_NULL);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 298;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 296;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
                                        this.state = 275;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 276;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.MUL) | (1 << VTLParser.DIV) | (1 << VTLParser.MOD))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 277;
                                        this.expression(17);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
                                        this.state = 278;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 279;
                                        _la = this._input.LA(1);
                                        if (!(_la === VTLParser.ADD || _la === VTLParser.SUB)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 280;
                                        this.expression(16);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
                                        this.state = 281;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 282;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (VTLParser.EQ - 14)) | (1 << (VTLParser.NE - 14)) | (1 << (VTLParser.K_EQ - 14)) | (1 << (VTLParser.K_NE - 14)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 283;
                                        this.expression(15);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
                                        this.state = 284;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 285;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (VTLParser.LT - 27)) | (1 << (VTLParser.LE - 27)) | (1 << (VTLParser.GT - 27)) | (1 << (VTLParser.GE - 27)) | (1 << (VTLParser.K_LT - 27)) | (1 << (VTLParser.K_LE - 27)) | (1 << (VTLParser.K_GT - 27)) | (1 << (VTLParser.K_GE - 27)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 286;
                                        this.expression(14);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
                                        this.state = 287;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 288;
                                        _la = this._input.LA(1);
                                        if (!(_la === VTLParser.AND || _la === VTLParser.K_AND)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 289;
                                        this.expression(13);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
                                        this.state = 290;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 291;
                                        _la = this._input.LA(1);
                                        if (!(_la === VTLParser.OR || _la === VTLParser.K_OR)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 292;
                                        this.expression(12);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, VTLParser.RULE_expression);
                                        this.state = 293;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 294;
                                        this.match(VTLParser.RANGE);
                                        this.state = 295;
                                        this.expression(11);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 300;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list() {
        let _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, VTLParser.RULE_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.match(VTLParser.OBRACK);
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
                    {
                        this.state = 302;
                        this.expressions();
                    }
                }
                this.state = 305;
                this.match(VTLParser.CBRACK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    map() {
        let _localctx = new MapContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, VTLParser.RULE_map);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.match(VTLParser.OBRACE);
                this.state = 309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VTLParser.OBRACK) | (1 << VTLParser.OBRACE) | (1 << VTLParser.STRING) | (1 << VTLParser.INTEGER) | (1 << VTLParser.ID) | (1 << VTLParser.REFERENCE) | (1 << VTLParser.K_NULL) | (1 << VTLParser.SUB) | (1 << VTLParser.FLOAT) | (1 << VTLParser.EXCL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)) | (1 << (VTLParser.DOLLAR_EXCL - 32)) | (1 << (VTLParser.DOLLAR - 32)))) !== 0)) {
                    {
                        this.state = 308;
                        this.map_entries();
                    }
                }
                this.state = 311;
                this.match(VTLParser.CBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    map_entries() {
        let _localctx = new Map_entriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, VTLParser.RULE_map_entries);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.map_entry();
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === VTLParser.COMMA) {
                    {
                        {
                            this.state = 314;
                            this.match(VTLParser.COMMA);
                            this.state = 315;
                            this.map_entry();
                        }
                    }
                    this.state = 320;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    map_entry() {
        let _localctx = new Map_entryContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, VTLParser.RULE_map_entry);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 321;
                this.expression(0);
                this.state = 322;
                this.match(VTLParser.COLON);
                this.state = 323;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    id() {
        let _localctx = new IdContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, VTLParser.RULE_id);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 325;
                _la = this._input.LA(1);
                if (!(_la === VTLParser.ID || _la === VTLParser.K_NULL || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VTLParser.K_LT - 32)) | (1 << (VTLParser.K_LE - 32)) | (1 << (VTLParser.K_GT - 32)) | (1 << (VTLParser.K_GE - 32)) | (1 << (VTLParser.K_EQ - 32)) | (1 << (VTLParser.K_NE - 32)) | (1 << (VTLParser.K_TRUE - 32)) | (1 << (VTLParser.K_FALSE - 32)) | (1 << (VTLParser.K_AND - 32)) | (1 << (VTLParser.K_OR - 32)) | (1 << (VTLParser.K_NOT - 32)) | (1 << (VTLParser.K_IN - 32)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 25:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 16);
            case 1:
                return this.precpred(this._ctx, 15);
            case 2:
                return this.precpred(this._ctx, 14);
            case 3:
                return this.precpred(this._ctx, 13);
            case 4:
                return this.precpred(this._ctx, 12);
            case 5:
                return this.precpred(this._ctx, 11);
            case 6:
                return this.precpred(this._ctx, 10);
        }
        return true;
    }
    static get _ATN() {
        if (!VTLParser.__ATN) {
            VTLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(VTLParser._serializedATN));
        }
        return VTLParser.__ATN;
    }
}
exports.VTLParser = VTLParser;
VTLParser.OPAR = 1;
VTLParser.CPAR = 2;
VTLParser.OBRACK = 3;
VTLParser.CBRACK = 4;
VTLParser.OBRACE = 5;
VTLParser.CBRACE = 6;
VTLParser.STRING = 7;
VTLParser.INTEGER = 8;
VTLParser.ID = 9;
VTLParser.REFERENCE = 10;
VTLParser.DOT = 11;
VTLParser.COMMA = 12;
VTLParser.ASSIGN = 13;
VTLParser.EQ = 14;
VTLParser.NE = 15;
VTLParser.AND = 16;
VTLParser.OR = 17;
VTLParser.K_NULL = 18;
VTLParser.ADD = 19;
VTLParser.SUB = 20;
VTLParser.MUL = 21;
VTLParser.DIV = 22;
VTLParser.MOD = 23;
VTLParser.COLON = 24;
VTLParser.FLOAT = 25;
VTLParser.RANGE = 26;
VTLParser.LT = 27;
VTLParser.LE = 28;
VTLParser.GT = 29;
VTLParser.GE = 30;
VTLParser.EXCL = 31;
VTLParser.K_LT = 32;
VTLParser.K_LE = 33;
VTLParser.K_GT = 34;
VTLParser.K_GE = 35;
VTLParser.K_EQ = 36;
VTLParser.K_NE = 37;
VTLParser.K_TRUE = 38;
VTLParser.K_FALSE = 39;
VTLParser.K_AND = 40;
VTLParser.K_OR = 41;
VTLParser.K_NOT = 42;
VTLParser.K_IN = 43;
VTLParser.IF = 44;
VTLParser.ELSEIF = 45;
VTLParser.ELSE = 46;
VTLParser.FOREACH = 47;
VTLParser.SET = 48;
VTLParser.END = 49;
VTLParser.BREAK = 50;
VTLParser.MACRO_ID = 51;
VTLParser.MACRO = 52;
VTLParser.STOP = 53;
VTLParser.INCLUDE = 54;
VTLParser.EVALUATE = 55;
VTLParser.PARSE = 56;
VTLParser.DEFINE = 57;
VTLParser.ESCAPED_CHAR = 58;
VTLParser.START_DIRECTIVE = 59;
VTLParser.DOLLAR_EXCL_OBRACE = 60;
VTLParser.DOLLAR_OBRACE = 61;
VTLParser.DOLLAR_EXCL = 62;
VTLParser.DOLLAR = 63;
VTLParser.TEXT = 64;
VTLParser.ESCAPED_BLOCK = 65;
VTLParser.SNGLE_LINE_COMMENT = 66;
VTLParser.VTL_COMMENT_BLOCK = 67;
VTLParser.MULTI_LINE_COMMENT = 68;
VTLParser.VAR_HASH = 69;
VTLParser.CODE_SPACES = 70;
VTLParser.FRM_DOT = 71;
VTLParser.FRM_CBRACE = 72;
VTLParser.CODE_K_LT = 73;
VTLParser.CODE_K_LE = 74;
VTLParser.CODE_K_GT = 75;
VTLParser.CODE_K_GE = 76;
VTLParser.CODE_K_EQ = 77;
VTLParser.CODE_K_NE = 78;
VTLParser.CODE_K_TRUE = 79;
VTLParser.CODE_K_FALSE = 80;
VTLParser.CODE_K_AND = 81;
VTLParser.CODE_K_OR = 82;
VTLParser.CODE_K_NOT = 83;
VTLParser.CODE_K_NULL = 84;
VTLParser.CODE_K_IN = 85;
VTLParser.CODE_ADD = 86;
VTLParser.CODE_SUB = 87;
VTLParser.CODE_MUL = 88;
VTLParser.CODE_DIV = 89;
VTLParser.CODE_MOD = 90;
VTLParser.CODE_EXCL = 91;
VTLParser.CODE_OR = 92;
VTLParser.CODE_AND = 93;
VTLParser.CODE_ASSIGN = 94;
VTLParser.CODE_EQ = 95;
VTLParser.CODE_NEQ = 96;
VTLParser.CODE_LT = 97;
VTLParser.CODE_LE = 98;
VTLParser.CODE_GT = 99;
VTLParser.CODE_GE = 100;
VTLParser.CODE_CPAR = 101;
VTLParser.CODE_COLON = 102;
VTLParser.CODE_RANGE = 103;
VTLParser.CODE_OBRACK = 104;
VTLParser.CODE_CBRACK = 105;
VTLParser.CODE_OBRACE = 106;
VTLParser.CODE_COMMA = 107;
VTLParser.RULE_parse = 0;
VTLParser.RULE_block = 1;
VTLParser.RULE_atom = 2;
VTLParser.RULE_formal = 3;
VTLParser.RULE_variable = 4;
VTLParser.RULE_property_or_method = 5;
VTLParser.RULE_formal_property_or_method = 6;
VTLParser.RULE_directive = 7;
VTLParser.RULE_property_end = 8;
VTLParser.RULE_expressions = 9;
VTLParser.RULE_set_directive = 10;
VTLParser.RULE_if_directive = 11;
VTLParser.RULE_elseif_directive = 12;
VTLParser.RULE_else_directive = 13;
VTLParser.RULE_foreach_directive = 14;
VTLParser.RULE_break_directive = 15;
VTLParser.RULE_stop_directive = 16;
VTLParser.RULE_custom_directive = 17;
VTLParser.RULE_macro_directive = 18;
VTLParser.RULE_parse_directive = 19;
VTLParser.RULE_define_directive = 20;
VTLParser.RULE_include_directive = 21;
VTLParser.RULE_evaluate_directive = 22;
VTLParser.RULE_macro_call_directive = 23;
VTLParser.RULE_end = 24;
VTLParser.RULE_expression = 25;
VTLParser.RULE_list = 26;
VTLParser.RULE_map = 27;
VTLParser.RULE_map_entries = 28;
VTLParser.RULE_map_entry = 29;
VTLParser.RULE_id = 30;
// tslint:disable:no-trailing-whitespace
VTLParser.ruleNames = [
    "parse", "block", "atom", "formal", "variable", "property_or_method",
    "formal_property_or_method", "directive", "property_end", "expressions",
    "set_directive", "if_directive", "elseif_directive", "else_directive",
    "foreach_directive", "break_directive", "stop_directive", "custom_directive",
    "macro_directive", "parse_directive", "define_directive", "include_directive",
    "evaluate_directive", "macro_call_directive", "end", "expression", "list",
    "map", "map_entries", "map_entry", "id",
];
VTLParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "'#'", undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "'lt'", "'le'", "'gt'", "'ge'", "'eq'",
    "'ne'", "'true'", "'false'", "'and'", "'or'", "'not'", "'null'", "'in'",
    "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "'||'", "'&&'", "'='", "'=='",
    "'!='", "'<'", "'<='", "'>'", "'>='", "')'", "':'", "'..'", "'['", undefined,
    "'{'", "','",
];
VTLParser._SYMBOLIC_NAMES = [
    undefined, "OPAR", "CPAR", "OBRACK", "CBRACK", "OBRACE", "CBRACE", "STRING",
    "INTEGER", "ID", "REFERENCE", "DOT", "COMMA", "ASSIGN", "EQ", "NE", "AND",
    "OR", "K_NULL", "ADD", "SUB", "MUL", "DIV", "MOD", "COLON", "FLOAT", "RANGE",
    "LT", "LE", "GT", "GE", "EXCL", "K_LT", "K_LE", "K_GT", "K_GE", "K_EQ",
    "K_NE", "K_TRUE", "K_FALSE", "K_AND", "K_OR", "K_NOT", "K_IN", "IF", "ELSEIF",
    "ELSE", "FOREACH", "SET", "END", "BREAK", "MACRO_ID", "MACRO", "STOP",
    "INCLUDE", "EVALUATE", "PARSE", "DEFINE", "ESCAPED_CHAR", "START_DIRECTIVE",
    "DOLLAR_EXCL_OBRACE", "DOLLAR_OBRACE", "DOLLAR_EXCL", "DOLLAR", "TEXT",
    "ESCAPED_BLOCK", "SNGLE_LINE_COMMENT", "VTL_COMMENT_BLOCK", "MULTI_LINE_COMMENT",
    "VAR_HASH", "CODE_SPACES", "FRM_DOT", "FRM_CBRACE", "CODE_K_LT", "CODE_K_LE",
    "CODE_K_GT", "CODE_K_GE", "CODE_K_EQ", "CODE_K_NE", "CODE_K_TRUE", "CODE_K_FALSE",
    "CODE_K_AND", "CODE_K_OR", "CODE_K_NOT", "CODE_K_NULL", "CODE_K_IN", "CODE_ADD",
    "CODE_SUB", "CODE_MUL", "CODE_DIV", "CODE_MOD", "CODE_EXCL", "CODE_OR",
    "CODE_AND", "CODE_ASSIGN", "CODE_EQ", "CODE_NEQ", "CODE_LT", "CODE_LE",
    "CODE_GT", "CODE_GE", "CODE_CPAR", "CODE_COLON", "CODE_RANGE", "CODE_OBRACK",
    "CODE_CBRACK", "CODE_OBRACE", "CODE_COMMA",
];
VTLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(VTLParser._LITERAL_NAMES, VTLParser._SYMBOLIC_NAMES, []);
VTLParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03m\u014A\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x03\x02" +
    "\x03\x03\x07\x03E\n\x03\f\x03\x0E\x03H\v\x03\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x05\x04Q\n\x04\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x03\x05\x03\x05\x05\x05c\n\x05\x03\x06\x03\x06\x03\x06\x05" +
    "\x06h\n\x06\x03\x06\x03\x06\x03\x06\x05\x06m\n\x06\x03\x06\x03\x06\x05" +
    "\x06q\n\x06\x05\x06s\n\x06\x03\x07\x03\x07\x06\x07w\n\x07\r\x07\x0E\x07" +
    "x\x03\b\x03\b\x06\b}\n\b\r\b\x0E\b~\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8D\n\t\x03\n\x03\n\x03\n" +
    "\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x97\n\n\x03\n\x05\n\x9A\n\n\x03\v" +
    "\x03\v\x03\v\x07\v\x9F\n\v\f\v\x0E\v\xA2\v\v\x03\f\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xAF\n\r\f\r\x0E\r\xB2\v\r" +
    "\x03\r\x05\r\xB5\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13" +
    "\xCF\n\x13\f\x13\x0E\x13\xD2\v\x13\x03\x13\x05\x13\xD5\n\x13\x03\x13\x03" +
    "\x13\x03\x13\x05\x13\xDA\n\x13\x03\x14\x03\x14\x07\x14\xDE\n\x14\f\x14" +
    "\x0E\x14\xE1\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
    "\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
    "\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x07" +
    "\x19\xFB\n\x19\f\x19\x0E\x19\xFE\v\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
    "\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0114" +
    "\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u012B\n\x1B\f\x1B\x0E\x1B\u012E" +
    "\v\x1B\x03\x1C\x03\x1C\x05\x1C\u0132\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
    "\x1D\x05\x1D\u0138\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E" +
    "\u013F\n\x1E\f\x1E\x0E\x1E\u0142\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x03 \x03 \x03 \x02\x02\x034!\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
    "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
    " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
    "<\x02>\x02\x02\n\x04\x02!!,,\x03\x02\x17\x19\x03\x02\x15\x16\x04\x02\x10" +
    "\x11&\'\x04\x02\x1D \"%\x04\x02\x12\x12**\x04\x02\x13\x13++\x05\x02\v" +
    "\v\x14\x14\"-\x02\u0165\x02@\x03\x02\x02\x02\x04F\x03\x02\x02\x02\x06" +
    "P\x03\x02\x02\x02\bb\x03\x02\x02\x02\nr\x03\x02\x02\x02\ft\x03\x02\x02" +
    "\x02\x0Ez\x03\x02\x02\x02\x10\x8C\x03\x02\x02\x02\x12\x99\x03\x02\x02" +
    "\x02\x14\x9B\x03\x02\x02\x02\x16\xA3\x03\x02\x02\x02\x18\xA9\x03\x02\x02" +
    "\x02\x1A\xB8\x03\x02\x02\x02\x1C\xBD\x03\x02\x02\x02\x1E\xC0\x03\x02\x02" +
    "\x02 \xC8\x03\x02\x02\x02\"\xCA\x03\x02\x02\x02$\xCC\x03\x02\x02\x02&" +
    "\xDB\x03\x02\x02\x02(\xE6\x03\x02\x02\x02*\xEA\x03\x02\x02\x02,\xF0\x03" +
    "\x02\x02\x02.\xF4\x03\x02\x02\x020\xF8\x03\x02\x02\x022\u0103\x03\x02" +
    "\x02\x024\u0113\x03\x02\x02\x026\u012F\x03\x02\x02\x028\u0135\x03\x02" +
    "\x02\x02:\u013B\x03\x02\x02\x02<\u0143\x03\x02\x02\x02>\u0147\x03\x02" +
    "\x02\x02@A\x05\x04\x03\x02AB\x07\x02\x02\x03B\x03\x03\x02\x02\x02CE\x05" +
    "\x06\x04\x02DC\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03" +
    "\x02\x02\x02G\x05\x03\x02\x02\x02HF\x03\x02\x02\x02IQ\x07B\x02\x02JQ\x07" +
    "<\x02\x02KQ\x07C\x02\x02LQ\x05\n\x06\x02MQ\x05\b\x05\x02NQ\x05\f\x07\x02" +
    "OQ\x05\x10\t\x02PI\x03\x02\x02\x02PJ\x03\x02\x02\x02PK\x03\x02\x02\x02" +
    "PL\x03\x02\x02\x02PM\x03\x02\x02\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02" +
    "Q\x07\x03\x02\x02\x02RS\x07?\x02\x02ST\x05\x0E\b\x02TU\x07\b\x02\x02U" +
    "c\x03\x02\x02\x02VW\x07>\x02\x02WX\x05\x0E\b\x02XY\x07\b\x02\x02Yc\x03" +
    "\x02\x02\x02Z[\x07?\x02\x02[\\\x05> \x02\\]\x07\b\x02\x02]c\x03\x02\x02" +
    "\x02^_\x07>\x02\x02_`\x05> \x02`a\x07\b\x02\x02ac\x03\x02\x02\x02bR\x03" +
    "\x02\x02\x02bV\x03\x02\x02\x02bZ\x03\x02\x02\x02b^\x03\x02\x02\x02c\t" +
    "\x03\x02\x02\x02de\x07A\x02\x02eg\x05> \x02fh\x07\r\x02\x02gf\x03\x02" +
    "\x02\x02gh\x03\x02\x02\x02hs\x03\x02\x02\x02ij\x07@\x02\x02jl\x05> \x02" +
    "km\x07\r\x02\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02ms\x03\x02\x02\x02" +
    "np\x07\f\x02\x02oq\x07\r\x02\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02q" +
    "s\x03\x02\x02\x02rd\x03\x02\x02\x02ri\x03\x02\x02\x02rn\x03\x02\x02\x02" +
    "s\v\x03\x02\x02\x02tv\x05\n\x06\x02uw\x05\x12\n\x02vu\x03\x02\x02\x02" +
    "wx\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y\r\x03\x02\x02" +
    "\x02z|\x05> \x02{}\x05\x12\n\x02|{\x03\x02\x02\x02}~\x03\x02\x02\x02~" +
    "|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x0F\x03\x02\x02\x02\x80\x8D" +
    "\x05\x16\f\x02\x81\x8D\x05\x18\r\x02\x82\x8D\x05\x1E\x10\x02\x83\x8D\x05" +
    " \x11\x02\x84\x8D\x05\"\x12\x02\x85\x8D\x05&\x14\x02\x86\x8D\x05(\x15" +
    "\x02\x87\x8D\x05*\x16\x02\x88\x8D\x05,\x17\x02\x89\x8D\x05.\x18\x02\x8A" +
    "\x8D\x050\x19\x02\x8B\x8D\x05$\x13\x02\x8C\x80\x03\x02\x02\x02\x8C\x81" +
    "\x03\x02\x02\x02\x8C\x82\x03\x02\x02\x02\x8C\x83\x03\x02\x02\x02\x8C\x84" +
    "\x03\x02\x02\x02\x8C\x85\x03\x02\x02\x02\x8C\x86\x03\x02\x02\x02\x8C\x87" +
    "\x03\x02\x02\x02\x8C\x88\x03\x02\x02\x02\x8C\x89\x03\x02\x02\x02\x8C\x8A" +
    "\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x11\x03\x02\x02\x02\x8E\x8F" +
    "\x07\r\x02\x02\x8F\x9A\x07\v\x02\x02\x90\x91\x07\x05\x02\x02\x91\x92\x05" +
    "4\x1B\x02\x92\x93\x07\x06\x02\x02\x93\x9A\x03\x02\x02\x02\x94\x96\x07" +
    "\x03\x02\x02\x95\x97\x05\x14\v\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03" +
    "\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x07\x04\x02\x02\x99\x8E\x03" +
    "\x02\x02\x02\x99\x90\x03\x02\x02\x02\x99\x94\x03\x02\x02\x02\x9A\x13\x03" +
    "\x02\x02\x02\x9B\xA0\x054\x1B\x02\x9C\x9D\x07\x0E\x02\x02\x9D\x9F\x05" +
    "4\x1B\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03" +
    "\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x15\x03\x02\x02\x02\xA2\xA0\x03" +
    "\x02\x02\x02\xA3\xA4\x072\x02\x02\xA4\xA5\x054\x1B\x02\xA5\xA6\x07\x0F" +
    "\x02\x02\xA6\xA7\x054\x1B\x02\xA7\xA8\x07\x04\x02\x02\xA8\x17\x03\x02" +
    "\x02\x02\xA9\xAA\x07.\x02\x02\xAA\xAB\x054\x1B\x02\xAB\xAC\x07\x04\x02" +
    "\x02\xAC\xB0\x05\x04\x03\x02\xAD\xAF\x05\x1A\x0E\x02\xAE\xAD\x03\x02\x02" +
    "\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02" +
    "\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB5\x05\x1C\x0F" +
    "\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02" +
    "\x02\xB6\xB7\x052\x1A\x02\xB7\x19\x03\x02\x02\x02\xB8\xB9\x07/\x02\x02" +
    "\xB9\xBA\x054\x1B\x02\xBA\xBB\x07\x04\x02\x02\xBB\xBC\x05\x04\x03\x02" +
    "\xBC\x1B\x03\x02\x02\x02\xBD\xBE\x070\x02\x02\xBE\xBF\x05\x04\x03\x02" +
    "\xBF\x1D\x03\x02\x02\x02\xC0\xC1\x071\x02\x02\xC1\xC2\x05\n\x06\x02\xC2" +
    "\xC3\x07-\x02\x02\xC3\xC4\x054\x1B\x02\xC4\xC5\x07\x04\x02\x02\xC5\xC6" +
    "\x05\x04\x03\x02\xC6\xC7\x052\x1A\x02\xC7\x1F\x03\x02\x02\x02\xC8\xC9" +
    "\x074\x02\x02\xC9!\x03\x02\x02\x02\xCA\xCB\x077\x02\x02\xCB#\x03\x02\x02" +
    "\x02\xCC\xD4\x07\v\x02\x02\xCD\xCF\x054\x1B\x02\xCE\xCD\x03\x02\x02\x02" +
    "\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02" +
    "\xD1\xD3\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD5\x07\x04\x02\x02" +
    "\xD4\xD0\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD9\x03\x02\x02\x02" +
    "\xD6\xD7\x05\x04\x03\x02\xD7\xD8\x052\x1A\x02\xD8\xDA\x03\x02\x02\x02" +
    "\xD9\xD6\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA%\x03\x02\x02\x02" +
    "\xDB\xDF\x076\x02\x02\xDC\xDE\x054\x1B\x02\xDD\xDC\x03\x02\x02\x02\xDE" +
    "\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0" +
    "\xE2\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE3\x07\x04\x02\x02\xE3" +
    "\xE4\x05\x04\x03\x02\xE4\xE5\x052\x1A\x02\xE5\'\x03\x02\x02\x02\xE6\xE7" +
    "\x07:\x02\x02\xE7\xE8\x054\x1B\x02\xE8\xE9\x07\x04\x02\x02\xE9)\x03\x02" +
    "\x02\x02\xEA\xEB\x07;\x02\x02\xEB\xEC\x054\x1B\x02\xEC\xED\x07\x04\x02" +
    "\x02\xED\xEE\x05\x04\x03\x02\xEE\xEF\x052\x1A\x02\xEF+\x03\x02\x02\x02" +
    "\xF0\xF1\x078\x02\x02\xF1\xF2\x05\x14\v\x02\xF2\xF3\x07\x04\x02\x02\xF3" +
    "-\x03\x02\x02\x02\xF4\xF5\x079\x02\x02\xF5\xF6\x054\x1B\x02\xF6\xF7\x07" +
    "\x04\x02\x02\xF7/\x03\x02\x02\x02\xF8\xFC\x075\x02\x02\xF9\xFB\x054\x1B" +
    "\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02" +
    "\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xFC\x03\x02\x02" +
    "\x02\xFF\u0100\x07\x04\x02\x02\u0100\u0101\x05\x04\x03\x02\u0101\u0102" +
    "\x052\x1A\x02\u01021\x03\x02\x02\x02\u0103\u0104\x073\x02\x02\u01043\x03" +
    "\x02\x02\x02\u0105\u0106\b\x1B\x01\x02\u0106\u0107\t\x02\x02\x02\u0107" +
    "\u0114\x054\x1B\x14\u0108\u0109\x07\x16\x02\x02\u0109\u0114\x054\x1B\x13" +
    "\u010A\u0114\x056\x1C\x02\u010B\u0114\x058\x1D\x02\u010C\u0114\x05\f\x07" +
    "\x02\u010D\u0114\x05\n\x06\x02\u010E\u0114\x05> \x02\u010F\u0114\x07\t" +
    "\x02\x02\u0110\u0114\x07\n\x02\x02\u0111\u0114\x07\x1B\x02\x02\u0112\u0114" +
    "\x07\x14\x02\x02\u0113\u0105\x03\x02\x02\x02\u0113\u0108\x03\x02\x02\x02" +
    "\u0113\u010A\x03\x02\x02\x02\u0113\u010B\x03\x02\x02\x02\u0113\u010C\x03" +
    "\x02\x02\x02\u0113\u010D\x03\x02\x02\x02\u0113\u010E\x03\x02\x02\x02\u0113" +
    "\u010F\x03\x02\x02\x02\u0113\u0110\x03\x02\x02\x02\u0113\u0111\x03\x02" +
    "\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114\u012C\x03\x02\x02\x02\u0115" +
    "\u0116\f\x12\x02\x02\u0116\u0117\t\x03\x02\x02\u0117\u012B\x054\x1B\x13" +
    "\u0118\u0119\f\x11\x02\x02\u0119\u011A\t\x04\x02\x02\u011A\u012B\x054" +
    "\x1B\x12\u011B\u011C\f\x10\x02\x02\u011C\u011D\t\x05\x02\x02\u011D\u012B" +
    "\x054\x1B\x11\u011E\u011F\f\x0F\x02\x02\u011F\u0120\t\x06\x02\x02\u0120" +
    "\u012B\x054\x1B\x10\u0121\u0122\f\x0E\x02\x02\u0122\u0123\t\x07\x02\x02" +
    "\u0123\u012B\x054\x1B\x0F\u0124\u0125\f\r\x02\x02\u0125\u0126\t\b\x02" +
    "\x02\u0126\u012B\x054\x1B\x0E\u0127\u0128\f\f\x02\x02\u0128\u0129\x07" +
    "\x1C\x02\x02\u0129\u012B\x054\x1B\r\u012A\u0115\x03\x02\x02\x02\u012A" +
    "\u0118\x03\x02\x02\x02\u012A\u011B\x03\x02\x02\x02\u012A\u011E\x03\x02" +
    "\x02\x02\u012A\u0121\x03\x02\x02\x02\u012A\u0124\x03\x02\x02\x02\u012A" +
    "\u0127\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02" +
    "\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D5\x03\x02\x02\x02\u012E\u012C" +
    "\x03\x02\x02\x02\u012F\u0131\x07\x05\x02\x02\u0130\u0132\x05\x14\v\x02" +
    "\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03" +
    "\x02\x02\x02\u0133\u0134\x07\x06\x02\x02\u01347\x03\x02\x02\x02\u0135" +
    "\u0137\x07\x07\x02\x02\u0136\u0138\x05:\x1E\x02\u0137\u0136\x03\x02\x02" +
    "\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A" +
    "\x07\b\x02\x02\u013A9\x03\x02\x02\x02\u013B\u0140\x05<\x1F\x02\u013C\u013D" +
    "\x07\x0E\x02\x02\u013D\u013F\x05<\x1F\x02\u013E\u013C\x03\x02\x02\x02" +
    "\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03" +
    "\x02\x02\x02\u0141;\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143" +
    "\u0144\x054\x1B\x02\u0144\u0145\x07\x1A\x02\x02\u0145\u0146\x054\x1B\x02" +
    "\u0146=\x03\x02\x02\x02\u0147\u0148\t\t\x02\x02\u0148?\x03\x02\x02\x02" +
    "\x1CFPbglprx~\x8C\x96\x99\xA0\xB0\xB4\xD0\xD4\xD9\xDF\xFC\u0113\u012A" +
    "\u012C\u0131\u0137\u0140";
class ParseContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    EOF() { return this.getToken(VTLParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_parse; }
    // @Override
    enterRule(listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    }
}
exports.ParseContext = ParseContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    atom(i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
}
exports.BlockContext = BlockContext;
class AtomContext extends ParserRuleContext_1.ParserRuleContext {
    TEXT() { return this.tryGetToken(VTLParser.TEXT, 0); }
    ESCAPED_CHAR() { return this.tryGetToken(VTLParser.ESCAPED_CHAR, 0); }
    ESCAPED_BLOCK() { return this.tryGetToken(VTLParser.ESCAPED_BLOCK, 0); }
    variable() {
        return this.tryGetRuleContext(0, VariableContext);
    }
    formal() {
        return this.tryGetRuleContext(0, FormalContext);
    }
    property_or_method() {
        return this.tryGetRuleContext(0, Property_or_methodContext);
    }
    directive() {
        return this.tryGetRuleContext(0, DirectiveContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    }
}
exports.AtomContext = AtomContext;
class FormalContext extends ParserRuleContext_1.ParserRuleContext {
    DOLLAR_OBRACE() { return this.tryGetToken(VTLParser.DOLLAR_OBRACE, 0); }
    formal_property_or_method() {
        return this.tryGetRuleContext(0, Formal_property_or_methodContext);
    }
    CBRACE() { return this.getToken(VTLParser.CBRACE, 0); }
    DOLLAR_EXCL_OBRACE() { return this.tryGetToken(VTLParser.DOLLAR_EXCL_OBRACE, 0); }
    id() {
        return this.tryGetRuleContext(0, IdContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_formal; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormal) {
            listener.enterFormal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormal) {
            listener.exitFormal(this);
        }
    }
}
exports.FormalContext = FormalContext;
class VariableContext extends ParserRuleContext_1.ParserRuleContext {
    DOLLAR() { return this.tryGetToken(VTLParser.DOLLAR, 0); }
    id() {
        return this.tryGetRuleContext(0, IdContext);
    }
    DOT() { return this.tryGetToken(VTLParser.DOT, 0); }
    DOLLAR_EXCL() { return this.tryGetToken(VTLParser.DOLLAR_EXCL, 0); }
    REFERENCE() { return this.tryGetToken(VTLParser.REFERENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_variable; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    }
}
exports.VariableContext = VariableContext;
class Property_or_methodContext extends ParserRuleContext_1.ParserRuleContext {
    variable() {
        return this.getRuleContext(0, VariableContext);
    }
    property_end(i) {
        if (i === undefined) {
            return this.getRuleContexts(Property_endContext);
        }
        else {
            return this.getRuleContext(i, Property_endContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_property_or_method; }
    // @Override
    enterRule(listener) {
        if (listener.enterProperty_or_method) {
            listener.enterProperty_or_method(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProperty_or_method) {
            listener.exitProperty_or_method(this);
        }
    }
}
exports.Property_or_methodContext = Property_or_methodContext;
class Formal_property_or_methodContext extends ParserRuleContext_1.ParserRuleContext {
    id() {
        return this.getRuleContext(0, IdContext);
    }
    property_end(i) {
        if (i === undefined) {
            return this.getRuleContexts(Property_endContext);
        }
        else {
            return this.getRuleContext(i, Property_endContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_formal_property_or_method; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormal_property_or_method) {
            listener.enterFormal_property_or_method(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormal_property_or_method) {
            listener.exitFormal_property_or_method(this);
        }
    }
}
exports.Formal_property_or_methodContext = Formal_property_or_methodContext;
class DirectiveContext extends ParserRuleContext_1.ParserRuleContext {
    set_directive() {
        return this.tryGetRuleContext(0, Set_directiveContext);
    }
    if_directive() {
        return this.tryGetRuleContext(0, If_directiveContext);
    }
    foreach_directive() {
        return this.tryGetRuleContext(0, Foreach_directiveContext);
    }
    break_directive() {
        return this.tryGetRuleContext(0, Break_directiveContext);
    }
    stop_directive() {
        return this.tryGetRuleContext(0, Stop_directiveContext);
    }
    macro_directive() {
        return this.tryGetRuleContext(0, Macro_directiveContext);
    }
    parse_directive() {
        return this.tryGetRuleContext(0, Parse_directiveContext);
    }
    define_directive() {
        return this.tryGetRuleContext(0, Define_directiveContext);
    }
    include_directive() {
        return this.tryGetRuleContext(0, Include_directiveContext);
    }
    evaluate_directive() {
        return this.tryGetRuleContext(0, Evaluate_directiveContext);
    }
    macro_call_directive() {
        return this.tryGetRuleContext(0, Macro_call_directiveContext);
    }
    custom_directive() {
        return this.tryGetRuleContext(0, Custom_directiveContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterDirective) {
            listener.enterDirective(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDirective) {
            listener.exitDirective(this);
        }
    }
}
exports.DirectiveContext = DirectiveContext;
class Property_endContext extends ParserRuleContext_1.ParserRuleContext {
    DOT() { return this.tryGetToken(VTLParser.DOT, 0); }
    ID() { return this.tryGetToken(VTLParser.ID, 0); }
    OBRACK() { return this.tryGetToken(VTLParser.OBRACK, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    CBRACK() { return this.tryGetToken(VTLParser.CBRACK, 0); }
    OPAR() { return this.tryGetToken(VTLParser.OPAR, 0); }
    CPAR() { return this.tryGetToken(VTLParser.CPAR, 0); }
    expressions() {
        return this.tryGetRuleContext(0, ExpressionsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_property_end; }
    // @Override
    enterRule(listener) {
        if (listener.enterProperty_end) {
            listener.enterProperty_end(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProperty_end) {
            listener.exitProperty_end(this);
        }
    }
}
exports.Property_endContext = Property_endContext;
class ExpressionsContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(VTLParser.COMMA);
        }
        else {
            return this.getToken(VTLParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_expressions; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressions) {
            listener.enterExpressions(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressions) {
            listener.exitExpressions(this);
        }
    }
}
exports.ExpressionsContext = ExpressionsContext;
class Set_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    SET() { return this.getToken(VTLParser.SET, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    ASSIGN() { return this.getToken(VTLParser.ASSIGN, 0); }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_set_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterSet_directive) {
            listener.enterSet_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSet_directive) {
            listener.exitSet_directive(this);
        }
    }
}
exports.Set_directiveContext = Set_directiveContext;
class If_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    IF() { return this.getToken(VTLParser.IF, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    end() {
        return this.getRuleContext(0, EndContext);
    }
    elseif_directive(i) {
        if (i === undefined) {
            return this.getRuleContexts(Elseif_directiveContext);
        }
        else {
            return this.getRuleContext(i, Elseif_directiveContext);
        }
    }
    else_directive() {
        return this.tryGetRuleContext(0, Else_directiveContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_if_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterIf_directive) {
            listener.enterIf_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIf_directive) {
            listener.exitIf_directive(this);
        }
    }
}
exports.If_directiveContext = If_directiveContext;
class Elseif_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    ELSEIF() { return this.getToken(VTLParser.ELSEIF, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_elseif_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterElseif_directive) {
            listener.enterElseif_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElseif_directive) {
            listener.exitElseif_directive(this);
        }
    }
}
exports.Elseif_directiveContext = Elseif_directiveContext;
class Else_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    ELSE() { return this.getToken(VTLParser.ELSE, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_else_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterElse_directive) {
            listener.enterElse_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElse_directive) {
            listener.exitElse_directive(this);
        }
    }
}
exports.Else_directiveContext = Else_directiveContext;
class Foreach_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    FOREACH() { return this.getToken(VTLParser.FOREACH, 0); }
    variable() {
        return this.getRuleContext(0, VariableContext);
    }
    K_IN() { return this.getToken(VTLParser.K_IN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    end() {
        return this.getRuleContext(0, EndContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_foreach_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterForeach_directive) {
            listener.enterForeach_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForeach_directive) {
            listener.exitForeach_directive(this);
        }
    }
}
exports.Foreach_directiveContext = Foreach_directiveContext;
class Break_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    BREAK() { return this.getToken(VTLParser.BREAK, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_break_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterBreak_directive) {
            listener.enterBreak_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBreak_directive) {
            listener.exitBreak_directive(this);
        }
    }
}
exports.Break_directiveContext = Break_directiveContext;
class Stop_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    STOP() { return this.getToken(VTLParser.STOP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_stop_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterStop_directive) {
            listener.enterStop_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStop_directive) {
            listener.exitStop_directive(this);
        }
    }
}
exports.Stop_directiveContext = Stop_directiveContext;
class Custom_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(VTLParser.ID, 0); }
    CPAR() { return this.tryGetToken(VTLParser.CPAR, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    end() {
        return this.tryGetRuleContext(0, EndContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_custom_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterCustom_directive) {
            listener.enterCustom_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCustom_directive) {
            listener.exitCustom_directive(this);
        }
    }
}
exports.Custom_directiveContext = Custom_directiveContext;
class Macro_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    MACRO() { return this.getToken(VTLParser.MACRO, 0); }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    end() {
        return this.getRuleContext(0, EndContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_macro_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterMacro_directive) {
            listener.enterMacro_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMacro_directive) {
            listener.exitMacro_directive(this);
        }
    }
}
exports.Macro_directiveContext = Macro_directiveContext;
class Parse_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    PARSE() { return this.getToken(VTLParser.PARSE, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_parse_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterParse_directive) {
            listener.enterParse_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParse_directive) {
            listener.exitParse_directive(this);
        }
    }
}
exports.Parse_directiveContext = Parse_directiveContext;
class Define_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    DEFINE() { return this.getToken(VTLParser.DEFINE, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    end() {
        return this.getRuleContext(0, EndContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_define_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterDefine_directive) {
            listener.enterDefine_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefine_directive) {
            listener.exitDefine_directive(this);
        }
    }
}
exports.Define_directiveContext = Define_directiveContext;
class Include_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    INCLUDE() { return this.getToken(VTLParser.INCLUDE, 0); }
    expressions() {
        return this.getRuleContext(0, ExpressionsContext);
    }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_include_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterInclude_directive) {
            listener.enterInclude_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInclude_directive) {
            listener.exitInclude_directive(this);
        }
    }
}
exports.Include_directiveContext = Include_directiveContext;
class Evaluate_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    EVALUATE() { return this.getToken(VTLParser.EVALUATE, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_evaluate_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterEvaluate_directive) {
            listener.enterEvaluate_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEvaluate_directive) {
            listener.exitEvaluate_directive(this);
        }
    }
}
exports.Evaluate_directiveContext = Evaluate_directiveContext;
class Macro_call_directiveContext extends ParserRuleContext_1.ParserRuleContext {
    MACRO_ID() { return this.getToken(VTLParser.MACRO_ID, 0); }
    CPAR() { return this.getToken(VTLParser.CPAR, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    end() {
        return this.getRuleContext(0, EndContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_macro_call_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterMacro_call_directive) {
            listener.enterMacro_call_directive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMacro_call_directive) {
            listener.exitMacro_call_directive(this);
        }
    }
}
exports.Macro_call_directiveContext = Macro_call_directiveContext;
class EndContext extends ParserRuleContext_1.ParserRuleContext {
    END() { return this.getToken(VTLParser.END, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_end; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnd) {
            listener.enterEnd(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnd) {
            listener.exitEnd(this);
        }
    }
}
exports.EndContext = EndContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    EXCL() { return this.tryGetToken(VTLParser.EXCL, 0); }
    K_NOT() { return this.tryGetToken(VTLParser.K_NOT, 0); }
    SUB() { return this.tryGetToken(VTLParser.SUB, 0); }
    MUL() { return this.tryGetToken(VTLParser.MUL, 0); }
    DIV() { return this.tryGetToken(VTLParser.DIV, 0); }
    MOD() { return this.tryGetToken(VTLParser.MOD, 0); }
    ADD() { return this.tryGetToken(VTLParser.ADD, 0); }
    EQ() { return this.tryGetToken(VTLParser.EQ, 0); }
    NE() { return this.tryGetToken(VTLParser.NE, 0); }
    K_EQ() { return this.tryGetToken(VTLParser.K_EQ, 0); }
    K_NE() { return this.tryGetToken(VTLParser.K_NE, 0); }
    LT() { return this.tryGetToken(VTLParser.LT, 0); }
    LE() { return this.tryGetToken(VTLParser.LE, 0); }
    GT() { return this.tryGetToken(VTLParser.GT, 0); }
    GE() { return this.tryGetToken(VTLParser.GE, 0); }
    K_LT() { return this.tryGetToken(VTLParser.K_LT, 0); }
    K_LE() { return this.tryGetToken(VTLParser.K_LE, 0); }
    K_GT() { return this.tryGetToken(VTLParser.K_GT, 0); }
    K_GE() { return this.tryGetToken(VTLParser.K_GE, 0); }
    AND() { return this.tryGetToken(VTLParser.AND, 0); }
    K_AND() { return this.tryGetToken(VTLParser.K_AND, 0); }
    OR() { return this.tryGetToken(VTLParser.OR, 0); }
    K_OR() { return this.tryGetToken(VTLParser.K_OR, 0); }
    RANGE() { return this.tryGetToken(VTLParser.RANGE, 0); }
    list() {
        return this.tryGetRuleContext(0, ListContext);
    }
    map() {
        return this.tryGetRuleContext(0, MapContext);
    }
    property_or_method() {
        return this.tryGetRuleContext(0, Property_or_methodContext);
    }
    variable() {
        return this.tryGetRuleContext(0, VariableContext);
    }
    id() {
        return this.tryGetRuleContext(0, IdContext);
    }
    STRING() { return this.tryGetToken(VTLParser.STRING, 0); }
    INTEGER() { return this.tryGetToken(VTLParser.INTEGER, 0); }
    FLOAT() { return this.tryGetToken(VTLParser.FLOAT, 0); }
    K_NULL() { return this.tryGetToken(VTLParser.K_NULL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class ListContext extends ParserRuleContext_1.ParserRuleContext {
    OBRACK() { return this.getToken(VTLParser.OBRACK, 0); }
    CBRACK() { return this.getToken(VTLParser.CBRACK, 0); }
    expressions() {
        return this.tryGetRuleContext(0, ExpressionsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    }
}
exports.ListContext = ListContext;
class MapContext extends ParserRuleContext_1.ParserRuleContext {
    OBRACE() { return this.getToken(VTLParser.OBRACE, 0); }
    CBRACE() { return this.getToken(VTLParser.CBRACE, 0); }
    map_entries() {
        return this.tryGetRuleContext(0, Map_entriesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_map; }
    // @Override
    enterRule(listener) {
        if (listener.enterMap) {
            listener.enterMap(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMap) {
            listener.exitMap(this);
        }
    }
}
exports.MapContext = MapContext;
class Map_entriesContext extends ParserRuleContext_1.ParserRuleContext {
    map_entry(i) {
        if (i === undefined) {
            return this.getRuleContexts(Map_entryContext);
        }
        else {
            return this.getRuleContext(i, Map_entryContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(VTLParser.COMMA);
        }
        else {
            return this.getToken(VTLParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_map_entries; }
    // @Override
    enterRule(listener) {
        if (listener.enterMap_entries) {
            listener.enterMap_entries(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMap_entries) {
            listener.exitMap_entries(this);
        }
    }
}
exports.Map_entriesContext = Map_entriesContext;
class Map_entryContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    COLON() { return this.getToken(VTLParser.COLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_map_entry; }
    // @Override
    enterRule(listener) {
        if (listener.enterMap_entry) {
            listener.enterMap_entry(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMap_entry) {
            listener.exitMap_entry(this);
        }
    }
}
exports.Map_entryContext = Map_entryContext;
class IdContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.tryGetToken(VTLParser.ID, 0); }
    K_LT() { return this.tryGetToken(VTLParser.K_LT, 0); }
    K_LE() { return this.tryGetToken(VTLParser.K_LE, 0); }
    K_GT() { return this.tryGetToken(VTLParser.K_GT, 0); }
    K_GE() { return this.tryGetToken(VTLParser.K_GE, 0); }
    K_EQ() { return this.tryGetToken(VTLParser.K_EQ, 0); }
    K_NE() { return this.tryGetToken(VTLParser.K_NE, 0); }
    K_TRUE() { return this.tryGetToken(VTLParser.K_TRUE, 0); }
    K_FALSE() { return this.tryGetToken(VTLParser.K_FALSE, 0); }
    K_AND() { return this.tryGetToken(VTLParser.K_AND, 0); }
    K_OR() { return this.tryGetToken(VTLParser.K_OR, 0); }
    K_NOT() { return this.tryGetToken(VTLParser.K_NOT, 0); }
    K_NULL() { return this.tryGetToken(VTLParser.K_NULL, 0); }
    K_IN() { return this.tryGetToken(VTLParser.K_IN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return VTLParser.RULE_id; }
    // @Override
    enterRule(listener) {
        if (listener.enterId) {
            listener.enterId(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitId) {
            listener.exitId(this);
        }
    }
}
exports.IdContext = IdContext;
//# sourceMappingURL=VTLParser.js.map