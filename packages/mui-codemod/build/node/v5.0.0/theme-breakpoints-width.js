"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
/**
 * @param {import('jscodeshift').FileInfo} file
 */
function transformer(file) {
  return file.source.replace(/(theme\.breakpoints|breakpoints)\.width\(['"](.*)['"]\)/gm, '$1.values.$2');
}