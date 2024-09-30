"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentUsingStyles;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
// Comment on first node where the first node will be removed and we should preserve this comment.

function mixins() {
  return {
    test: {
      backgroundColor: "purple",
      color: "white"
    }
  };
}
function cssProps() {
  return {
    paddingLeft: "8px"
  };
}
const useStyles = (0, _mui.makeStyles)()(theme => {
  return mixins();
});
const useStyles2 = (0, _mui.makeStyles)()(theme => ({
  ...mixins(),
  test2: {
    color: "red",
    ...cssProps()
  }
}));
function ComponentUsingStyles(props) {
  const {
    classes,
    cx
  } = useStyles();
  const {
    classes: classes2
  } = useStyles2();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: cx(classes.test, classes2.test2),
    children: "Test"
  });
}