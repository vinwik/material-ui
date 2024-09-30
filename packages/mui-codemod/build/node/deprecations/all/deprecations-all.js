"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecationsAll;
var _accordionSummaryClasses = _interopRequireDefault(require("../accordion-summary-classes"));
var _alertClasses = _interopRequireDefault(require("../alert-classes"));
var _avatarGroupProps = _interopRequireDefault(require("../avatar-group-props"));
var _autocompleteProps = _interopRequireDefault(require("../autocomplete-props"));
var _backdropProps = _interopRequireDefault(require("../backdrop-props"));
var _buttonClasses = _interopRequireDefault(require("../button-classes"));
var _buttonGroupClasses = _interopRequireDefault(require("../button-group-classes"));
var _chipClasses = _interopRequireDefault(require("../chip-classes"));
var _circularProgressClasses = _interopRequireDefault(require("../circular-progress-classes"));
var _dividerProps = _interopRequireDefault(require("../divider-props"));
var _filledInputProps = _interopRequireDefault(require("../filled-input-props"));
var _formControlLabelProps = _interopRequireDefault(require("../form-control-label-props"));
var _imageListItemBarClasses = _interopRequireDefault(require("../image-list-item-bar-classes"));
var _inputBaseProps = _interopRequireDefault(require("../input-base-props"));
var _inputProps = _interopRequireDefault(require("../input-props"));
var _modalProps = _interopRequireDefault(require("../modal-props"));
var _outlinedInputProps = _interopRequireDefault(require("../outlined-input-props"));
var _paginationItemClasses = _interopRequireDefault(require("../pagination-item-classes"));
var _tableSortLabelClasses = _interopRequireDefault(require("../table-sort-label-classes"));
var _stepConnectorClasses = _interopRequireDefault(require("../step-connector-classes"));
var _stepLabelProps = _interopRequireDefault(require("../step-label-props"));
var _textFieldProps = _interopRequireDefault(require("../text-field-props"));
var _tabClasses = _interopRequireDefault(require("../tab-classes"));
var _toggleButtonGroupClasses = _interopRequireDefault(require("../toggle-button-group-classes"));
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function deprecationsAll(file, api, options) {
  file.source = (0, _accordionSummaryClasses.default)(file, api, options);
  file.source = (0, _alertClasses.default)(file, api, options);
  file.source = (0, _avatarGroupProps.default)(file, api, options);
  file.source = (0, _autocompleteProps.default)(file, api, options);
  file.source = (0, _backdropProps.default)(file, api, options);
  file.source = (0, _buttonClasses.default)(file, api, options);
  file.source = (0, _buttonGroupClasses.default)(file, api, options);
  file.source = (0, _chipClasses.default)(file, api, options);
  file.source = (0, _circularProgressClasses.default)(file, api, options);
  file.source = (0, _dividerProps.default)(file, api, options);
  file.source = (0, _filledInputProps.default)(file, api, options);
  file.source = (0, _formControlLabelProps.default)(file, api, options);
  file.source = (0, _imageListItemBarClasses.default)(file, api, options);
  file.source = (0, _inputBaseProps.default)(file, api, options);
  file.source = (0, _inputProps.default)(file, api, options);
  file.source = (0, _modalProps.default)(file, api, options);
  file.source = (0, _outlinedInputProps.default)(file, api, options);
  file.source = (0, _paginationItemClasses.default)(file, api, options);
  file.source = (0, _stepConnectorClasses.default)(file, api, options);
  file.source = (0, _stepLabelProps.default)(file, api, options);
  file.source = (0, _tableSortLabelClasses.default)(file, api, options);
  file.source = (0, _textFieldProps.default)(file, api, options);
  file.source = (0, _tabClasses.default)(file, api, options);
  file.source = (0, _toggleButtonGroupClasses.default)(file, api, options);
  return file.source;
}