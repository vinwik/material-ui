"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  cardCoverClasses: true
};
Object.defineProperty(exports, "cardCoverClasses", {
  enumerable: true,
  get: function () {
    return _cardCoverClasses.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _CardCover.default;
  }
});
var _CardCover = _interopRequireDefault(require("./CardCover"));
var _cardCoverClasses = _interopRequireWildcard(require("./cardCoverClasses"));
Object.keys(_cardCoverClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _cardCoverClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cardCoverClasses[key];
    }
  });
});
var _CardCoverProps = require("./CardCoverProps");
Object.keys(_CardCoverProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CardCoverProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CardCoverProps[key];
    }
  });
});