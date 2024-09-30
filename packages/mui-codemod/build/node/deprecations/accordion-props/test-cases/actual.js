"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  TransitionComponent: CustomTransition,
  TransitionProps: {
    unmountOnExit: true
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Accordion, {
  TransitionComponent: CustomTransition,
  TransitionProps: transitionVars
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  TransitionComponent: CustomTransition,
  TransitionProps: {
    unmountOnExit: true
  },
  slots: {
    root: 'div'
  },
  slotProps: {
    root: {
      className: 'foo'
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Accordion, {
  TransitionComponent: CustomTransition,
  TransitionProps: {
    unmountOnExit: true
  },
  slots: {
    ...outerSlots
  },
  slotProps: {
    ...outerSlotProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  TransitionComponent: ComponentTransition,
  slots: {
    transition: SlotTransition
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  TransitionProps: {
    unmountOnExit: true
  },
  slotProps: {
    transition: {
      id: 'test'
    }
  }
});
// should skip non MUI components
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiAccordion, {
  TransitionComponent: CustomTransition,
  TransitionProps: {
    unmountOnExit: true
  }
});