"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Modal = _interopRequireDefault(require("@mui/material/Modal"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
  slots: {
    root: ComponentsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
  slotProps: {
    root: slotsRootProps
  },
  slots: {
    root: ComponentsRoot
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
  slots: {
    root: SlotsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
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