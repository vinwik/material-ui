"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
const useStyles = (0, _mui.makeStyles)({
  name: 'App'
})((theme, {
  color,
  padding
}, classes) => ({
  root: {
    padding: padding,
    [`&:hover .${classes.child}`]: {
      backgroundColor: theme.palette[color].main
    }
  },
  small: {},
  child: {
    border: '1px solid black',
    height: 50,
    [`&.${classes.small}`]: {
      height: 30
    }
  }
}));
function App({
  classes: classesProp
}) {
  const {
    classes,
    cx
  } = useStyles({
    color: 'primary',
    padding: 30
  }, {
    props: {
      classes: classesProp
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.child,
      children: "The Background take the primary theme color when the mouse hovers the parent."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: cx(classes.child, classes.small),
      children: "The Background take the primary theme color when the mouse hovers the parent. I am smaller than the other child."
    })]
  });
}
var _default = exports.default = App;