"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = v6All;
var _listItemButtonProp = _interopRequireDefault(require("../list-item-button-prop/list-item-button-prop"));
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function v6All(file, api, options) {
  file.source = (0, _listItemButtonProp.default)(file, api, options);
  return file.source;
}