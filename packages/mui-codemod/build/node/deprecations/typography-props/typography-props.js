"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _appendAttribute = _interopRequireDefault(require("../../util/appendAttribute"));
var _assignObject = _interopRequireDefault(require("../../util/assignObject"));
var _findComponentJSX = _interopRequireDefault(require("../../util/findComponentJSX"));
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions;
  (0, _findComponentJSX.default)(j, {
    root,
    componentName: 'Typography'
  }, elementPath => {
    const paragraphProp = elementPath.node.openingElement.attributes.find(attr => attr.type === 'JSXAttribute' && attr.name.name === 'paragraph');
    if (!paragraphProp) {
      return;
    }
    elementPath.node.openingElement.attributes = elementPath.node.openingElement.attributes.filter(attr => {
      if (attr.type === 'JSXAttribute' && attr.name.name === 'paragraph') {
        return false;
      }
      return true;
    });
    const isParagraphPropTruthy = paragraphProp.value?.expression.value !== false;
    if (!isParagraphPropTruthy) {
      return;
    }
    const sxIndex = elementPath.node.openingElement.attributes.findIndex(attr => attr.type === 'JSXAttribute' && attr.name.name === 'sx');
    if (sxIndex === -1) {
      (0, _appendAttribute.default)(j, {
        target: elementPath.node,
        attributeName: 'sx',
        expression: j.objectExpression([j.objectProperty(j.identifier('marginBottom'), j.literal('16px'))])
      });
    } else {
      const hasMarginBottom = elementPath.node.openingElement.attributes[sxIndex].value.expression.properties.some(key => key.key.name === 'marginBottom' || key.key.name === 'mb');
      if (!hasMarginBottom) {
        (0, _assignObject.default)(j, {
          target: elementPath.node.openingElement.attributes[sxIndex],
          key: 'marginBottom',
          expression: j.literal('16px')
        });
      }
    }
  });
  root.find(j.ObjectProperty, {
    key: {
      name: 'MuiTypography'
    }
  }).forEach(path => {
    const defaultPropsObject = path.value.value.properties.find(key => key.key.name === 'defaultProps');
    const paragraphProp = defaultPropsObject.value.properties.find(prop => prop.key.name === 'paragraph');
    if (!paragraphProp) {
      return;
    }
    defaultPropsObject.value.properties = defaultPropsObject.value.properties.filter(prop => !['paragraph'].includes(prop?.key?.name));
    const isParagraphPropTruthy = paragraphProp.value?.value !== false;
    if (!isParagraphPropTruthy) {
      return;
    }
    const sxIndex = defaultPropsObject.value.properties.findIndex(prop => prop.key.name === 'sx');
    if (sxIndex === -1) {
      defaultPropsObject.value.properties.push(j.objectProperty(j.identifier('sx'), j.objectExpression([j.objectProperty(j.identifier('marginBottom'), j.literal('16px'))])));
    } else {
      const hasMarginBottom = defaultPropsObject.value.properties[sxIndex].value.properties.some(key => key.key.name === 'marginBottom' || key.key.name === 'mb');
      if (!hasMarginBottom) {
        defaultPropsObject.value.properties[sxIndex].value.properties.push(j.objectProperty(j.identifier('marginBottom'), j.literal('16px')));
      }
    }
  });
  return root.toSource(printOptions);
}