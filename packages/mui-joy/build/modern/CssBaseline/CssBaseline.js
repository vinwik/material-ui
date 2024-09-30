'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from "../GlobalStyles/index.js";
import defaultTheme from "../styles/defaultTheme.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 *
 * Demos:
 *
 * - [CSS Baseline](https://mui.com/joy-ui/react-css-baseline/)
 *
 * API:
 *
 * - [CssBaseline API](https://mui.com/joy-ui/api/css-baseline/)
 */
function CssBaseline(props) {
  const {
    children,
    disableColorScheme = false
  } = props;
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx(GlobalStyles, {
      styles: theme => {
        const colorSchemeStyles = {};
        if (!disableColorScheme) {
          // The CssBaseline is wrapped inside a CssVarsProvider
          Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
            colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, '')] = {
              colorScheme: scheme.palette?.mode
            };
          });
        }
        const defaultTypographyLevel = theme.components?.JoyTypography?.defaultProps?.level ?? 'body-md';
        return {
          html: {
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            // Change from `box-sizing: content-box` so that `width`
            // is not affected by `padding` or `border`.
            boxSizing: 'border-box',
            // Fix font resize problem in iOS
            WebkitTextSizeAdjust: '100%'
          },
          '*, *::before, *::after': {
            boxSizing: 'inherit'
          },
          'strong, b': {
            fontWeight: theme.vars.fontWeight.lg
          },
          body: {
            margin: 0,
            // Remove the margin in all browsers.
            color: theme.vars.palette.text.primary,
            fontFamily: theme.vars.fontFamily.body,
            ...theme.typography[defaultTypographyLevel],
            backgroundColor: theme.vars.palette.background.body,
            '@media print': {
              // Save printer ink.
              backgroundColor: theme.vars.palette.common.white
            },
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            '&::backdrop': {
              backgroundColor: theme.vars.palette.background.backdrop
            }
          },
          ...colorSchemeStyles
        };
      },
      defaultTheme: defaultTheme
    }), children]
  });
}
process.env.NODE_ENV !== "production" ? CssBaseline.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: PropTypes.node,
  /**
   * Disable `color-scheme` CSS property.
   *
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  disableColorScheme: PropTypes.bool
} : void 0;
export default CssBaseline;