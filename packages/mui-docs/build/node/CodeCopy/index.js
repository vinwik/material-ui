"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useClipboardCopy: true
};
Object.defineProperty(exports, "useClipboardCopy", {
  enumerable: true,
  get: function () {
    return _useClipboardCopy.default;
  }
});
var _CodeCopy = require("./CodeCopy");
Object.keys(_CodeCopy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CodeCopy[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CodeCopy[key];
    }
  });
});
var _CodeCopyButton = require("./CodeCopyButton");
Object.keys(_CodeCopyButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CodeCopyButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CodeCopyButton[key];
    }
  });
});
var _useClipboardCopy = _interopRequireDefault(require("./useClipboardCopy"));