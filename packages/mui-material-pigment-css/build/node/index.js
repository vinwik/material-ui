/**
 * @mui/material-pigment-css v6.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _react = require("@pigment-css/react");
Object.keys(_react).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _react[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _react[key];
    }
  });
});
var _theme = require("@pigment-css/react/theme");
Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _theme[key];
    }
  });
});