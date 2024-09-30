'use client';

import { useThemeProps as systemUseThemeProps } from '@mui/system';
import defaultTheme from "./defaultTheme.js";
import THEME_ID from "./identifier.js";
export default function useThemeProps({
  props,
  name
}) {
  return systemUseThemeProps({
    props,
    name,
    defaultTheme: {
      ...defaultTheme,
      components: {}
    },
    themeId: THEME_ID
  });
}