"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _SpeedDial = _interopRequireDefault(require("@mui/material/SpeedDial"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_SpeedDial.default, {
  TransitionComponent: CustomTransition,
  TransitionProps: CustomTransitionProps
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.SpeedDial, {
  TransitionComponent: CustomTransition,
  TransitionProps: CustomTransitionProps
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_SpeedDial.default, {
  TransitionComponent: CustomTransition,
  TransitionProps: CustomTransitionProps,
  slots: {
    root: 'div'
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.SpeedDial, {
  TransitionComponent: CustomTransition,
  TransitionProps: CustomTransitionProps,
  slots: {
    ...outerSlots
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_SpeedDial.default, {
  TransitionComponent: ComponentTransition,
  TransitionProps: CustomTransitionProps,
  slots: {
    root: 'div',
    transition: SlotTransition
  }
});
// should skip non MUI components
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiSpeedDial, {
  TransitionComponent: CustomTransition,
  TransitionProps: CustomTransitionProps
});