"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
  slotProps: {
    img: {
      onError: () => {},
      onLoad: () => {}
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
  slotProps: {
    img: {
      onError: () => {},
      onLoad: () => {}
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
  slotProps: {
    img: {
      ...{
        onLoad: () => {}
      },
      ...{
        onError: () => {}
      }
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