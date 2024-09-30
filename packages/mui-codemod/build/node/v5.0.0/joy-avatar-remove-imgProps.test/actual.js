"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _joy = require("@mui/joy");
var _Avatar = _interopRequireDefault(require("@mui/joy/Avatar"));
var _Avatar2 = _interopRequireDefault(require("@mui/material/Avatar"));
var _jsxRuntime = require("react/jsx-runtime");
// the codemod should transform only Joy UI `Avatar`;

/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.Avatar, {
    imgProps: {
      ['aria-hidden']: true
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
    slotProps: {
      root: {
        ['aria-hidden']: false
      },
      img: {
        ['aria-label']: 'imgSlot'
      }
    },
    imgProps: {
      ['aria-hidden']: true
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar2.default, {
    imgProps: {
      ['aria-hidden']: true
    }
  })]
});