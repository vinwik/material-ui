"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _jsxRuntime = require("react/jsx-runtime");
// FIXME checkout https://mui.com/components/use-media-query/#using-material-uis-breakpoint-helpers
const withMuiMobileDialog = () => WrappedComponent => props => /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, {
  ...props,
  width: "lg",
  fullScreen: false
});

// FIXME checkout https://mui.com/components/use-media-query/#using-material-uis-breakpoint-helpers
const withMobileDialog = () => WrappedComponent => props => /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, {
  ...props,
  width: "lg",
  fullScreen: false
});
const A = withMobileDialog()(props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: props.width
  });
});
function MobileDialogComponent(props) {
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
var _default = exports.default = withMuiMobileDialog()(MobileDialogComponent);