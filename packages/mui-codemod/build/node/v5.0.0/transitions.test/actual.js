"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiButtonBaseStyleOverrides = void 0;
var _transitions = _interopRequireWildcard(require("@material-ui/core/styles/transitions"));
// type A = TransitionDuration | Easing

const MuiButtonBaseStyleOverrides = exports.MuiButtonBaseStyleOverrides = {
  root: {
    '&.MuiButton-root': {
      fontFamily: '"Nunito", Avenir, sans-serif',
      boxSizing: 'border-box',
      transition: _transitions.default.create(['background-color', 'box-shadow', 'border'], {
        duration: _transitions.default.duration.short
      })
    }
  }
};