"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = movePropIntoSlotProps;
var _findComponentJSX = _interopRequireDefault(require("../../util/findComponentJSX"));
var _findComponentDefaultProps = _interopRequireDefault(require("../../util/findComponentDefaultProps"));
var _assignObject = _interopRequireDefault(require("../../util/assignObject"));
var _appendAttribute = _interopRequireDefault(require("../../util/appendAttribute"));
function moveJsxPropIntoSlotProps(j, element, propName, slotName) {
  const propIndex = element.openingElement.attributes.findIndex(attr => attr.type === 'JSXAttribute' && attr.name.name === propName);
  if (propIndex !== -1) {
    const removedValue = element.openingElement.attributes.splice(propIndex, 1)[0].value.expression;
    let hasSlotProps = false;
    element.openingElement.attributes.forEach(attr => {
      if (attr.name?.name === 'slotProps') {
        hasSlotProps = true;
        const slots = attr.value.expression;
        const slotIndex = slots.properties.findIndex(prop => prop?.key?.name === slotName);
        if (slotIndex === -1) {
          (0, _assignObject.default)(j, {
            target: attr,
            key: slotName,
            expression: removedValue
          });
        } else {
          const slotPropsSlotValue = slots.properties.splice(slotIndex, 1)[0].value;
          (0, _assignObject.default)(j, {
            target: attr,
            key: slotName,
            expression: j.objectExpression([j.spreadElement(removedValue), j.spreadElement(slotPropsSlotValue)])
          });
        }
      }
    });
    if (!hasSlotProps) {
      (0, _appendAttribute.default)(j, {
        target: element,
        attributeName: 'slotProps',
        expression: j.objectExpression([j.objectProperty(j.identifier(slotName), removedValue)])
      });
    }
  }
}
function moveDefaultPropsPropIntoslotProps(j, defaultPropsPathCollection, propName, slotName) {
  defaultPropsPathCollection.find(j.ObjectProperty, {
    key: {
      name: propName
    }
  }).forEach(path => {
    const removedValue = path.value.value;
    const defaultProps = path.parent.value;
    let hasSlotProps = false;
    defaultProps.properties.forEach(property => {
      if (property.key?.name === 'slotProps') {
        hasSlotProps = true;
        const slotIndex = property.value.properties.findIndex(prop => prop?.key?.name === slotName);
        if (slotIndex === -1) {
          property.value.properties.push(j.objectProperty(j.identifier(slotName), removedValue));
        } else {
          const slotPropsSlotValue = property.value.properties.splice(slotIndex, 1)[0].value;
          property.value.properties.push(j.objectProperty(j.identifier(slotName), j.objectExpression([j.spreadElement(removedValue), j.spreadElement(slotPropsSlotValue)])));
        }
      }
    });
    if (!hasSlotProps) {
      defaultProps.properties.push(j.objectProperty(j.identifier('slotProps'), j.objectExpression([j.objectProperty(j.identifier(slotName), removedValue)])));
    }
    path.prune();
  });
}

/**
 * Moves prop into slotProps.
 * If the slotProps prop exists, it will merge the prop into the slotProps.
 * If there are duplicated values, the values will be spread.
 *
 * @param {import('jscodeshift')} j
 * @param {{ root: import('jscodeshift').Collection; componentName: string, propName: string, slotName: string }} options
 *
 * @example <Component TransitionProps={value} /> => <Component slotProps={{ transition: value }} />
 */
function movePropIntoSlotProps(j, options) {
  const {
    root,
    componentName,
    propName,
    slotName
  } = options;
  (0, _findComponentJSX.default)(j, {
    root,
    componentName
  }, elementPath => {
    moveJsxPropIntoSlotProps(j, elementPath.node, propName, slotName);
  });
  const defaultPropsPathCollection = (0, _findComponentDefaultProps.default)(j, {
    root,
    componentName
  });
  moveDefaultPropsPropIntoslotProps(j, defaultPropsPathCollection, propName, slotName);
}