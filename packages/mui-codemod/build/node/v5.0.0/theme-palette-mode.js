"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
/**
 * @param {import('jscodeshift').FileInfo} file
 */
function transformer(file) {
  return file.source.replace(/(theme\.palette|palette)\.type/gm, '$1.mode').replace(/(palette:\s*{\r?\n?\s.*)type/gm, '$1mode');
}