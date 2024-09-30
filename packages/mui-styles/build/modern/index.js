/**
 * @mui/styles v6.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable import/export */
import { ponyfillGlobal } from '@mui/utils';

/* Warning if there are several instances of @mui/styles */
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined') {
  ponyfillGlobal['__@mui/styles-init__'] = ponyfillGlobal['__@mui/styles-init__'] || 0;
  if (ponyfillGlobal['__@mui/styles-init__'] === 1) {
    console.warn(['It looks like there are several instances of `@mui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://mui.com/r/styles-instance-warning for more info.'].join('\n'));
  }
  ponyfillGlobal['__@mui/styles-init__'] += 1;
}
export { default as createGenerateClassName } from "./createGenerateClassName/index.js";
export * from "./createGenerateClassName/index.js";
export { default as createStyles } from "./createStyles/index.js";
export * from "./createStyles/index.js";
export { default as getThemeProps } from "./getThemeProps/index.js";
export * from "./getThemeProps/index.js";
export { default as jssPreset } from "./jssPreset/index.js";
export * from "./jssPreset/index.js";
export { default as makeStyles } from "./makeStyles/index.js";
export * from "./makeStyles/index.js";
export { default as mergeClasses } from "./mergeClasses/index.js";
export * from "./mergeClasses/index.js";
export { default as ServerStyleSheets } from "./ServerStyleSheets/index.js";
export * from "./ServerStyleSheets/index.js";
export { default as styled } from "./styled/index.js";
export * from "./styled/index.js";
export { default as StylesProvider } from "./StylesProvider/index.js";
export * from "./StylesProvider/index.js";
export { default as ThemeProvider } from "./ThemeProvider/index.js";
export * from "./ThemeProvider/index.js";
export { default as useTheme } from "./useTheme/index.js";
export * from "./useTheme/index.js";
export { default as useThemeVariants } from "./useThemeVariants/index.js";
export * from "./useThemeVariants/index.js";
export { default as propsToClassKey } from "./propsToClassKey/index.js";
export * from "./propsToClassKey/index.js";
export { default as withStyles } from "./withStyles/index.js";
export * from "./withStyles/index.js";
export { default as withTheme } from "./withTheme/index.js";
export * from "./withTheme/index.js";