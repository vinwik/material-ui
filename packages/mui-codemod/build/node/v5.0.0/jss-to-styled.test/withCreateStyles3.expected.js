"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
const PREFIX = 'MyComponent';
const classes = {
  root: `${PREFIX}-root`
};
const Root = (0, _styles.styled)('div')({
  [`&.${classes.root}`]: {
    background: 'red'
  }
});
const MyComponent = props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
    ...props,
    className: classes.root
  });
};
var _default = exports.default = MyComponent;