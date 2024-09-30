"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Bug = void 0;
var React = _interopRequireWildcard(require("react"));
var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));
var _jsxRuntime = require("react/jsx-runtime");
class Bug {}
exports.Bug = Bug;
const styles = {
  root: {}
};
const Test = (0, _withStyles.default)(styles)(props => {
  const {
    classes
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.root,
    children: "Anonymous"
  });
});
var _default = exports.default = Test;