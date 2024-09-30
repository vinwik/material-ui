"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandingProvider = BrandingProvider;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _brandingTheme = require("./brandingTheme");
var _jsxRuntime = require("react/jsx-runtime");
function BrandingProvider(props) {
  const {
    children,
    mode: modeProp
  } = props;
  const upperTheme = (0, _styles.useTheme)();
  const mode = modeProp || upperTheme.palette.mode;
  const theme = mode === 'dark' ? _brandingTheme.brandingDarkTheme : _brandingTheme.brandingLightTheme;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.ThemeProvider, {
    theme: modeProp ? () => theme : theme,
    children: children
  });
}