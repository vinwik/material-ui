"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _core = require("@material-ui/core");
var _ImageListItemBar = _interopRequireDefault(require("@material-ui/core/ImageListItemBar"));
var _other = _interopRequireDefault(require("./other"));
var _jsxRuntime = require("react/jsx-runtime");
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';

/*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.ImageList, {
  cellHeight: "auto",
  cols: numOfCols,
  children: [items.map(({
    text,
    href,
    Icon
  }, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.ImageListItem, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(IconLink, {
      href: href,
      text: text ?? href,
      Icon: Icon
    })
  }, i)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_other.default, {})]
});