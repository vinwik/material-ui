"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  modalOverflowClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _ModalOverflow.default;
  }
});
Object.defineProperty(exports, "modalOverflowClasses", {
  enumerable: true,
  get: function () {
    return _modalOverflowClasses.default;
  }
});
var _ModalOverflow = _interopRequireDefault(require("./ModalOverflow"));
var _modalOverflowClasses = _interopRequireWildcard(require("./modalOverflowClasses"));
Object.keys(_modalOverflowClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _modalOverflowClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _modalOverflowClasses[key];
    }
  });
});
var _ModalOverflowProps = require("./ModalOverflowProps");
Object.keys(_ModalOverflowProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalOverflowProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ModalOverflowProps[key];
    }
  });
});