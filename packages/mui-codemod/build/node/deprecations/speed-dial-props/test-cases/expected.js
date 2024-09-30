"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _SpeedDial = _interopRequireDefault(require("@mui/material/SpeedDial"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_SpeedDial.default, {
  slots: {
    transition: CustomTransition
  },
  slotProps: {
    transition: CustomTransitionProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.SpeedDial, {
  slots: {
    transition: CustomTransition
  },
  slotProps: {
    transition: CustomTransitionProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_SpeedDial.default, {
  slots: {
    root: 'div',
    transition: CustomTransition
  },
  slotProps: {
    transition: CustomTransitionProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.SpeedDial, {
  slots: {
    ...outerSlots,
    transition: CustomTransition
  },
  slotProps: {
    transition: CustomTransitionProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_SpeedDial.default, {
  slots: {
    root: 'div',
    transition: SlotTransition
  },
  slotProps: {
    transition: CustomTransitionProps
  }
});
// should skip non MUI components
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiSpeedDial, {
  TransitionComponent: CustomTransition,
  TransitionProps: CustomTransitionProps
});