"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentUsingStyles;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
var _InnerComponent;
/*
Test makeStyles comment
 */
const useStyles = (0, _mui.makeStyles)()((_theme, _params, classes) => ({
  test: {
    backgroundColor: "purple",
    color: "white",
    [`&.${classes.qualifier}`]: {
      textDecoration: "underline"
    },
    [`&.${classes.qualifier}.${classes.qualifier2}`]: {
      fontStyle: "italic"
    },
    [`&.${classes.qualifier2} .testStuffInBetween .${classes.qualifier}`]: {
      color: "brown"
    },
    [`&.${classes.qualifier}:hover`]: {
      backgroundColor: "red"
    },
    [`&.${classes.qualifier2}:not(:hover)`]: {
      fontWeight: 700
    }
  },
  qualifier: {},
  qualifier2: {}
}));
const useStyles2 = (0, _mui.makeStyles)()({
  test2: {
    backgroundColor: "blue",
    color: "lime"
  }
});
function InnerComponent() {
  const {
    classes
  } = useStyles2();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.test2,
    children: "Inner Test"
  });
}
function ComponentUsingStyles(props) {
  const {
    classes,
    cx
  } = useStyles(props, {
    props: props
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.test,
      children: ["Test", _InnerComponent || (_InnerComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerComponent, {}))]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: cx(classes.test, classes.qualifier),
      children: "Qualifier Test"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: cx(classes.test, classes.qualifier2),
      children: "Qualifier 2 Test"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: cx(classes.test, classes.qualifier, classes.qualifier2),
      children: "Qualifier & Qualifier 2 Test"
    })]
  });
}