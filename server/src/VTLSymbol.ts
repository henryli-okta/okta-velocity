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
	Variable,
	Property_Method,
	Macro
}

export interface VTLToken {
	range: Range,
	symbol: VTLSymbol
}