"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _joy = require("@mui/joy");
var _TextField = _interopRequireDefault(require("@mui/joy/TextField"));
var _TextField2 = _interopRequireDefault(require("@mui/material/TextField"));
var _jsxRuntime = require("react/jsx-runtime");
// the codemod should transform only Joy TextField

/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.TextField, {
    slotProps: {
      root: {
        ['aria-hidden']: false
      },
      label: {
        ['aria-hidden']: false
      },
      input: {
        ['aria-hidden']: false
      },
      helperText: {
        ['aria-hidden']: false
      }
    },
    slots: {
      root: 'span',
      label: 'span',
      input: 'span',
      helperText: 'span'
    },
    id: "Id",
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Help!",
    name: "Name",
    type: "button",
    autoComplete: "on",
    autoFocus: true,
    error: true,
    required: true,
    fullWidth: true,
    defaultValue: "DefaultValue",
    size: "sm",
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField2.default, {})]
});