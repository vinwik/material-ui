"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
  slots: {
    arrow: ComponentsArrow,
    popper: ComponentsPopper,
    tooltip: ComponentsTooltip,
    transition: ComponentsTransition
  },
  slotProps: {
    arrow: componentsArrowProps,
    popper: componentsPopperProps,
    tooltip: componentsTooltipProps,
    transition: componentsTransitionProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
  slots: {
    tooltip: SlotsTooltip,
    arrow: ComponentsArrow
  },
  slotProps: {
    tooltip: slotsTooltipProps,
    arrow: componentsArrowProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
  slots: {
    tooltip: SlotsTooltip,
    arrow: SlotsArrow
  },
  slotProps: {
    tooltip: slotsTooltipProps,
    arrow: {
      ...componentsArrowProps,
      ...slotsArrowProps
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
  slots: {
    tooltip: SlotsTooltip,
    arrow: SlotsArrow
  },
  slotProps: {
    arrow: {
      ...componentsArrowProps,
      ...slotsArrowProps
    },
    tooltip: {
      ...componentsTooltipProps,
      ...slotsTooltipProps
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
  slots: {
    arrow: SlotsArrow,
    popper: SlotsPopper,
    tooltip: SlotsTooltip,
    transition: SlotsTransition
  },
  slotProps: {
    arrow: {
      ...componentsArrowProps,
      ...slotsArrowProps
    },
    popper: {
      ...componentsPopperProps,
      ...slotsPopperProps
    },
    tooltip: {
      ...componentsTooltipProps,
      ...slotsTooltipProps
    },
    transition: {
      ...componentsTransitionProps,
      ...slotsTransitionProps
    }
  }
});