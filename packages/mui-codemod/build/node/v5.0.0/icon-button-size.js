"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const printOptions = options.printOptions;
  return j(file.source).findJSXElements('IconButton').forEach(path => {
    const hasSizeAttribute = path.node.openingElement.attributes.some(node => {
      return node.type === 'JSXAttribute' && node.name.name === 'size';
    });
    if (!hasSizeAttribute) {
      path.node.openingElement.attributes.push(j.jsxAttribute(j.jsxIdentifier('size'), j.literal('large')));
    }
  }).toSource(printOptions);
}