"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Skeleton, {
    variant: "circle"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Skeleton, {
    variant: "rect"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Skeleton, {
    classes: {
      circle: 'className',
      rect: 'className'
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
    sx: {
      '& .MuiSkeleton-circle': {
        background: 'red'
      },
      '& .MuiSkeleton-rect': {
        background: 'red'
      },
      '& .CustomSkeleton-circle': {
        background: 'red'
      }
    }
  })]
});