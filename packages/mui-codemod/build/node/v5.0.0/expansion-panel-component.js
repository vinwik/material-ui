"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file) {
  return file.source.replace(/([^a-zA-Z])ExpansionPanel/gm, '$1Accordion');
}