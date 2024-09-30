"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readFile;
var _fs = _interopRequireDefault(require("fs"));
var _os = require("os");
function readFile(filePath) {
  const fileContents = _fs.default.readFileSync(filePath, 'utf8').toString();
  if (_os.EOL !== '\n') {
    return fileContents.replace(/\n/g, _os.EOL);
  }
  return fileContents;
}