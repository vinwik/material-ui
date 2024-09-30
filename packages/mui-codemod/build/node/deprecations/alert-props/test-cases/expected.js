"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
  slots: {
    closeButton: ComponentsButton
  },
  slotProps: {
    closeButton: componentsButtonProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
  slots: {
    closeIcon: SlotsIcon,
    closeButton: ComponentsButton
  },
  slotProps: {
    closeIcon: slotsIconProps,
    closeButton: componentsButtonProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
  slots: {
    closeIcon: SlotsIcon,
    closeButton: SlotsButton
  },
  slotProps: {
    closeIcon: slotsIconProps,
    closeButton: {
      ...componentsButtonProps,
      ...slotsButtonProps
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
  slots: {
    closeIcon: SlotsIcon,
    closeButton: SlotsButton
  },
  slotProps: {
    closeButton: {
      ...componentsButtonProps,
      ...slotsButtonProps
    },
    closeIcon: {
      ...componentsIconProps,
      ...slotsIconProps
    }
  }
});