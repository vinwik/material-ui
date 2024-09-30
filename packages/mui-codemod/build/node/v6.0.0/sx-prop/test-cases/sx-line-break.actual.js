"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EnableColorOnDarkAppBar;
var React = _interopRequireWildcard(require("react"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
var _MenuIcon;
function appBarLabel(label) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toolbar.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
      edge: "start",
      color: "inherit",
      "aria-label": "menu",
      sx: {
        mr: 2
      },
      children: _MenuIcon || (_MenuIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu.default, {}))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h6",
      noWrap: true,
      component: "div",
      sx: {
        flexGrow: 1
      },
      children: label
    })]
  });
}
const darkTheme = (0, _styles.createTheme)({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }
  }
});
function EnableColorOnDarkAppBar() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Stack.default, {
    spacing: 2,
    sx: {
      flexGrow: 1
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.ThemeProvider, {
      theme: darkTheme,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.default, {
        position: "static",
        color: "primary",
        enableColorOnDark: true,
        children: appBarLabel('enableColorOnDark')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.default, {
        position: "static",
        color: "primary",
        children: appBarLabel('default')
      })]
    })
  });
}