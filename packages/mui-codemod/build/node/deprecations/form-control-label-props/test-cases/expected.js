"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
  slotProps: {
    typography: componentsTypographyProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
  slots: {
    typography: SlotsTypography
  },
  slotProps: {
    typography: {
      ...componentsTypographyProps,
      ...slotsTypographyProps
    }
  }
});