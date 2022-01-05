lexer grammar VTLLexer;

tokens {
  OPAR, CPAR, OBRACK, CBRACK, OBRACE, CBRACE, STRING, INTEGER, ID, REFERENCE, DOT, COMMA, ASSIGN, EQ, NE, AND, OR,
  K_NULL, ADD, SUB, MUL, DIV, MOD, COLON, FLOAT, RANGE, LT, LE, GT, GE, EXCL, K_LT, K_LE, K_GT, K_GE, K_EQ, K_NE,
  K_TRUE, K_FALSE, K_AND, K_OR, K_NOT, K_NULL, K_IN, IF, ELSEIF, ELSE, FOREACH, SET, END, BREAK, MACRO_ID, MACRO,
  STOP, INCLUDE, EVALUATE, PARSE, DEFINE, PIPE, NUMBER, BOOL, ESCAPESIGN, DQUOTE, SQUOTE
}

channels {
  COMMENTS
}

//-------------------------------------
//global fragments
//-------------------------------------
fragment BOOL
 : 'true'
 | 'false'
 ;

fragment STRING
 : STRING_DQ
 | STRING_SQ
 ;

fragment NUMBER
 : '[+-]' FLOAT
 | '[+-]' INTEGER
 ;

fragment FLOAT
 : DIGIT* '.' DIGIT+ EXPONENT?
 | DIGIT+ '.' {this._input.LA(1) != '.'}? EXPONENT?
 | DIGIT+ EXPONENT
 ;

fragment SPACES    : [ \t\r\n];
fragment ID        : [a-zA-Z] [a-zA-Z0-9_-]*;
fragment STRING_DQ : '"' ( ~["\r\n$] | '""' )* '"';
fragment STRING_SQ : '\'' ( ~['\r\n] | '\'\'' )* '\'';
fragment INTEGER   : DIGIT+;
fragment DIGIT     : [0-9];
fragment EXPONENT  : [eE] [+-]? DIGIT+;

//-------------------------------------
//default mode
//-------------------------------------
ESCAPED_CHAR
 : '\\' .
 ;

START_DIRECTIVE
 : '#' -> skip, pushMode(DIR_)
 ;

DOLLAR
 : '$' -> pushMode(PRE_REF_)
 ;

TEXT
 : .
 ;

ESCAPED_BLOCK
 : '[[' .*? ']]#' -> popMode
 ;

SNGLE_LINE_COMMENT
 : '##' ~[\r\n]* ('\n' | '\r\n' | EOF) -> channel(COMMENTS)
 ;

BLOCK_COMMENT
 : '#*' .*? '*#' -> channel(COMMENTS)
 ;

//Pre-reference mode
mode PRE_REF_;

PRE_REF_EXCL
 : '!' -> type(EXCL)
 ;

PRE_REF_ESCAPE
 : '\\' * -> type(ESCAPESIGN) 
 ;

PRE_REF_OBRACE
 : '{' -> type(OBRACE), mode(POST_REF_), pushMode(REF_)
 ;

PRE_REF_EMPTY
 : SPACES -> skip, mode(REF_)
 ;

// Reference modes
mode REF_;
REF_ID
 : ID -> type(ID), mode(REF2_)
 ;

mode REF2_;
REF2_OPAR
 : '(' -> type(OPAR), mode(REF3_), pushMode(CODE_)
 ;

REF2_EMPTY
 : SPACES * -> skip, mode(REF3_)
 ;

mode REF3_;
REF3_DOT
 : '.' -> type(DOT), mode(REF_)
 ;

REF3_OBRACK
 : '[' -> type(OBRACK), pushMode(CODE_)
 ;

REF3_EMPTY
 : SPACES * -> skip, popMode
 ;

//Post-reference mode
mode POST_REF_;

POST_REF_CBRACE
 : '}' -> type(CBRACE), popMode
 ;

POST_REF_PIPE
 : '|' -> type(PIPE), pushMode(LITERAL_)
 ;

mode LITERAL_;
LITERAL_NUMBER
  : NUMBER -> type(NUMBER)
  ;

LITERAL_BOOL
 : BOOL -> type(BOOL)
 ;

LITERAL_STRING
 : STRING -> type(STRING)
 ;

LITERAL_EMPTY
 : SPACES * -> skip, popMode;

// Directive mode
mode DIR_;

DIR_SET
 : ( 'set' | '{set}' ) SPACES? '(' -> type(SET), popMode, pushMode(CODE_)
 ;

DIR_FOREACH
 : ( 'foreach' | '{foreach}' ) SPACES? '(' -> type(FOREACH), popMode, pushMode(CODE_)
 ;

DIR_IF
 : ( 'if' | '{if}' ) SPACES? '(' -> type(IF), popMode, pushMode(CODE_)
 ;

DIR_ELSEIF
 : ( 'elseif' | '{elseif}' ) SPACES? '(' -> type(ELSEIF), popMode, pushMode(CODE_)
 ;

DIR_ELSE
 : ( 'else' | '{else}' ) -> type(ELSE), popMode
 ;

DIR_INCLUDE
 : ( 'include' | '{include}' ) SPACES? '(' -> type(INCLUDE), popMode, pushMode(CODE_)
 ;

DIR_PARSE
 : ( 'parse' | '{parse}' ) SPACES? '(' -> type(PARSE), popMode, pushMode(CODE_)
 ;

DIR_EVALUATE
 : ( 'evaluate' | '{evaluate}' ) SPACES? '(' -> type(EVALUATE), popMode, pushMode(CODE_)
 ;

DIR_DEFINE
 : ( 'define' | '{define}' ) SPACES? '(' -> type(DEFINE), popMode, pushMode(CODE_)
 ;

DIR_STOP
 : ( 'stop' | '{stop}' ) -> type(STOP), popMode
 ;

DIR_BREAK
 : ( 'break' | '{break}' ) -> type(BREAK), popMode
 ;

DIR_END
 : ( 'end' | '{end}' ) -> type(END), popMode
 ;

DIR_MACRO
 : ( 'macro' | '{macro}' ) SPACES? '(' -> type(MACRO), popMode, pushMode(CODE_)
 ;

DIR_MACRO_CALL
 : '@' ID SPACES? '(' -> type(MACRO_ID), popMode, pushMode(CODE_)
 ;

DIR_CUSTOM_CODE
 : ID SPACES? '(' -> type(ID), popMode, pushMode(CODE_)
 ;

DIR_CUSTOM
 : ID -> type(ID), popMode
 ;

// Code mode
mode CODE_;

CODE_K_LT
 : 'lt' -> type(K_LT)
 ;

CODE_K_LE
 : 'le' -> type(K_LE)
 ;

CODE_K_GT
 : 'gt' -> type(K_GT)
 ;

CODE_K_GE
 : 'ge' -> type(K_GE)
 ;

CODE_K_EQ
 : 'eq' -> type(K_EQ)
 ;

CODE_K_NE
 : 'ne' -> type(K_NE)
 ;

CODE_K_TRUE
 : 'true' -> type(K_TRUE)
 ;

CODE_K_FALSE
 : 'false' -> type(K_FALSE)
 ;

CODE_K_AND
 : 'and' -> type(K_AND)
 ;

CODE_K_OR
 : 'or' -> type(K_OR)
 ;

CODE_K_NOT
 : 'not' -> type(K_NOT)
 ;

CODE_K_NULL
 : 'null' -> type(K_NULL)
 ;

CODE_K_IN
 : 'in' -> type(K_IN)
 ;

CODE_ID
 : ID -> type(ID)
 ;

CODE_ADD
 : '+' -> type(ADD)
 ;

CODE_SUB
 : '-' -> type(SUB)
 ;

CODE_MUL
 : '*' -> type(MUL)
 ;

CODE_DIV
 : '/' -> type(DIV)
 ;

CODE_MOD
 : '%' -> type(MOD)
 ;

CODE_EXCL
 : '!' -> type(EXCL)
 ;

CODE_OR
 : '||' -> type(OR)
 ;

CODE_AND
 : '&&' -> type(AND)
 ;

CODE_ASSIGN
 : '=' -> type(ASSIGN)
 ;

CODE_EQ
 : '==' -> type(EQ)
 ;

CODE_NEQ
 : '!=' -> type(NE)
 ;

CODE_LT
 : '<' -> type(LT)
 ;

CODE_LE
 : '<=' -> type(LE)
 ;

CODE_GT
 : '>' -> type(GT)
 ;

CODE_GE
 : '>=' -> type(GE)
 ;

CODE_SPACES
 : SPACES -> skip
 ;

CODE_REFERENCE
 : '$' -> type(REFERENCE), pushMode(PRE_REF_)
 ;

CODE_OPAR
 : '(' -> type(OPAR), pushMode(CODE_)
 ;

CODE_CPAR
 : ')' -> type(CPAR), popMode
 ;

CODE_COLON
 : ':' -> type(COLON)
 ;

CODE_RANGE
 : '..' -> type(RANGE)
 ;

CODE_DOT
 : '.' -> type(DOT)
 ;

CODE_FLOAT
 : FLOAT -> type(FLOAT)
 ;

CODE_INTEGER
 : INTEGER -> type(INTEGER)
 ;

CODE_ODQUOTE
 : STRING -> type(STRING)
 ;

CODE_DQUOTE
  : '"' -> pushMode(STR_)
  ;

CODE_STRING
  : STRING_SQ
  ;

CODE_OBRACK
 : '[' -> type(OBRACK), pushMode(CODE_)
 ;

CODE_CBRACK
 : ']' -> type(CBRACK), popMode
 ;

CODE_OBRACE
 : '{' -> type(OBRACE), pushMode(CODE_)
 ;

CODE_CBRACE
 : '}' -> type(CBRACE), popMode
 ;

CODE_COMMA
 : ',' -> type(COMMA)
 ;

mode STR_;
STR_TEXT
 : ~[\\$"]+
 ;

STR_ESCAPED_CHAR
 : ESCAPED_CHAR
 ;

STR_DQUOTE
 : '"' -> type(DQUOTE), popMode
 ;

STR_REF
 : '$' -> type(REFERENCE), pushMode(PRE_REF_)
 ;

