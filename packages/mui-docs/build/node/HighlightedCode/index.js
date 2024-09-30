"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _HighlightedCode = require("./HighlightedCode");
Object.keys(_HighlightedCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HighlightedCode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HighlightedCode[key];
    }
  });
});