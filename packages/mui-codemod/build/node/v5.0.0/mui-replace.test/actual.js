"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _styles = require("@material-ui/core/styles");
var _core = require("@material-ui/core");
var _Alert = _interopRequireDefault(require("@material-ui/core/Alert"));
var _useAutocomplete = _interopRequireDefault(require("@material-ui/core/useAutocomplete"));
var _styles2 = require("@material-ui/styles");
var _createStyles = _interopRequireDefault(require("@material-ui/styles/createStyles"));
var _unstyled = require("@material-ui/unstyled");
var _SwitchUnstyled = _interopRequireDefault(require("@material-ui/unstyled/SwitchUnstyled"));
var _system = require("@material-ui/system");
var _ThemeProvider = _interopRequireDefault(require("@material-ui/system/ThemeProvider"));
var _utils = require("@material-ui/utils");
var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));
var _Mansory = _interopRequireDefault(require("@material-ui/lab/Mansory"));
var _lab = require("@material-ui/lab");
var _types = require("@material-ui/types");
var _privateTheming = require("@material-ui/private-theming");
var _pickers = require("@material-ui/pickers");
var _dataGrid = require("@material-ui/data-grid");
var _xGrid = require("@material-ui/x-grid");
var _xGridDataGenerator = require("@material-ui/x-grid-data-generator");
// material-design

// styles

// unstyled

// system

// utils

// icons

// lab

// styled engine
module.exports = override(addWebpackAlias({
  '@material-ui/styled-engine': '@material-ui/styled-engine-sc'
}));
// json
const dependencies = {
  '@material-ui/core': 'next',
  '@material-ui/lab': 'next',
  '@material-ui/styled-engine-sc': 'next',
  // whitelist packages below
  '@material-ui/data-grid': '^4.0.0-alpha.36',
  '@material-ui/x-grid': '^4.0.0-alpha.36',
  '@material-ui/x-grid-data-generator': '^4.0.0-alpha.36'
};
const tsconfig = {
  paths: {
    '@material-ui/styled-engine': ['./node_modules/@material-ui/styled-engine-sc']
  }
};

// types

// private-theming

// Pickers does not change

// DataGrid does not change