"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentUsingStyles;
var _react = _interopRequireDefault(require("react"));
var _core = require("@material-ui/core");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
var _InnerComponent;
/*
Test makeStyles comment
 */
/*
clsx comment that will not be preserved since the import is being removed (not just replaced)
and is not at the beginning of the file.
 */
const useStyles = (0, _core.makeStyles)(() => ({
  test: {
    backgroundColor: "purple",
    color: "white",
    "&$qualifier": {
      textDecoration: "underline"
    },
    "&$qualifier$qualifier2": {
      fontStyle: "italic"
    },
    "&$qualifier2 .testStuffInBetween $qualifier": {
      color: "brown"
    },
    "&$qualifier:hover": {
      backgroundColor: "red"
    },
    "&$qualifier2:not(:hover)": {
      fontWeight: 700
    }
  },
  qualifier: {},
  qualifier2: {}
}));
const useStyles2 = (0, _core.makeStyles)({
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
  const classes = useStyles(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.test,
      children: ["Test", _InnerComponent || (_InnerComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerComponent, {}))]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.test, classes.qualifier),
      children: "Qualifier Test"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.test, classes.qualifier2),
      children: "Qualifier 2 Test"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.test, classes.qualifier, classes.qualifier2),
      children: "Qualifier & Qualifier 2 Test"
    })]
  });
}