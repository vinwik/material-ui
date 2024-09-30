"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Slider = _interopRequireDefault(require("@mui/material/Slider"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.default, {
  slots: {
    track: ComponentsTrack
  },
  slotProps: {
    track: componentsTrackProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.default, {
  slots: {
    rail: SlotsRail,
    track: ComponentsTrack
  },
  slotProps: {
    rail: slotsRailProps,
    track: componentsTrackProps
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.default, {
  slots: {
    rail: SlotsRail,
    track: SlotsTrack
  },
  slotProps: {
    rail: slotsRailProps,
    track: {
      ...componentsTrackProps,
      ...slotsTrackProps
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.default, {
  slots: {
    rail: SlotsRail,
    track: SlotsTrack
  },
  slotProps: {
    track: {
      ...componentsTrackProps,
      ...slotsTrackProps
    },
    rail: {
      ...componentsRailProps,
      ...slotsRailProps
    }
  }
});