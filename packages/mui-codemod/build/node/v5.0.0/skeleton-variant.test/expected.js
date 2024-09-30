"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Skeleton, {
    variant: "circular"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Skeleton, {
    variant: "rectangular"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Skeleton, {
    classes: {
      circular: 'className',
      rectangular: 'className'
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
    sx: {
      '& .MuiSkeleton-circular': {
        background: 'red'
      },
      '& .MuiSkeleton-rectangular': {
        background: 'red'
      },
      '& .CustomSkeleton-circle': {
        background: 'red'
      }
    }
  })]
});