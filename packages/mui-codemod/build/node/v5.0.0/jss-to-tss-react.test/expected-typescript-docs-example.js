"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _mui = require("tss-react/mui");
var _jsxRuntime = require("react/jsx-runtime");
const useStyles = (0, _mui.makeStyles)()((theme, _params, classes) => ({
  parent: {
    padding: 30,
    [`&:hover .${classes.child}`]: {
      backgroundColor: 'red'
    }
  },
  small: {},
  child: {
    backgroundColor: 'blue',
    height: 50,
    [`&.${classes.small}`]: {
      backgroundColor: 'lightblue',
      height: 30
    }
  }
}));
function App() {
  const {
    classes,
    cx
  } = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.parent,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.child,
      children: "Background turns red when the mouse hovers over the parent."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: cx(classes.child, classes.small),
      children: "Background turns red when the mouse hovers over the parent. I am smaller than the other child."
    })]
  });
}
var _default = exports.default = App;