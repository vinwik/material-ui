"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeCopyButton = CodeCopyButton;
var React = _interopRequireWildcard(require("react"));
var _useClipboardCopy = _interopRequireDefault(require("./useClipboardCopy"));
var _jsxRuntime = require("react/jsx-runtime");
var _span, _span2;
function CodeCopyButton(props) {
  const {
    code,
    ...other
  } = props;
  const {
    copy,
    isCopied
  } = (0, _useClipboardCopy.default)();
  // This component is designed to be wrapped in NoSsr
  const macOS = window.navigator.platform.toUpperCase().includes('MAC');
  const key = macOS ? '⌘' : 'Ctrl + ';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "MuiCode-copy-container",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      ...other,
      "aria-label": "Copy the code",
      type: "button",
      className: "MuiCode-copy",
      onClick: async () => {
        // event.stopPropagation();
        await copy(code);
      },
      children: [isCopied ? 'Copied' : 'Copy', /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "MuiCode-copyKeypress",
        style: {
          opacity: isCopied ? 0 : 1
        },
        children: [_span || (_span = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "(or"
        })), " ", key, "C", _span2 || (_span2 = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: ")"
        }))]
      })]
    })
  });
}