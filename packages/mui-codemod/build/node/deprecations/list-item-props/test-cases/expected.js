"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItem.default, {
  slots: {
    root: ComponentsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItem.default, {
  slotProps: {
    root: slotsRootProps
  },
  slots: {
    root: ComponentsRoot
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItem.default, {
  slots: {
    root: SlotsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItem.default, {
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