"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
var _Grid2 = _interopRequireDefault(require("@mui/material/Grid"));
var _Grid3 = _interopRequireDefault(require("@mui/system/Grid"));
var _Grid4 = _interopRequireDefault(require("@mui/joy/Grid"));
var _material = require("@mui/material");
var _system = require("@mui/system");
var _joy = require("@mui/joy");
var _jsxRuntime = require("react/jsx-runtime");
// Transforms on all the possible imports
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  size: 2
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid3.default, {
  size: 2
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid4.default, {
  size: 2
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid2, {
  size: 2
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_system.Grid, {
  size: 2
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.Grid, {
  size: 2
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {});

// Transforms responsive sizes
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  size: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10
  }
});

// Transforms all the possible size values
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  size: {
    xs: "grow",
    sm: "auto",
    md: 2,
    lg: "grow",
    xl: false
  }
});

// Doesn't add jsx object expression for single string values
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  size: "auto"
});

// Transforms offset
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  offset: 2
});

// Transforms responsive offset
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  offset: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10
  }
});

// Transforms all the possible offset values
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  offset: {
    xs: 2,
    sm: "auto"
  }
});

// Transforms spread props
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
  size: {
    xs: 2,
    sm: 4
  },
  offset: {
    xs: 0,
    sm: 2
  }
});

// Doesn't transform Grid v1
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid2.default, {
  xs: 2
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
  xs: 2
});