"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _defaultTheme = _interopRequireDefault(require("../styles/defaultTheme"));
var _identifier = _interopRequireDefault(require("../styles/identifier"));
var _jsxRuntime = require("react/jsx-runtime");
function GlobalStyles(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_system.GlobalStyles, {
    ...props,
    defaultTheme: _defaultTheme.default,
    themeId: _identifier.default
  });
}
var _default = exports.default = GlobalStyles;