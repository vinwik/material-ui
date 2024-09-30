"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _withWidth = _interopRequireDefault(require("@material-ui/core/withWidth"));
var _core = require("@material-ui/core");
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _jsxRuntime = require("react/jsx-runtime");
const A = (0, _withWidth.default)()(props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: props.width
  });
});
function WithWidthComponent(props) {
  const {
    width
  } = props;
  const Component = components[width] || 'span';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Typography, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
      children: `Current width: ${width}`
    })
  });
}
var _default = exports.default = (0, _core.withWidth)()(WithWidth);