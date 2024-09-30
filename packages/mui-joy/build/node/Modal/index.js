"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  modalClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "modalClasses", {
  enumerable: true,
  get: function () {
    return _modalClasses.default;
  }
});
var _Modal = _interopRequireDefault(require("./Modal"));
var _modalClasses = _interopRequireWildcard(require("./modalClasses"));
Object.keys(_modalClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _modalClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _modalClasses[key];
    }
  });
});
var _ModalProps = require("./ModalProps");
Object.keys(_ModalProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ModalProps[key];
    }
  });
});