"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress');
    },
    primaryText: "My Progress",
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {})
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress2');
    },
    primaryText: true ? "My Progress" : "Not progress",
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {})
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress2');
    },
    primaryText: getText('progress'),
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {})
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress');
    },
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {}),
    children: "Already changed"
  })]
});