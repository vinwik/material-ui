"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
const ChipColorContext = /*#__PURE__*/React.createContext({
  disabled: undefined,
  variant: undefined,
  color: undefined
});
if (process.env.NODE_ENV !== 'production') {
  ChipColorContext.displayName = 'ChipColorContext';
}
var _default = exports.default = ChipColorContext;