import * as React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { brandingDarkTheme, brandingLightTheme } from "./brandingTheme.js";
import { jsx as _jsx } from "react/jsx-runtime";
export function BrandingProvider(props) {
  const {
    children,
    mode: modeProp
  } = props;
  const upperTheme = useTheme();
  const mode = modeProp || upperTheme.palette.mode;
  const theme = mode === 'dark' ? brandingDarkTheme : brandingLightTheme;
  return /*#__PURE__*/_jsx(ThemeProvider, {
    theme: modeProp ? () => theme : theme,
    children: children
  });
}