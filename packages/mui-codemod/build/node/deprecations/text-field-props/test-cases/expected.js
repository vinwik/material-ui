"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
  slotProps: {
    input: CustomInputProps,
    htmlInput: CustomHtmlInputProps,
    select: CustomSelectProps,
    inputLabel: CustomInputLabelProps,
    formHelperText: CustomFormHelperProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
  slotProps: {
    input: CustomInputProps,
    htmlInput: CustomHtmlInputProps,
    select: CustomSelectProps,
    inputLabel: CustomInputLabelProps,
    formHelperText: CustomFormHelperProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiTextField, {
  InputProps: CustomInputProps,
  inputProps: CustomHtmlInputProps,
  SelectProps: CustomSelectProps,
  InputLabelProps: CustomInputLabelProps,
  FormHelperTextProps: CustomFormHelperProps
});