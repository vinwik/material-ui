"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _material = require("@mui/material");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _jsxRuntime = require("react/jsx-runtime");
var _Link;
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
  typography: "body1"
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
  color: "palette.main",
  sx: {
    display: 'block'
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
  container: true,
  flexDirection: `column`
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid2, {
  container: true,
  flexDirection: `column`
});
const sx = {
  display: 'flex'
};
const ml = 2;
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  variant: "body1",
  color: "primary.main",
  ml: ml,
  sx: sx
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  variant: "body1",
  color: "divider",
  ml: ml,
  sx: sx
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  variant: "body1",
  color: "inherit",
  ml: ml,
  sx: sx
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  fontSize: "xl4",
  lineHeight: 1,
  startDecorator: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
    fontSize: "lg",
    textColor: "text.secondary",
    children: "$"
  }),
  sx: {
    alignItems: 'flex-start'
  },
  children: "25"
});
function Copyright(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
    variant: "body2",
    color: "text.secondary",
    align: "center",
    ...props,
    children: ['Copyright © ', _Link || (_Link = /*#__PURE__*/(0, _jsxRuntime.jsx)(Link, {
      color: "inherit",
      href: "https://mui.com/",
      children: "Your Website"
    })), ' ', new Date().getFullYear(), '.']
  });
}
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Stack.default, {
  flex: "1",
  sx: [...(Array.isArray(sx) ? sx : [sx])]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
  typography: "body1",
  sx: foo.bar ? {
    opacity: 0
  } : sx
});