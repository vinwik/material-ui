"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsProvider = DocsProvider;
exports.useDocsConfig = useDocsConfig;
var React = _interopRequireWildcard(require("react"));
var _i18n = require("../i18n");
var _Ad = require("../Ad");
var _jsxRuntime = require("react/jsx-runtime");
const DocsConfigContext = /*#__PURE__*/React.createContext(null);
function DocsProvider({
  config,
  adConfig,
  defaultUserLanguage,
  translations,
  children
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DocsConfigContext.Provider, {
    value: config,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ad.AdProvider, {
      config: adConfig,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.UserLanguageProvider, {
        defaultUserLanguage: defaultUserLanguage,
        translations: translations,
        children: children
      })
    })
  });
}
function useDocsConfig() {
  const config = React.useContext(DocsConfigContext);
  if (!config) {
    throw new Error('Could not find docs config context value; please ensure the component is wrapped in a <DocsProvider>');
  }
  return config;
}