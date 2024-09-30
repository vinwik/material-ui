"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyCard = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Card = _interopRequireDefault(require("@material-ui/core/Card"));
var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));
var _jsxRuntime = require("react/jsx-runtime");
const PREFIX = 'ACard';
const classes = {
  root: `${PREFIX}-root`,
  actions: `${PREFIX}-actions`,
  button: `${PREFIX}-button`
};
const StyledCard = (0, _styles.styled)(_Card.default)(function getStyles({
  theme: {
    palette,
    spacing
  }
}) {
  return {
    [`&.${classes.root}`]: {
      color: palette.primary.main
    },
    [`& .${classes.actions}`]: {
      padding: spacing(1)
    },
    [`& .${classes.button}`]: {}
  };
});
const MyCard = props => {
  const {} = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledCard, {
    className: classes.root,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardActions.default, {
      className: classes.actions,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        className: classes.button,
        children: "Submit"
      })
    })
  });
};
exports.MyCard = MyCard;