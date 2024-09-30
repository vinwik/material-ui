"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdProvider = AdProvider;
exports.useAdConfig = useAdConfig;
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
const AdConfigContext = /*#__PURE__*/React.createContext(null);
function AdProvider(props) {
  const {
    children,
    config
  } = props;
  const value = React.useMemo(() => ({
    GADisplayRatio: 0.1,
    ...config
  }), [config]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AdConfigContext.Provider, {
    value: value,
    children: children
  });
}
function useAdConfig() {
  const config = React.useContext(AdConfigContext);
  if (!config) {
    throw new Error('Could not find docs ad config context value; please ensure the component is wrapped in a <AdProvider>');
  }
  return config;
}