"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Backdrop = _interopRequireDefault(require("@mui/material/Backdrop"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.default, {
  slots: {
    root: ComponentsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Backdrop, {
  slotProps: {
    root: slotsRootProps
  },
  slots: {
    root: ComponentsRoot
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.default, {
  slots: {
    root: SlotsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Backdrop, {
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

// should skip non MUI components
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiBackdrop, {
  components: {
    Root: ComponentsRoot
  }
});