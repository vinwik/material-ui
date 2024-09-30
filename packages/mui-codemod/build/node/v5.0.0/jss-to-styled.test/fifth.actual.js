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
var _jsxRuntime = require("react/jsx-runtime");
var _Typography, _Button;
const useStyles = (0, _makeStyles.default)(theme => {
  const color = theme.palette.primary.main;
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      color,
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(18),
        paddingBottom: theme.spacing(18)
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
      padding: theme.spacing(0, 2)
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
  };
});
function SellHero() {
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
        children: "Sell themes"
      }), _Typography || (_Typography = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography2.default, {
        component: "h2",
        align: "center",
        variant: "h3",
        color: "textSecondary",
        children: 'Build your React themes business on the official MUI Store.'
      })), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: classes.actions,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button2.default, {
          variant: "contained",
          component: _Link.default,
          naked: true,
          to: "https://support.mui.com/hc/en-us/articles/360008775380-How-do-I-apply-to-be-a-contributor-",
          target: "_blank",
          rel: "noopener",
          className: classes.apply,
          children: "Apply now"
        }), _Button || (_Button = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button2.default, {
          variant: "outlined",
          component: _Link.default,
          naked: true,
          to: "/contributor/",
          children: "My dashboard"
        }))]
      })]
    })
  });
}
var _default = exports.default = SellHero;