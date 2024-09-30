"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  aspectRatioClasses: true
};
Object.defineProperty(exports, "aspectRatioClasses", {
  enumerable: true,
  get: function () {
    return _aspectRatioClasses.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _AspectRatio.default;
  }
});
var _AspectRatio = _interopRequireDefault(require("./AspectRatio"));
var _aspectRatioClasses = _interopRequireWildcard(require("./aspectRatioClasses"));
Object.keys(_aspectRatioClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _aspectRatioClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _aspectRatioClasses[key];
    }
  });
});
var _AspectRatioProps = require("./AspectRatioProps");
Object.keys(_AspectRatioProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AspectRatioProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AspectRatioProps[key];
    }
  });
});