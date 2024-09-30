"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadScript;
function loadScript(src, position) {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = src;
  if (position) {
    position.appendChild(script);
  }
  return script;
}