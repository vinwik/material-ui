"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _joy = require("@mui/joy");
var _Card = _interopRequireDefault(require("@mui/joy/Card"));
var _RadioGroup = _interopRequireDefault(require("@mui/joy/RadioGroup"));
var _Custom = _interopRequireDefault(require("components/Custom"));
var _jsxRuntime = require("react/jsx-runtime");
// the codemod should transform only Joy UI components;

/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
    orientation: "horizontal"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.List, {
    orientation: "horizontal"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioGroup.default, {
    orientation: "horizontal"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Custom.default, {
    row: true
  })]
});