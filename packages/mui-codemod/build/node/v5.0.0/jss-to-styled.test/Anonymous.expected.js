"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
const PREFIX = 'Anonymous';
const classes = {
  root: `${PREFIX}-root`
};
const Root = (0, _styles.styled)('div')({
  [`&.${classes.root}`]: {}
});
var _default = props => {
  const {} = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
    className: classes.root,
    children: "Anonymous"
  });
};
exports.default = _default;