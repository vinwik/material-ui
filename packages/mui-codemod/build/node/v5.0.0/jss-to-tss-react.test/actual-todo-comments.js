"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExportedStyles = exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var React = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _jsxRuntime = require("react/jsx-runtime");
var _InnerComponent;
/*
Comments to be preserved when clsx import is removed. These comments should come before
any comments that they get combined with.
 */
/*
Comments that should not be lost when the clsx import comments are preserved.
 */
const useStyles = (0, _core.makeStyles)(() => ({
  test: {
    backgroundColor: "purple",
    color: "white",
    "&$qualifier": {
      textDecoration: props => props.textDecoration
    }
  },
  qualifier: {}
}));
const useExportedStyles = exports.useExportedStyles = (0, _core.makeStyles)({
  test: {
    backgroundColor: "purple",
    color: "white"
  }
});
const useStyles2 = (0, _core.makeStyles)({
  test2: props => ({
    backgroundColor: "blue",
    color: "lime"
  })
});
const useStyles3 = (0, _core.makeStyles)({
  test3: props => {
    return {
      backgroundColor: "blue",
      color: "lime"
    };
  }
});
const useGlobalStyles = (0, _core.makeStyles)(() => ({
  '@global': {
    '.sample': {
      backgroundColor: "purple",
      color: "white"
    }
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
  const classes = useStyles(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes.test,
      children: ["Test", _InnerComponent || (_InnerComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerComponent, {}))]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.test, classes.qualifier),
      children: "Qualifier Test"
    })]
  });
}
var _default = exports.default = useStyles3;