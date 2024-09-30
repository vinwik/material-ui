"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _Typography2 = _interopRequireDefault(require("@material-ui/core/Typography"));
var _makeStyles = _interopRequireDefault(require("@material-ui/styles/makeStyles"));
var _Container = _interopRequireDefault(require("modules/components/Container"));
var _Button2 = _interopRequireDefault(require("modules/components/Button"));
var _Link = _interopRequireDefault(require("modules/components/Link"));
var _Link2 = _interopRequireDefault(require("@material-ui/core/Link"));
var _jsxRuntime = require("react/jsx-runtime");
var _Typography, _Button;
const useStyles = (0, _makeStyles.default)(theme => ({
  root: {
    height: '70vh',
    minHeight: 500,
    maxHeight: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',
    // Fix IE11 issue
    marginRight: 0,
    marginLeft: 0,
    padding: `0 ${theme.spacing(2)}`
  },
  title: {
    fontSize: 45,
    marginBottom: theme.spacing(2)
  },
  actions: {
    marginTop: theme.spacing(3)
  },
  apply: {
    marginRight: theme.spacing(2)
  }
}));
function AffiliatesHero() {
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      className: classes.container,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography2.default, {
        variant: "h1",
        align: "center",
        color: "textPrimary",
        className: classes.title,
        children: "Affiliate Program"
      }), _Typography || (_Typography = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography2.default, {
        component: "h2",
        align: "center",
        variant: "h3",
        color: "textSecondary",
        children: "Earn money by referring buyers."
      })), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classes.actions,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button2.default, {
          variant: "contained",
          component: _Link2.default,
          href: "mailto:store@mui.com",
          className: classes.apply,
          children: "Apply now"
        }), _Button || (_Button = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button2.default, {
          variant: "outlined",
          component: _Link.default,
          naked: true,
          to: "/affiliate/",
          children: "My dashboard"
        }))]
      })]
    })
  });
}
var _default = exports.default = AffiliatesHero;