"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _MarkdownElement = require("./MarkdownElement");
Object.keys(_MarkdownElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MarkdownElement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MarkdownElement[key];
    }
  });
});