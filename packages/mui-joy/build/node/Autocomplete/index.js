"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createFilterOptions: true,
  autocompleteClasses: true
};
Object.defineProperty(exports, "autocompleteClasses", {
  enumerable: true,
  get: function () {
    return _autocompleteClasses.default;
  }
});
Object.defineProperty(exports, "createFilterOptions", {
  enumerable: true,
  get: function () {
    return _useAutocomplete.createFilterOptions;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Autocomplete.default;
  }
});
var _useAutocomplete = require("@mui/base/useAutocomplete");
var _Autocomplete = _interopRequireDefault(require("./Autocomplete"));
var _autocompleteClasses = _interopRequireWildcard(require("./autocompleteClasses"));
Object.keys(_autocompleteClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _autocompleteClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _autocompleteClasses[key];
    }
  });
});
var _AutocompleteProps = require("./AutocompleteProps");
Object.keys(_AutocompleteProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AutocompleteProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteProps[key];
    }
  });
});