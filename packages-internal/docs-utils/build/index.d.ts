export * from './createTypeScriptProject';
export { type ComponentClassDefinition } from './ComponentClassDefinition';
export * from './getPropsFromComponentNode';
export declare function getLineFeed(source: string): string;
export declare function fixBabelGeneratorIssues(source: string): string;
export declare function fixLineEndings(source: string, target: string): string;
/**
 * Converts styled or regular component d.ts file to unstyled d.ts
 * @param filename - the file of the styled or regular mui component
 */
export declare function getUnstyledFilename(filename: string, definitionFile?: boolean): string;
