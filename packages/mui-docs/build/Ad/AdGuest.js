import * as React from 'react';
import Portal from '@mui/material/Portal';
import { AdContext } from "./AdManager.js";
import { jsx as _jsx } from "react/jsx-runtime";
function AdGuest(props) {
  const {
    classSelector = '.description',
    children
  } = props;
  const ad = React.useContext(AdContext);
  if (!ad.element) {
    return null;
  }
  return /*#__PURE__*/_jsx(Portal, {
    container: () => {
      const element = document.querySelector(classSelector);
      if (element) {
        if (ad.element === element) {
          element.classList.add('ad');
        } else {
          element.classList.remove('ad');
        }
      }
      return ad.element;
    },
    children: children
  });
}
export { AdGuest };