import * as React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
const AdConfigContext = /*#__PURE__*/React.createContext(null);
export function AdProvider(props) {
  const {
    children,
    config
  } = props;
  const value = React.useMemo(() => ({
    GADisplayRatio: 0.1,
    ...config
  }), [config]);
  return /*#__PURE__*/_jsx(AdConfigContext.Provider, {
    value: value,
    children: children
  });
}
export function useAdConfig() {
  const config = React.useContext(AdConfigContext);
  if (!config) {
    throw new Error('Could not find docs ad config context value; please ensure the component is wrapped in a <AdProvider>');
  }
  return config;
}