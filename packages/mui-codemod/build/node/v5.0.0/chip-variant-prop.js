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
  return j(file.source).findJSXElements('Chip').forEach(path => {
    const attributes = path.node.openingElement.attributes;
    attributes.forEach((node, index) => {
      if (node.type === 'JSXAttribute' && node.name.name === 'variant' && (node.value.value === 'default' || node.value.expression?.value === 'default')) {
        delete attributes[index];
      }
    });
  }).toSource(printOptions);
}