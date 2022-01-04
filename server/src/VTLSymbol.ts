import {
	Range
} from 'vscode-languageserver';

export interface VTLSymbol {
	name: string,
	type: VTLType,
	argList: string[],
	ranges: Range[]	
}

export enum VTLType {
	Symbol,
	Property,
	Method,
	Macro
}

export interface VTLToken {
	range: Range,
	symbol: VTLSymbol
}