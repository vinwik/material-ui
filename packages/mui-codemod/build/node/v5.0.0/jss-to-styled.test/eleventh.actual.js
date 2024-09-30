"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;
var React = _interopRequireWildcard(require("react"));
var _SomeNamespace = _interopRequireDefault(require("SomeNamespace"));
var _makeStyles = _interopRequireDefault(require("@material-ui/styles/makeStyles"));
var _jsxRuntime = require("react/jsx-runtime");
const useStyles = (0, _makeStyles.default)(theme => ({
  header: {
    marginLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    marginRight: 'auto',
    minWidth: 400
  },
  img: {
    marginTop: theme.spacing(4)
  }
}));
function Page() {
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SomeNamespace.default.SomeComponent, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: classes.header
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: classes.img
    })]
  });
}