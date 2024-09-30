"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = SectionTitle;
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _span;
function SectionTitle(props) {
  const {
    title,
    hash,
    level: Level = 'h2'
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Level, {
    id: hash,
    style: {
      flexGrow: 1
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
      "aria-labelledby": hash,
      className: "title-link-to-anchor",
      href: `#${hash}`,
      tabIndex: -1,
      children: [title, _span || (_span = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "anchor-icon",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("use", {
            xlinkHref: "#anchor-link-icon"
          })
        })
      }))]
    })
  });
}