"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentUsingStyles;
var _react = _interopRequireDefault(require("react"));
var _styles = require("@material-ui/core/styles");
var _jsxRuntime = require("react/jsx-runtime");
var _InnerComponent;
/*
Sandboxes for verifying correct behavior:
JSS - https://codesandbox.io/p/sandbox/case1-jss-dedp2f?file=/src/App.js
TSS - https://codesandbox.io/p/sandbox/case1-tss-s0z7tx?file=/src/App.js
 */
const useStyles = (0, _styles.makeStyles)({
  test: {
    backgroundColor: "purple",
    color: "white"
  }
}, {
  name: "TestName"
});
const useStyles2 = (0, _styles.makeStyles)(() => ({
  test2: {
    backgroundColor: "blue",
    color: "lime"
  }
}));
function InnerComponent() {
  const classes = useStyles2();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.test2,
    children: "Inner Test"
  });
}
function ComponentUsingStyles(props) {
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.test,
    children: ["Test", _InnerComponent || (_InnerComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerComponent, {}))]
  });
}