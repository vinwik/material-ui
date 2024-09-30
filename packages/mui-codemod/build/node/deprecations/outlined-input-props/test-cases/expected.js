"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _OutlinedInput = _interopRequireDefault(require("@mui/material/OutlinedInput"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_OutlinedInput.default, {
  slots: {
    input: ComponentsInput
  },
  slotProps: {
    input: componentsInputProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_OutlinedInput.default, {
  slots: {
    root: SlotsRoot,
    input: ComponentsInput
  },
  slotProps: {
    root: slotsRootProps,
    input: componentsInputProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_OutlinedInput.default, {
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
/*#__PURE__*/(0, _jsxRuntime.jsx)(_OutlinedInput.default, {
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