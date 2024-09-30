"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  modalDialogClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _ModalDialog.default;
  }
});
Object.defineProperty(exports, "modalDialogClasses", {
  enumerable: true,
  get: function () {
    return _modalDialogClasses.default;
  }
});
var _ModalDialog = _interopRequireDefault(require("./ModalDialog"));
var _modalDialogClasses = _interopRequireWildcard(require("./modalDialogClasses"));
Object.keys(_modalDialogClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _modalDialogClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _modalDialogClasses[key];
    }
  });
});
var _ModalDialogProps = require("./ModalDialogProps");
Object.keys(_ModalDialogProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalDialogProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ModalDialogProps[key];
    }
  });
});