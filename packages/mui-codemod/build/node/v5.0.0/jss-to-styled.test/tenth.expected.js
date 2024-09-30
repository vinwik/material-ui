"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
const PREFIX = 'tenth';
const classes = {
  header: `${PREFIX}-header`,
  img: `${PREFIX}-img`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = (0, _styles.styled)('div')(({
  theme
}) => ({
  [`& .${classes.header}`]: {
    marginLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    marginRight: 'auto',
    minWidth: 400
  },
  [`& .${classes.img}`]: {
    marginTop: theme.spacing(4)
  }
}));
function Page() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: classes.header
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: classes.img
    })]
  });
}