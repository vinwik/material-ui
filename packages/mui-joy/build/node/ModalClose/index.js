"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  modalCloseClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _ModalClose.default;
  }
});
Object.defineProperty(exports, "modalCloseClasses", {
  enumerable: true,
  get: function () {
    return _modalCloseClasses.default;
  }
});
var _ModalClose = _interopRequireDefault(require("./ModalClose"));
var _modalCloseClasses = _interopRequireWildcard(require("./modalCloseClasses"));
Object.keys(_modalCloseClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _modalCloseClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _modalCloseClasses[key];
    }
  });
});
var _ModalCloseProps = require("./ModalCloseProps");
Object.keys(_ModalCloseProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalCloseProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ModalCloseProps[key];
    }
  });
});