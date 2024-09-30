"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shouldSkipGeneratingVar;
function shouldSkipGeneratingVar(keys) {
  return !!keys[0].match(/^(colorSchemeSelector|typography|variants|breakpoints)$/) || !!keys[0].match(/sxConfig$/) ||
  // ends with sxConfig
  keys[0] === 'palette' && !!keys[1]?.match(/^(mode)$/) || keys[0] === 'focus' && keys[1] !== 'thickness';
}