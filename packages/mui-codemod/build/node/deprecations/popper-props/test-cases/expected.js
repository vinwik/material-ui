"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Popper = _interopRequireDefault(require("@mui/material/Popper"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Popper.default, {
  slots: {
    root: ComponentsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Popper.default, {
  slots: {
    root: SlotsRoot
  },
  slotProps: {
    root: {
      ...componentsRootProps,
      ...slotsRootProps
    }
  }
});