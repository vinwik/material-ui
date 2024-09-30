import * as React from 'react';
import SvgIcon from "../SvgIcon/index.js";

/**
 * Private module reserved for @mui packages.
 */
import { jsx as _jsx } from "react/jsx-runtime";
export default function createSvgIcon(path, displayName) {
  // @ts-ignore internal component
  function Component(props, ref) {
    return /*#__PURE__*/_jsx(SvgIcon, {
      "data-testid": `${displayName}Icon`,
      ref: ref,
      ...props,
      children: path
    });
  }
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  // @ts-ignore internal component
  Component.muiName = SvgIcon.muiName;

  // @ts-ignore internal component
  return /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(Component));
}