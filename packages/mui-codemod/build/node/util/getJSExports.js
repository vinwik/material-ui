"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fs = require("fs");
var _core = require("@babel/core");
var _traverse = _interopRequireDefault(require("@babel/traverse"));
var _memoize = _interopRequireDefault(require("./memoize"));
const getJSExports = (0, _memoize.default)(file => {
  const result = new Set();
  const ast = (0, _core.parseSync)((0, _fs.readFileSync)(file, 'utf8'), {
    filename: file
  });
  (0, _traverse.default)(ast, {
    ExportSpecifier: ({
      node: {
        exported
      }
    }) => {
      result.add(exported.name);
    }
  });
  return result;
});
var _default = exports.default = getJSExports;