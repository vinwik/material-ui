"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
const SizeTabsContext = /*#__PURE__*/React.createContext('md');
if (process.env.NODE_ENV !== 'production') {
  SizeTabsContext.displayName = 'SizeTabsContext';
}
var _default = exports.default = SizeTabsContext;