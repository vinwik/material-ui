"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
const ListItemButtonOrientationContext = /*#__PURE__*/React.createContext('horizontal');
if (process.env.NODE_ENV !== 'production') {
  ListItemButtonOrientationContext.displayName = 'ListItemButtonOrientationContext';
}
var _default = exports.default = ListItemButtonOrientationContext;