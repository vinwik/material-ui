"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  formLabelClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _FormLabel.default;
  }
});
Object.defineProperty(exports, "formLabelClasses", {
  enumerable: true,
  get: function () {
    return _formLabelClasses.default;
  }
});
var _FormLabel = _interopRequireDefault(require("./FormLabel"));
var _formLabelClasses = _interopRequireWildcard(require("./formLabelClasses"));
Object.keys(_formLabelClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _formLabelClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formLabelClasses[key];
    }
  });
});
var _FormLabelProps = require("./FormLabelProps");
Object.keys(_FormLabelProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormLabelProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FormLabelProps[key];
    }
  });
});