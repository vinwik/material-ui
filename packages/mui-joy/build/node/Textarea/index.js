"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  textareaClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Textarea.default;
  }
});
Object.defineProperty(exports, "textareaClasses", {
  enumerable: true,
  get: function () {
    return _textareaClasses.default;
  }
});
var _Textarea = _interopRequireDefault(require("./Textarea"));
var _TextareaProps = require("./TextareaProps");
Object.keys(_TextareaProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TextareaProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextareaProps[key];
    }
  });
});
var _textareaClasses = _interopRequireWildcard(require("./textareaClasses"));
Object.keys(_textareaClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _textareaClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _textareaClasses[key];
    }
  });
});