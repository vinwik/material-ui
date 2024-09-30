"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
const NestedListContext = /*#__PURE__*/React.createContext(false);
if (process.env.NODE_ENV !== 'production') {
  NestedListContext.displayName = 'NestedListContext';
}
var _default = exports.default = NestedListContext;