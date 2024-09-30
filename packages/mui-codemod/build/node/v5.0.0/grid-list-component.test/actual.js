"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _core = require("@material-ui/core");
var _GridListTileBar = _interopRequireDefault(require("@material-ui/core/GridListTileBar"));
var _other = _interopRequireDefault(require("./other"));
var _jsxRuntime = require("react/jsx-runtime");
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

/*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.GridList, {
  cellHeight: "auto",
  cols: numOfCols,
  children: [items.map(({
    text,
    href,
    Icon
  }, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.GridListTile, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(IconLink, {
      href: href,
      text: text ?? href,
      Icon: Icon
    })
  }, i)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_other.default, {})]
});