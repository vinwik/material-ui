"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Input = _interopRequireDefault(require("@mui/material/Input"));
var _Input2 = _interopRequireDefault(require("@mui/base/Input"));
var _Switch = _interopRequireDefault(require("@mui/base/Switch"));
var _Badge = _interopRequireDefault(require("@mui/base/Badge"));
var _jsxRuntime = require("react/jsx-runtime");
// @ts-nocheck

/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
  component: CustomRoot
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input2.default, {
  component: CustomRoot
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input2.default, {
  component: CustomRoot,
  ...others
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
  component: CustomRoot,
  randomProp: "1",
  randomProp2: "2",
  randomProp3: "3",
  slotProps: {
    root: {
      className: 'root'
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
  slots: {
    badge: CustomBadge
  },
  component: CustomRoot,
  randomProp: "1",
  randomProp2: "2",
  randomProp3: "3",
  slotProps: {
    badge: {
      className: 'badge'
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input2.default, {
  component: "a",
  href: "url"
});