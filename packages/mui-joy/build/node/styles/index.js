"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  THEME_ID: true,
  CssVarsProvider: true,
  useColorScheme: true,
  getInitColorSchemeScript: true,
  shouldSkipGeneratingVar: true,
  styled: true,
  ThemeProvider: true,
  useThemeProps: true,
  extendTheme: true,
  createGetCssVar: true,
  StyledEngineProvider: true
};
Object.defineProperty(exports, "CssVarsProvider", {
  enumerable: true,
  get: function () {
    return _CssVarsProvider.CssVarsProvider;
  }
});
Object.defineProperty(exports, "StyledEngineProvider", {
  enumerable: true,
  get: function () {
    return _StyledEngineProvider.default;
  }
});
Object.defineProperty(exports, "THEME_ID", {
  enumerable: true,
  get: function () {
    return _identifier.default;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return _ThemeProvider.default;
  }
});
Object.defineProperty(exports, "createGetCssVar", {
  enumerable: true,
  get: function () {
    return _extendTheme.createGetCssVar;
  }
});
Object.defineProperty(exports, "extendTheme", {
  enumerable: true,
  get: function () {
    return _extendTheme.default;
  }
});
Object.defineProperty(exports, "getInitColorSchemeScript", {
  enumerable: true,
  get: function () {
    return _CssVarsProvider.getInitColorSchemeScript;
  }
});
Object.defineProperty(exports, "shouldSkipGeneratingVar", {
  enumerable: true,
  get: function () {
    return _shouldSkipGeneratingVar.default;
  }
});
Object.defineProperty(exports, "styled", {
  enumerable: true,
  get: function () {
    return _styled.default;
  }
});
Object.defineProperty(exports, "useColorScheme", {
  enumerable: true,
  get: function () {
    return _CssVarsProvider.useColorScheme;
  }
});
Object.defineProperty(exports, "useThemeProps", {
  enumerable: true,
  get: function () {
    return _useThemeProps.default;
  }
});
var _identifier = _interopRequireDefault(require("./identifier"));
var _CssVarsProvider = require("./CssVarsProvider");
var _shouldSkipGeneratingVar = _interopRequireDefault(require("./shouldSkipGeneratingVar"));
var _styled = _interopRequireDefault(require("./styled"));
var _ThemeProvider = _interopRequireWildcard(require("./ThemeProvider"));
Object.keys(_ThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ThemeProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ThemeProvider[key];
    }
  });
});
var _useThemeProps = _interopRequireDefault(require("./useThemeProps"));
var _extendTheme = _interopRequireWildcard(require("./extendTheme"));
var _StyledEngineProvider = _interopRequireDefault(require("./StyledEngineProvider"));