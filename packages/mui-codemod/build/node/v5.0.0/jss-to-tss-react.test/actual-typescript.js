"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MergeClassesNoParams = MergeClassesNoParams;
exports.default = ComponentUsingStyles;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@material-ui/core/styles");
var _jsxRuntime = require("react/jsx-runtime");
/*
Sandboxes for verifying correct behavior:
JSS - https://codesandbox.io/p/sandbox/typescript-case-bt065c?file=/demo.tsx
TSS - https://codesandbox.io/p/sandbox/typescript-case-7jwpms?file=/demo.tsx
 */const useStyles = (0, _styles.makeStyles)(theme => (0, _styles.createStyles)({
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
}));
function MergeClassesNoParams({
  classes: classesProp
}) {
  const classes = useStyles({
    classes: classesProp
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.test,
    children: "Test useStyles without params but with classes prop"
  });
}
function InnerComponent({
  classes
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.test2,
    children: "Inner Test2"
  });
}
function ComponentUsingStyles() {
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.test,
      children: ["Test", /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerComponent, {
        classes: classes
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.test2,
      children: "Outer Test2"
    })]
  });
}