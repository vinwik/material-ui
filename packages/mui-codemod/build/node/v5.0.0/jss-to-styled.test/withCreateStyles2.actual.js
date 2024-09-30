"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createStyles = _interopRequireDefault(require("@material-ui/styles/createStyles"));
var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));
var _jsxRuntime = require("react/jsx-runtime");
const styles = (0, _createStyles.default)({
  root: {
    background: 'red'
  }
});
const MyComponent = props => {
  const {
    classes
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...props,
    className: classes.root
  });
};
var _default = exports.default = (0, _withStyles.default)(styles)(MyComponent);