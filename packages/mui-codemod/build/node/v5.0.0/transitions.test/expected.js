"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiButtonBaseStyleOverrides = void 0;
var _createTransitions = _interopRequireWildcard(require("@material-ui/core/styles/createTransitions"));
const transitions = (0, _createTransitions.default)({});

// type A = TransitionDuration | Easing

const MuiButtonBaseStyleOverrides = exports.MuiButtonBaseStyleOverrides = {
  root: {
    '&.MuiButton-root': {
      fontFamily: '"Nunito", Avenir, sans-serif',
      boxSizing: 'border-box',
      transition: transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: transitions.duration.short
      })
    }
  }
};