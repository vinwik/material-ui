import * as ts from 'typescript';
import { TypeScriptProject } from './createTypeScriptProject';
export interface ParsedProp {
    /**
     * If `true`, some signatures do not contain this property.
     * e.g: `id` in `{ id: number, value: string } | { value: string }`
     */
    onlyUsedInSomeSignatures: boolean;
    signatures: {
        symbol: ts.Symbol;
        componentType: ts.Type;
    }[];
}
export interface ParsedComponent {
    name: string;
    location: ts.Node;
    type: ts.Type;
    sourceFile: ts.SourceFile | undefined;
    props: Record<string, ParsedProp>;
}
export interface GetPropsFromComponentDeclarationOptions {
    project: TypeScriptProject;
    node: ts.Node;
    /**
     * Called before a PropType is added to a component/object
     * @returns true to include the prop, false to skip it
     */
    shouldInclude?: (data: {
        name: string;
        depth: number;
    }) => boolean;
    /**
     * Control if const declarations should be checked
     * @default false
     * @example declare const Component: React.JSXElementConstructor<Props>;
     */
    checkDeclarations?: boolean;
}
export declare function getPropsFromComponentNode({ node, shouldInclude, project, checkDeclarations, }: GetPropsFromComponentDeclarationOptions): ParsedComponent | null;
