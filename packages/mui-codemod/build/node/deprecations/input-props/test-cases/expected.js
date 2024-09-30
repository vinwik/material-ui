"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Input = _interopRequireDefault(require("@mui/material/Input"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
  slots: {
    input: ComponentsInput
  },
  slotProps: {
    input: componentsInputProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
  slots: {
    root: SlotsRoot,
    input: ComponentsInput
  },
  slotProps: {
    root: slotsRootProps,
    input: componentsInputProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
  slots: {
    root: SlotsRoot,
    input: SlotsInput
  },
  slotProps: {
    root: slotsRootProps,
    input: {
      ...componentsInputProps,
      ...slotsInputProps
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
  slots: {
    root: SlotsRoot,
    input: SlotsInput
  },
  slotProps: {
    input: {
      ...componentsInputProps,
      ...slotsInputProps
    },
    root: {
      ...componentsRootProps,
      ...slotsRootProps
    }
  }
});