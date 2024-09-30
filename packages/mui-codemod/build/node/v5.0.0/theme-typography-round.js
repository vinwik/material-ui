"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
/**
 * @param {import('jscodeshift').FileInfo} file
 */
function transformer(file) {
  return file.source.replace(/(theme\.typography|typography)\.round\((.*)\)/gm, 'Math.round($2 * 1e5) / 1e5');
}