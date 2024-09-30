'use client';

import * as React from 'react';
import { GlobalStyles as SystemGlobalStyles } from '@mui/system';
import defaultTheme from "../styles/defaultTheme.js";
import THEME_ID from "../styles/identifier.js";
import { jsx as _jsx } from "react/jsx-runtime";
function GlobalStyles(props) {
  return /*#__PURE__*/_jsx(SystemGlobalStyles, {
    ...props,
    defaultTheme: defaultTheme,
    themeId: THEME_ID
  });
}
export default GlobalStyles;