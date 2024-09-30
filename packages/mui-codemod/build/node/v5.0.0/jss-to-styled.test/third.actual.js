"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyCard = void 0;
var React = _interopRequireWildcard(require("react"));
var _withStyles = _interopRequireDefault(require("@material-ui/styles/withStyles"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Card = _interopRequireDefault(require("@material-ui/core/Card"));
var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));
var _jsxRuntime = require("react/jsx-runtime");
const getStyles = theme => {
  return {
    root: {},
    actions: {},
    button: {}
  };
};
const MyCard = exports.MyCard = (0, _withStyles.default)(getStyles)(props => {
  const {
    classes
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
    className: classes.root,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardActions.default, {
      className: classes.actions,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        className: classes.button,
        children: "Submit"
      })
    })
  });
});