"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _renameProps = _interopRequireDefault(require("../util/renameProps"));
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions;
  return (0, _renameProps.default)({
    root,
    componentName: 'Autocomplete',
    props: {
      getOptionSelected: 'isOptionEqualToValue'
    }
  }).toSource(printOptions);
}