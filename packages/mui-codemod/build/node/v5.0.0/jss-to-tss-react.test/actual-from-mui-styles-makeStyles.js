"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentUsingStyles;
var _react = _interopRequireDefault(require("react"));
var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));
var _jsxRuntime = require("react/jsx-runtime");
var _InnerComponent;
const useStyles = (0, _makeStyles.default)({
  test: {
    backgroundColor: "purple",
    color: "white"
  }
});
const useStyles2 = (0, _makeStyles.default)({
  test: {
    backgroundColor: "purple",
    color: "white",
    "& $test2": {
      backgroundColor: "lime",
      color: "blue"
    }
  },
  test2: {
    backgroundColor: "blue",
    color: "lime"
  }
});
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