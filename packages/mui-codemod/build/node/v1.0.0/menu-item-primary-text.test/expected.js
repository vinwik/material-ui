"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress');
    },
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {}),
    children: "My Progress"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress2');
    },
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {}),
    children: true ? "My Progress" : "Not progress"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress2');
    },
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {}),
    children: getText('progress')
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
    onClick: () => {
      analytics('Clicked Menu > Progress');
    },
    rightIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIcon, {}),
    children: "Already changed"
  })]
});