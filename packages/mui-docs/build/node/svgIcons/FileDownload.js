"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _jsxRuntime = require("react/jsx-runtime");
var _path;
function FileDownload(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgIcon.default, {
    ...props,
    children: _path || (_path = /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
    }))
  });
}
FileDownload.muiName = 'SvgIcon';
var _default = exports.default = FileDownload;