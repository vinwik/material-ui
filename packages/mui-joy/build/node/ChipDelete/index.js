"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  chipDeleteClasses: true
};
Object.defineProperty(exports, "chipDeleteClasses", {
  enumerable: true,
  get: function () {
    return _chipDeleteClasses.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _ChipDelete.default;
  }
});
var _ChipDelete = _interopRequireDefault(require("./ChipDelete"));
var _chipDeleteClasses = _interopRequireWildcard(require("./chipDeleteClasses"));
Object.keys(_chipDeleteClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _chipDeleteClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _chipDeleteClasses[key];
    }
  });
});
var _ChipDeleteProps = require("./ChipDeleteProps");
Object.keys(_ChipDeleteProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ChipDeleteProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ChipDeleteProps[key];
    }
  });
});