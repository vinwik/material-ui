"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _HighlightedCodeWithTabs.HighlightedCodeWithTabs;
  }
});
var _HighlightedCodeWithTabs = require("./HighlightedCodeWithTabs");
Object.keys(_HighlightedCodeWithTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _HighlightedCodeWithTabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HighlightedCodeWithTabs[key];
    }
  });
});