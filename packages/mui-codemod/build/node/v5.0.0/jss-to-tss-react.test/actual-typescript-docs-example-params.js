"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _styles = require("@material-ui/core/styles");
var _jsxRuntime = require("react/jsx-runtime");
const useStyles = (0, _styles.makeStyles)(theme => (0, _styles.createStyles)({
  root: ({
    color,
    padding
  }) => ({
    padding: padding,
    '&:hover $child': {
      backgroundColor: theme.palette[color].main
    }
  }),
  small: {},
  child: {
    border: '1px solid black',
    height: 50,
    '&$small': {
      height: 30
    }
  }
}), {
  name: 'App'
});
function App({
  classes: classesProp
}) {
  const classes = useStyles({
    color: 'primary',
    padding: 30,
    classes: classesProp
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.child,
      children: "The Background take the primary theme color when the mouse hovers the parent."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.child, classes.small),
      children: "The Background take the primary theme color when the mouse hovers the parent. I am smaller than the other child."
    })]
  });
}
var _default = exports.default = App;