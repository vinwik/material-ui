"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _movePropIntoSlotProps = _interopRequireDefault(require("../utils/movePropIntoSlotProps"));
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions;
  (0, _movePropIntoSlotProps.default)(j, {
    root,
    componentName: 'Avatar',
    propName: 'imgProps',
    slotName: 'img'
  });
  return root.toSource(printOptions);
}