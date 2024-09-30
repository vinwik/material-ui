"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdInHouse;
var React = _interopRequireWildcard(require("react"));
var _AdDisplay = _interopRequireDefault(require("./AdDisplay"));
var _jsxRuntime = require("react/jsx-runtime");
function AdInHouse(props) {
  const {
    ad
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdDisplay.default, {
    ad: {
      poweredby: 'MUI',
      label: `in-house-${ad.name}`,
      ...ad
    }
  });
}