"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  slots: {
    transition: CustomTransition
  },
  slotProps: {
    transition: {
      unmountOnExit: true
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Accordion, {
  slots: {
    transition: CustomTransition
  },
  slotProps: {
    transition: transitionVars
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  slots: {
    root: 'div',
    transition: CustomTransition
  },
  slotProps: {
    root: {
      className: 'foo'
    },
    transition: {
      unmountOnExit: true
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Accordion, {
  slots: {
    ...outerSlots,
    transition: CustomTransition
  },
  slotProps: {
    ...outerSlotProps,
    transition: {
      unmountOnExit: true
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  slots: {
    transition: SlotTransition
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, {
  slotProps: {
    transition: {
      ...{
        unmountOnExit: true
      },
      ...{
        id: 'test'
      }
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