"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _useAutocomplete = _interopRequireDefault(require("@mui/material/useAutocomplete"));
var _styles2 = require("@mui/styles");
var _createStyles = _interopRequireDefault(require("@mui/styles/createStyles"));
var _base = require("@mui/base");
var _SwitchUnstyled = _interopRequireDefault(require("@mui/base/SwitchUnstyled"));
var _system = require("@mui/system");
var _ThemeProvider = _interopRequireDefault(require("@mui/system/ThemeProvider"));
var _utils = require("@mui/utils");
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _Mansory = _interopRequireDefault(require("@mui/lab/Mansory"));
var _lab = require("@mui/lab");
var _types = require("@mui/types");
var _privateTheming = require("@mui/private-theming");
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
  '@mui/styled-engine': '@mui/styled-engine-sc'
}));
// json
const dependencies = {
  '@mui/material': 'next',
  '@mui/lab': 'next',
  '@mui/styled-engine-sc': 'next',
  // whitelist packages below
  '@material-ui/data-grid': '^4.0.0-alpha.36',
  '@material-ui/x-grid': '^4.0.0-alpha.36',
  '@material-ui/x-grid-data-generator': '^4.0.0-alpha.36'
};
const tsconfig = {
  paths: {
    '@mui/styled-engine': ['./node_modules/@mui/styled-engine-sc']
  }
};

// types

// private-theming

// Pickers does not change

// DataGrid does not change