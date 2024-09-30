"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeScriptProjectBuilder = exports.createTypeScriptProject = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const ts = __importStar(require("typescript"));
const createTypeScriptProject = (options) => {
    const { name, rootPath, tsConfigPath: inputTsConfigPath = 'tsconfig.build.json', entryPointPath: inputEntryPointPath, files, } = options;
    const tsConfigPath = path_1.default.join(rootPath, inputTsConfigPath);
    const tsConfigFile = ts.readConfigFile(tsConfigPath, (filePath) => fs_1.default.readFileSync(filePath).toString());
    if (tsConfigFile.error) {
        throw tsConfigFile.error;
    }
    // The build config does not parse the `.d.ts` files, but we sometimes need them to get the exports.
    if (tsConfigFile.config.exclude) {
        tsConfigFile.config.exclude = tsConfigFile.config.exclude.filter((pattern) => pattern !== 'src/**/*.d.ts');
    }
    const tsConfigFileContent = ts.parseJsonConfigFileContent(tsConfigFile.config, ts.sys, path_1.default.dirname(tsConfigPath));
    if (tsConfigFileContent.errors.length > 0) {
        throw tsConfigFileContent.errors[0];
    }
    const program = ts.createProgram({
        rootNames: files ?? tsConfigFileContent.fileNames,
        options: tsConfigFileContent.options,
    });
    const checker = program.getTypeChecker();
    let exports;
    if (inputEntryPointPath) {
        const entryPointPath = path_1.default.join(rootPath, inputEntryPointPath);
        const sourceFile = program.getSourceFile(entryPointPath);
        exports = Object.fromEntries(checker.getExportsOfModule(checker.getSymbolAtLocation(sourceFile)).map((symbol) => {
            return [symbol.name, symbol];
        }));
    }
    else {
        exports = {};
    }
    return {
        name,
        rootPath,
        exports,
        program,
        checker,
    };
};
exports.createTypeScriptProject = createTypeScriptProject;
const createTypeScriptProjectBuilder = (projectsConfig) => {
    const projects = new Map();
    return (projectName, options = {}) => {
        const cachedProject = projects.get(projectName);
        if (cachedProject != null) {
            return cachedProject;
        }
        // eslint-disable-next-line no-console
        console.log(`Building new TS project: ${projectName}`);
        const project = (0, exports.createTypeScriptProject)({
            name: projectName,
            ...projectsConfig[projectName],
            ...options,
        });
        projects.set(projectName, project);
        return project;
    };
};
exports.createTypeScriptProjectBuilder = createTypeScriptProjectBuilder;
