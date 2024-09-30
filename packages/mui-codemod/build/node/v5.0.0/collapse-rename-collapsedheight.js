"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _renameProps = _interopRequireDefault(require("../util/renameProps"));
var _renameClassKey = _interopRequireDefault(require("../util/renameClassKey"));
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions;
  (0, _renameProps.default)({
    root,
    componentName: 'Collapse',
    props: {
      collapsedHeight: 'collapsedSize'
    }
  });
  return (0, _renameClassKey.default)({
    root,
    componentName: 'Collapse',
    classes: {
      container: 'root'
    },
    printOptions
  });
}