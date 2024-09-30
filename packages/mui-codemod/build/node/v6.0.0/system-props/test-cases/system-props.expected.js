"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _material = require("@mui/material");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _jsxRuntime = require("react/jsx-runtime");
var _Link;
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
  sx: {
    typography: "body1"
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
  sx: {
    color: "palette.main",
    display: 'block'
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
  container: true,
  sx: {
    flexDirection: `column`
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid2, {
  container: true,
  sx: {
    flexDirection: `column`
  }
});
const sx = {
  display: 'flex'
};
const ml = 2;
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  variant: "body1",
  sx: [{
    color: "primary.main",
    ml: ml
  }, ...(Array.isArray(sx) ? sx : [sx])]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  variant: "body1",
  sx: [{
    color: "divider",
    ml: ml
  }, ...(Array.isArray(sx) ? sx : [sx])]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  variant: "body1",
  color: "inherit",
  sx: [{
    ml: ml
  }, ...(Array.isArray(sx) ? sx : [sx])]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
  startDecorator: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
    textColor: "text.secondary",
    sx: {
      fontSize: "lg"
    },
    children: "$"
  }),
  sx: {
    fontSize: "xl4",
    lineHeight: 1,
    alignItems: 'flex-start'
  },
  children: "25"
});
function Copyright(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
    variant: "body2",
    align: "center",
    ...props,
    sx: [{
      color: "text.secondary"
    }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])],
    children: ['Copyright © ', _Link || (_Link = /*#__PURE__*/(0, _jsxRuntime.jsx)(Link, {
      color: "inherit",
      href: "https://mui.com/",
      children: "Your Website"
    })), ' ', new Date().getFullYear(), '.']
  });
}
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Stack.default, {
  sx: [{
    flex: "1"
  }, ...(Array.isArray(sx) ? sx : [sx])]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
  sx: [{
    typography: "body1"
  }, foo.bar ? {
    opacity: 0
  } : sx]
});