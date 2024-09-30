var _span, _span2;
import * as React from 'react';
import useClipboardCopy from "./useClipboardCopy.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function CodeCopyButton(props) {
  const {
    code,
    ...other
  } = props;
  const {
    copy,
    isCopied
  } = useClipboardCopy();
  // This component is designed to be wrapped in NoSsr
  const macOS = window.navigator.platform.toUpperCase().includes('MAC');
  const key = macOS ? '⌘' : 'Ctrl + ';
  return /*#__PURE__*/_jsx("div", {
    className: "MuiCode-copy-container",
    children: /*#__PURE__*/_jsxs("button", {
      ...other,
      "aria-label": "Copy the code",
      type: "button",
      className: "MuiCode-copy",
      onClick: async () => {
        // event.stopPropagation();
        await copy(code);
      },
      children: [isCopied ? 'Copied' : 'Copy', /*#__PURE__*/_jsxs("span", {
        className: "MuiCode-copyKeypress",
        style: {
          opacity: isCopied ? 0 : 1
        },
        children: [_span || (_span = /*#__PURE__*/_jsx("span", {
          children: "(or"
        })), " ", key, "C", _span2 || (_span2 = /*#__PURE__*/_jsx("span", {
          children: ")"
        }))]
      })]
    })
  });
}