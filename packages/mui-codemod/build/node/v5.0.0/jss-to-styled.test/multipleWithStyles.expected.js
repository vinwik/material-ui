"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _jsxRuntime = require("react/jsx-runtime");
const PREFIX = 'Test';
const classes = {
  root: `${PREFIX}-root`,
  root2: `${PREFIX}-root2`,
  actions: `${PREFIX}-actions`,
  root3: `${PREFIX}-root3`,
  actions2: `${PREFIX}-actions2`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = (0, _styles.styled)('div')(({
  theme
}) => ({
  [`& .${classes.root}`]: {
    backgroundColor: 'red'
  },
  [`& .${classes.root2}`]: {
    backgroundColor: theme.palette.primary.main
  },
  [`& .${classes.actions}`]: {
    padding: theme.spacing(1)
  },
  [`& .${classes.root3}`]: {
    backgroundColor: 'blue'
  },
  [`& .${classes.actions2}`]: {
    padding: '0px'
  }
}));
const Button1 = _Button.default;
const Button2 = _Button.default;
const Button3 = _Button.default;
const Test = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button1, {
    classes: {
      root: classes.root
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Button2, {
    classes: {
      root: classes.root2,
      actions: classes.actions
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Button3, {
    classes: {
      root: classes.root3,
      actions: classes.actions2
    }
  })]
});
exports.Test = Test;