import * as React from 'react';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material/utils';
import { jsx as _jsx } from "react/jsx-runtime";
export const AdContext = /*#__PURE__*/React.createContext({
  placement: 'body-top',
  element: null
});

// Persisted for the whole session.
// The state is used to use different ad placements.
const randomSession = Math.random();

// Distribution profile:
// 20% body-inline
// 80% body-image
export const adShape = randomSession < 0.2 ? 'inline' : 'image';
export function AdManager({
  classSelector = '.description',
  children
}) {
  const [portal, setPortal] = React.useState({
    placement: 'body-top',
    element: null
  });
  useEnhancedEffect(() => {
    const container = document.querySelector(classSelector);
    setPortal({
      placement: 'body-top',
      element: container
    });
  }, [classSelector]);
  return /*#__PURE__*/_jsx(AdContext.Provider, {
    value: portal,
    children: children
  });
}