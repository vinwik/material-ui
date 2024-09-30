"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextFieldComponent;
var React = _interopRequireWildcard(require("react"));
var _TextField4 = _interopRequireDefault(require("@material-ui/core/TextField"));
var _Select5 = _interopRequireDefault(require("@material-ui/core/Select"));
var _FormControl4 = _interopRequireDefault(require("@material-ui/core/FormControl"));
var _TextField5 = _interopRequireDefault(require("@mui/material/TextField"));
var _Select6 = _interopRequireDefault(require("@mui/material/Select"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
var _MuiSelect, _TextField, _TextField2, _TextField3, _Select, _Select2, _Select3, _FormControl, _FormControl2, _FormControl3, _CustomSelect, _SelectedRoute, _FromToSelect, _FromToSelectDrawer, _MuiTextField, _Select4, _MuiFormControl;
const Select2 = () => _MuiSelect || (_MuiSelect = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select6.default, {}));
function TextFieldComponent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField4.default, {
      ...props
    }), _TextField || (_TextField = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField4.default, {
      variant: "outlined"
    })), _TextField2 || (_TextField2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField4.default, {
      variant: "standard"
    })), _TextField3 || (_TextField3 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField4.default, {
      variant: "filled"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select5.default, {
      ...props
    }), _Select || (_Select = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select5.default, {
      variant: "outlined"
    })), _Select2 || (_Select2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select5.default, {
      variant: "standard"
    })), _Select3 || (_Select3 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select5.default, {
      variant: "filled"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl4.default, {
      ...props
    }), _FormControl || (_FormControl = /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl4.default, {
      variant: "outlined"
    })), _FormControl2 || (_FormControl2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl4.default, {
      variant: "standard"
    })), _FormControl3 || (_FormControl3 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl4.default, {
      variant: "filled"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(Autocomplete, {
      options: [],
      getOptionLabel: option => option.title,
      renderInput: params => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField4.default, {
        ...params,
        label: "Combo box",
        variant: "outlined"
      })
    }), _CustomSelect || (_CustomSelect = /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomSelect, {})), _SelectedRoute || (_SelectedRoute = /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectedRoute, {})), _FromToSelect || (_FromToSelect = /*#__PURE__*/(0, _jsxRuntime.jsx)(FromToSelect, {})), _FromToSelectDrawer || (_FromToSelectDrawer = /*#__PURE__*/(0, _jsxRuntime.jsx)(FromToSelectDrawer, {})), _MuiTextField || (_MuiTextField = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField5.default, {})), _Select4 || (_Select4 = /*#__PURE__*/(0, _jsxRuntime.jsx)(Select2, {})), _MuiFormControl || (_MuiFormControl = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControl, {}))]
  });
}