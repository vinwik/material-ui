"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findComponentDefaultProps;
/**
 * Find all the default props path of a given component name.
 *
 * @param {import('jscodeshift')} j
 * @param {{ root: import('jscodeshift').Collection; componentName: string }} options
 * @returns {import('jscodeshift').Collection}
 *
 */
function findComponentDefaultProps(j, options) {
  const {
    root,
    componentName
  } = options;
  const defaultPropsPathCollection = root.find(j.ObjectProperty, {
    key: {
      name: `Mui${componentName}`
    }
  }).find(j.ObjectProperty, {
    key: {
      name: 'defaultProps'
    }
  });
  return defaultPropsPathCollection;
}