"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;
var React = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _withStyles = _interopRequireDefault(require("@mui/styles/withStyles"));
var _jsxRuntime = require("react/jsx-runtime");
var _React$Fragment;
const Button1 = (0, _withStyles.default)({
  root: {
    backgroundColor: 'red'
  }
})(_Button.default);
const Button2 = (0, _withStyles.default)(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main
  },
  actions: {
    padding: theme.spacing(1)
  }
}))(_Button.default);
const Button3 = (0, _withStyles.default)({
  root: {
    backgroundColor: 'blue'
  },
  actions: {
    padding: '0px'
  }
})(_Button.default);
const Test = () => _React$Fragment || (_React$Fragment = /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button1, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Button2, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Button3, {})]
}));
exports.Test = Test;