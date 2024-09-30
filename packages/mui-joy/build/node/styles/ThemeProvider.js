"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThemeProvider;
exports.useTheme = void 0;
var React = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _defaultTheme = _interopRequireDefault(require("./defaultTheme"));
var _extendTheme = _interopRequireDefault(require("./extendTheme"));
var _identifier = _interopRequireDefault(require("./identifier"));
var _jsxRuntime = require("react/jsx-runtime");
const useTheme = () => {
  const theme = (0, _system.useTheme)(_defaultTheme.default);
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  // @ts-ignore internal logic
  return theme[_identifier.default] || theme;
};
exports.useTheme = useTheme;
function ThemeProvider({
  children,
  theme: themeInput
}) {
  let theme = _defaultTheme.default;
  if (themeInput) {
    theme = (0, _extendTheme.default)(_identifier.default in themeInput ? themeInput[_identifier.default] : themeInput);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_system.ThemeProvider, {
    theme: theme,
    themeId: themeInput && _identifier.default in themeInput ? _identifier.default : undefined,
    children: children
  });
}