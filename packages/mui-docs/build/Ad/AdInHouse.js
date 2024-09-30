import * as React from 'react';
import AdDisplay from "./AdDisplay.js";
import { jsx as _jsx } from "react/jsx-runtime";
export default function AdInHouse(props) {
  const {
    ad
  } = props;
  return /*#__PURE__*/_jsx(AdDisplay, {
    ad: {
      poweredby: 'MUI',
      label: `in-house-${ad.name}`,
      ...ad
    }
  });
}