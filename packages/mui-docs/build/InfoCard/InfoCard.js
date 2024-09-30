import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from "../Link/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function GlowingIconContainer({
  icon
}) {
  return /*#__PURE__*/_jsx(Box, {
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
      boxShadow: `0px 0 0 2px ${alpha(theme.palette.primary[500], 0.1)}, 0px 2px 12px 0px rgba(234, 237, 241, 0.3) inset`,
      '& .MuiSvgIcon-root': {
        fontSize: theme.typography.pxToRem(18)
      },
      ...theme.applyDarkStyles({
        borderColor: alpha(theme.palette.primary[400], 0.25),
        bgcolor: alpha(theme.palette.primary[900], 0.2),
        boxShadow: `0 0 0 2px ${alpha(theme.palette.primary[600], 0.1)}, 0px 2px 12px 0px rgba(0, 0, 0, 0.25) inset`
      })
    }),
    children: icon
  });
}
export function InfoCard(props) {
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
  return /*#__PURE__*/_jsxs(Paper, {
    variant: "outlined",
    component: link ? Link : 'div',
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
        bgcolor: alpha(theme.palette.primaryDark[800], 0.25),
        background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
        borderColor: 'primaryDark.700'
      })
    }),
    ...other,
    children: [svg && svg, icon && /*#__PURE__*/_jsx(GlowingIconContainer, {
      icon: icon
    }), /*#__PURE__*/_jsx(Typography, {
      fontWeight: "semiBold",
      component: "h3",
      color: "text.primary",
      variant: "body2",
      mt: icon ? 2 : 0,
      mb: description ? 0.5 : 0,
      className: classNameTitle,
      ...titleProps,
      children: title
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "body2",
      color: "text.secondary",
      className: classNameDescription,
      children: description
    })]
  });
}