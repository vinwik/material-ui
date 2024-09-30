'use client';

// do not remove the following import (https://github.com/microsoft/TypeScript/issues/29808#issuecomment-1320713018)
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
import { unstable_createCssVarsProvider as createCssVarsProvider } from '@mui/system';
import defaultTheme from "./defaultTheme.js";
import THEME_ID from "./identifier.js";
import { defaultConfig } from "../InitColorSchemeScript/InitColorSchemeScript.js";
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: deprecatedGetInitColorSchemeScript
} = createCssVarsProvider({
  themeId: THEME_ID,
  theme: defaultTheme,
  attribute: defaultConfig.attribute,
  modeStorageKey: defaultConfig.modeStorageKey,
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  }
});
let warnedInitScriptOnce = false;
const getInitColorSchemeScript = params => {
  if (!warnedInitScriptOnce) {
    console.warn(['MUI: The getInitColorSchemeScript function has been deprecated.', '', "You should use `import InitColorSchemeScript from '@mui/joy/InitColorSchemeScript'`", 'and replace the function call with `<InitColorSchemeScript />` instead.'].join('\n'));
    warnedInitScriptOnce = true;
  }
  return deprecatedGetInitColorSchemeScript(params);
};
export { CssVarsProvider, useColorScheme, getInitColorSchemeScript };