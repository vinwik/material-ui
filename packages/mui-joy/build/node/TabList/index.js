"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  tabListClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _TabList.default;
  }
});
Object.defineProperty(exports, "tabListClasses", {
  enumerable: true,
  get: function () {
    return _tabListClasses.default;
  }
});
var _TabList = _interopRequireDefault(require("./TabList"));
var _tabListClasses = _interopRequireWildcard(require("./tabListClasses"));
Object.keys(_tabListClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabListClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabListClasses[key];
    }
  });
});
var _TabListProps = require("./TabListProps");
Object.keys(_TabListProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabListProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabListProps[key];
    }
  });
});