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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineFeed = getLineFeed;
exports.fixBabelGeneratorIssues = fixBabelGeneratorIssues;
exports.fixLineEndings = fixLineEndings;
exports.getUnstyledFilename = getUnstyledFilename;
const os_1 = require("os");
__exportStar(require("./createTypeScriptProject"), exports);
__exportStar(require("./getPropsFromComponentNode"), exports);
function getLineFeed(source) {
    const match = source.match(/\r?\n/);
    return match === null ? os_1.EOL : match[0];
}
const fixBabelIssuesRegExp = /(?<=(\/>)|,)(\r?\n){2}/g;
function fixBabelGeneratorIssues(source) {
    return source.replace(fixBabelIssuesRegExp, '\n');
}
function fixLineEndings(source, target) {
    return target.replace(/\r?\n/g, getLineFeed(source));
}
/**
 * Converts styled or regular component d.ts file to unstyled d.ts
 * @param filename - the file of the styled or regular mui component
 */
function getUnstyledFilename(filename, definitionFile = false) {
    if (filename.includes('mui-base')) {
        return filename;
    }
    let unstyledFile = '';
    const separator = filename.includes('/') ? '/' : '\\';
    if (!filename.includes('mui-base')) {
        unstyledFile = filename
            .replace(/.d.ts$/, '')
            .replace(/.tsx?$/, '')
            .replace(/.js$/, '');
        unstyledFile = unstyledFile.replace(/Styled/g, '');
        if (separator === '/') {
            unstyledFile = unstyledFile.replace(/packages\/mui-lab|packages\/mui-material/g, 'packages/mui-base');
        }
        else {
            unstyledFile = unstyledFile.replace(/packages\\mui-lab|packages\\mui-material/g, 'packages\\mui-base');
        }
    }
    return definitionFile ? `${unstyledFile}.d.ts` : `${unstyledFile}.js`;
}
