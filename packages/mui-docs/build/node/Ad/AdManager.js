"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdContext = void 0;
exports.AdManager = AdManager;
exports.adShape = void 0;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@mui/material/utils");
var _jsxRuntime = require("react/jsx-runtime");
const AdContext = exports.AdContext = /*#__PURE__*/React.createContext({
  placement: 'body-top',
  element: null
});

// Persisted for the whole session.
// The state is used to use different ad placements.
const randomSession = Math.random();

// Distribution profile:
// 20% body-inline
// 80% body-image
const adShape = exports.adShape = randomSession < 0.2 ? 'inline' : 'image';
function AdManager({
  classSelector = '.description',
  children
}) {
  const [portal, setPortal] = React.useState({
    placement: 'body-top',
    element: null
  });
  (0, _utils.unstable_useEnhancedEffect)(() => {
    const container = document.querySelector(classSelector);
    setPortal({
      placement: 'body-top',
      element: container
    });
  }, [classSelector]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AdContext.Provider, {
    value: portal,
    children: children
  });
}