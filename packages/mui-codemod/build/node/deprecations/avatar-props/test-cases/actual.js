"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
  imgProps: {
    onError: () => {},
    onLoad: () => {}
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
  imgProps: {
    onError: () => {},
    onLoad: () => {}
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
  imgProps: {
    onLoad: () => {}
  },
  slotProps: {
    img: {
      onError: () => {}
    }
  }
});

// should skip non MUI components
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiAvatar, {
  imgProps: {
    onError: () => {},
    onLoad: () => {}
  }
});