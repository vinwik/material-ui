"use strict";

var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
  slots: {
    root: ComponentsRoot
  },
  slotProps: {
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
  slots: {
    badge: SlotsBadge,
    root: ComponentsRoot
  },
  slotProps: {
    badge: slotsBadgeProps,
    root: componentsRootProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
  slots: {
    root: SlotsRoot,
    badge: SlotsBadge
  },
  slotProps: {
    badge: slotsBadgeProps,
    root: {
      ...componentsRootProps,
      ...slotsRootProps
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
  slots: {
    root: SlotsRoot,
    badge: SlotsBadge
  },
  slotProps: {
    root: {
      ...componentsRootProps,
      ...slotsRootProps
    },
    badge: {
      ...componentsBadgeProps,
      ...slotsBadgeProps
    }
  }
});