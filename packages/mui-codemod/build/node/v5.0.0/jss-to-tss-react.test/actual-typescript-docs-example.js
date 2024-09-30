"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@material-ui/core/styles");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
const useStyles = (0, _styles.makeStyles)(theme => ({
  parent: {
    padding: 30,
    '&:hover $child': {
      backgroundColor: 'red'
    }
  },
  small: {},
  child: {
    backgroundColor: 'blue',
    height: 50,
    '&$small': {
      backgroundColor: 'lightblue',
      height: 30
    }
  }
}));
function App() {
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.parent,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.child,
      children: "Background turns red when the mouse hovers over the parent."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.child, classes.small),
      children: "Background turns red when the mouse hovers over the parent. I am smaller than the other child."
    })]
  });
}
var _default = exports.default = App;