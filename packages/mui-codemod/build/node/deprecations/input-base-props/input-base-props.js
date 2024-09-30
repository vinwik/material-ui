"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _replaceComponentsWithSlots = _interopRequireDefault(require("../utils/replaceComponentsWithSlots"));
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions;
  (0, _replaceComponentsWithSlots.default)(j, {
    root,
    componentName: 'InputBase'
  });
  return root.toSource(printOptions);
}