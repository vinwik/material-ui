"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = createTheme;
exports.createThemeOptions = createThemeOptions;
exports.createThemeOverrides = createThemeOverrides;
var _core = require("@material-ui/core");
function createThemeOptions() {
  return {};
}
function createThemeOverrides(theme) {
  return {};
}
function createTheme(options) {
  const themeOptions = createThemeOptions(options);
  const baseTheme = (0, _core.createTheme)(themeOptions);
  const overrides = createThemeOverrides(baseTheme);
  const theme = {
    ...baseTheme,
    overrides
  };
  return theme;
}