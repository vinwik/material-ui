"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _SomeNamespace = _interopRequireDefault(require("SomeNamespace"));
var _jsxRuntime = require("react/jsx-runtime");
const PREFIX = 'eleventh';
const classes = {
  header: `${PREFIX}-header`,
  img: `${PREFIX}-img`
};
const StyledSomeNamespaceSomeComponent = (0, _styles.styled)(_SomeNamespace.default.SomeComponent)(({
  theme
}) => ({
  [`& .${classes.header}`]: {
    marginLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    marginRight: 'auto',
    minWidth: 400
  },
  [`& .${classes.img}`]: {
    marginTop: theme.spacing(4)
  }
}));
function Page() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledSomeNamespaceSomeComponent, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: classes.header
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: classes.img
    })]
  });
}