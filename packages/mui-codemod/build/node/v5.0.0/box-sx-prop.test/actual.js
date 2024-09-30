"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BoxComponent;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@material-ui/core/Box"));
var _Button2 = _interopRequireDefault(require("@material-ui/core/Button"));
var _jsxRuntime = require("react/jsx-runtime");
var _Button;
function BoxComponent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    border: "1px dashed grey",
    p: [2, 3, 4],
    sx: {
      m: 2
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      component: "span",
      clone: true,
      p: {
        xs: 2,
        sm: 3,
        md: 4
      },
      m: 2,
      border: "1px dashed grey",
      children: _Button || (_Button = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button2.default, {
        component: "span",
        children: "Save"
      }))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      p: [1, 2, 4],
      ...props
    })]
  });
}