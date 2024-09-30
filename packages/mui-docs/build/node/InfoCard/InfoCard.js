"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlowingIconContainer = GlowingIconContainer;
exports.InfoCard = InfoCard;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Link = require("../Link");
var _jsxRuntime = require("react/jsx-runtime");
function GlowingIconContainer({
  icon
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: theme => ({
      width: 36,
      height: 36,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'primary.200',
      bgcolor: 'primary.50',
      boxShadow: `0px 0 0 2px ${(0, _styles.alpha)(theme.palette.primary[500], 0.1)}, 0px 2px 12px 0px rgba(234, 237, 241, 0.3) inset`,
      '& .MuiSvgIcon-root': {
        fontSize: theme.typography.pxToRem(18)
      },
      ...theme.applyDarkStyles({
        borderColor: (0, _styles.alpha)(theme.palette.primary[400], 0.25),
        bgcolor: (0, _styles.alpha)(theme.palette.primary[900], 0.2),
        boxShadow: `0 0 0 2px ${(0, _styles.alpha)(theme.palette.primary[600], 0.1)}, 0px 2px 12px 0px rgba(0, 0, 0, 0.25) inset`
      })
    }),
    children: icon
  });
}
function InfoCard(props) {
  const {
    classNameDescription,
    classNameTitle,
    description,
    icon,
    link,
    svg,
    title,
    titleProps,
    ...other
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Paper.default, {
    variant: "outlined",
    component: link ? _Link.Link : 'div',
    href: link,
    ...(link ? {
      noLinkStyle: true,
      // Fix overloading with prefetch={false}, only prefetch on hover.
      prefetch: false
    } : {}),
    sx: theme => ({
      p: 2.5,
      height: '100%',
      background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
      ...theme.applyDarkStyles({
        bgcolor: (0, _styles.alpha)(theme.palette.primaryDark[800], 0.25),
        background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
        borderColor: 'primaryDark.700'
      })
    }),
    ...other,
    children: [svg && svg, icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(GlowingIconContainer, {
      icon: icon
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      fontWeight: "semiBold",
      component: "h3",
      color: "text.primary",
      variant: "body2",
      mt: icon ? 2 : 0,
      mb: description ? 0.5 : 0,
      className: classNameTitle,
      ...titleProps,
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "body2",
      color: "text.secondary",
      className: classNameDescription,
      children: description
    })]
  });
}