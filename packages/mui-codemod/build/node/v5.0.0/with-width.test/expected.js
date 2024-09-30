"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _jsxRuntime = require("react/jsx-runtime");
// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
const withMuiWidth = () => WrappedComponent => props => /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, {
  ...props,
  width: "xs"
});

// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
const withWidth = () => WrappedComponent => props => /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, {
  ...props,
  width: "xs"
});
const A = withWidth()(props => {
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
var _default = exports.default = withMuiWidth()(WithWidth);