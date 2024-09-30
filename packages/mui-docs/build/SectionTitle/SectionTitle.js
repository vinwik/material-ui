var _span;
import * as React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SectionTitle(props) {
  const {
    title,
    hash,
    level: Level = 'h2'
  } = props;
  return /*#__PURE__*/_jsx(Level, {
    id: hash,
    style: {
      flexGrow: 1
    },
    children: /*#__PURE__*/_jsxs("a", {
      "aria-labelledby": hash,
      className: "title-link-to-anchor",
      href: `#${hash}`,
      tabIndex: -1,
      children: [title, _span || (_span = /*#__PURE__*/_jsx("span", {
        className: "anchor-icon",
        children: /*#__PURE__*/_jsx("svg", {
          children: /*#__PURE__*/_jsx("use", {
            xlinkHref: "#anchor-link-icon"
          })
        })
      }))]
    })
  });
}