"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _propsToObject = _interopRequireDefault(require("../util/propsToObject"));
const components = ['Dialog', 'Menu', 'Popover', 'Snackbar'];
const props = ['onEnter', 'onEntered', 'onEntering', 'onExit', 'onExited', 'onExiting'];

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions || {
    quote: 'single'
  };
  components.forEach(component => {
    (0, _propsToObject.default)({
      j,
      root,
      componentName: component,
      propName: 'TransitionProps',
      props
    });
  });
  return root.toSource(printOptions);
}