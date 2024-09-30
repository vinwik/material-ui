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
  return j(file.source).findJSXElements('CircularProgress').forEach(path => {
    path.node.openingElement.attributes.forEach(node => {
      if (node.type === 'JSXAttribute' && node.name.name === 'variant' && (node.value.value === 'static' || node.value.expression?.value === 'static')) {
        node.value = j.literal('determinate');
      }
      if (node.type === 'JSXAttribute' && node.name.name === 'classes') {
        node.value?.expression?.properties?.forEach(subNode => {
          if (subNode.key.name === 'static') {
            subNode.key.name = 'determinate';
          }
        });
      }
    });
  }).toSource(printOptions);
}