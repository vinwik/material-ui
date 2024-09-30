"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@material-ui/core/styles");
var _contexts = require("./contexts");
var _pages = _interopRequireDefault(require("./pages"));
var _jsxRuntime = require("react/jsx-runtime");
var _OtherProvider;
const App = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.ThemeProvider, {
    theme: (0, _styles.createTheme)(),
    children: _OtherProvider || (_OtherProvider = /*#__PURE__*/(0, _jsxRuntime.jsx)(_contexts.OtherProvider, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_pages.default, {})
    }))
  });
};
var _default = exports.default = App;