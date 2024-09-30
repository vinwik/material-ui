"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Backdrop = _interopRequireDefault(require("@mui/material/Backdrop"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.default, {
  components: {
    Root: ComponentsRoot
  },
  componentsProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Backdrop, {
  components: {
    Root: ComponentsRoot
  },
  slotProps: {
    root: slotsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.default, {
  slots: {
    root: SlotsRoot
  },
  componentsProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Backdrop, {
  slots: {
    root: SlotsRoot
  },
  components: {
    Root: ComponentsRoot
  },
  slotProps: {
    root: slotsRootProps
  },
  componentsProps: {
    root: componentsRootProps
  }
});

// should skip non MUI components
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiBackdrop, {
  components: {
    Root: ComponentsRoot
  }
});