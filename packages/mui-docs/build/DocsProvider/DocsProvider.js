import * as React from 'react';
import { UserLanguageProvider } from "../i18n/index.js";
import { AdProvider } from "../Ad/index.js";
import { jsx as _jsx } from "react/jsx-runtime";
const DocsConfigContext = /*#__PURE__*/React.createContext(null);
export function DocsProvider({
  config,
  adConfig,
  defaultUserLanguage,
  translations,
  children
}) {
  return /*#__PURE__*/_jsx(DocsConfigContext.Provider, {
    value: config,
    children: /*#__PURE__*/_jsx(AdProvider, {
      config: adConfig,
      children: /*#__PURE__*/_jsx(UserLanguageProvider, {
        defaultUserLanguage: defaultUserLanguage,
        translations: translations,
        children: children
      })
    })
  });
}
export function useDocsConfig() {
  const config = React.useContext(DocsConfigContext);
  if (!config) {
    throw new Error('Could not find docs config context value; please ensure the component is wrapped in a <DocsProvider>');
  }
  return config;
}