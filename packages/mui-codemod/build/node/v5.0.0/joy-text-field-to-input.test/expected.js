"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _joy = require("@mui/joy");
var _Input = _interopRequireDefault(require("@mui/joy/Input"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _jsxRuntime = require("react/jsx-runtime");
// the codemod should transform only Joy TextField

/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(FormControl, {
    "aria-hidden": false,
    component: 'span',
    id: "Id",
    required: true,
    size: "sm",
    color: "primary",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(FormLabel, {
      "aria-hidden": false,
      component: 'span',
      id: "Id-label",
      children: "Label"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.Input, {
      "aria-hidden": false,
      component: 'span',
      placeholder: "Placeholder",
      name: "Name",
      type: "button",
      autoComplete: "on",
      autoFocus: true,
      error: true,
      fullWidth: true,
      defaultValue: "DefaultValue",
      variant: "outlined"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(FormHelperText, {
      "aria-hidden": false,
      component: 'span',
      id: "Id-helper-text",
      children: "Help!"
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {})]
});