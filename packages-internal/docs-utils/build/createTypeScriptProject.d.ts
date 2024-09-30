import * as ts from 'typescript';
export interface TypeScriptProject {
    name: string;
    rootPath: string;
    exports: Record<string, ts.Symbol>;
    program: ts.Program;
    checker: ts.TypeChecker;
}
export interface CreateTypeScriptProjectOptions {
    name: string;
    rootPath: string;
    /**
     * Config to use to build this package.
     * The path must be relative to the root path.
     * @default 'tsconfig.build.json`
     */
    tsConfigPath?: string;
    /**
     * File used as root of the package.
     * This property is used to gather the exports of the project.
     * The path must be relative to the root path.
     */
    entryPointPath?: string;
    /**
     * Files to include in the project.
     * By default, it will use the files defined in the tsconfig.
     */
    files?: string[];
}
export declare const createTypeScriptProject: (options: CreateTypeScriptProjectOptions) => TypeScriptProject;
export type TypeScriptProjectBuilder = (projectName: string, options?: {
    files?: string[];
}) => TypeScriptProject;
export declare const createTypeScriptProjectBuilder: (projectsConfig: Record<string, Omit<CreateTypeScriptProjectOptions, "name">>) => TypeScriptProjectBuilder;
