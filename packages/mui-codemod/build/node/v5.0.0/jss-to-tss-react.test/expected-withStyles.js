"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = _interopRequireDefault(require("react"));
var _mui = require("tss-react/mui");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
var _StyledComp, _Fragment2;
const styles1 = {
  test: {
    backgroundColor: "purple",
    color: "white"
  }
};
function Comp1({
  classes
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes.test,
    children: "Comp1"
  });
}
const StyledComp1 = (0, _mui.withStyles)(Comp1, styles1);
const styles2 = (_theme, _params, classes) => ({
  test: {
    backgroundColor: "black",
    color: "lime"
  },
  test2: {
    backgroundColor: "white",
    color: "purple",
    [`&.${classes.test}`]: {
      backgroundColor: "pink",
      color: "blue"
    }
  }
});
function Comp2({
  classes
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.test,
      children: "Comp2 test"
    }), _StyledComp || (_StyledComp = /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledComp1, {})), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.test2,
      children: "Comp2 test2"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.test, classes.test2),
      children: "Comp2 test and test2"
    })]
  });
}
const StyledComp2 = (0, _mui.withStyles)(Comp2, styles2);
function Comp3({
  classes
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes.test,
    children: ["Inline Styles", /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.test2,
      children: "Nested Inline Styles"
    })]
  });
}
const StyledComp3a = (0, _mui.withStyles)(Comp3, {
  test: {
    backgroundColor: "yellow"
  }
});
const StyledComp3b = (0, _mui.withStyles)(Comp3, (_theme, _params, classes) => ({
  test: {
    backgroundColor: "yellow",
    color: "lime",
    [`& .${classes.test2}`]: {
      backgroundColor: "orange"
    }
  },
  test2: {}
}));
const styles3c = (theme, _params, classes) => {
  const bgColor1 = theme.palette.primary.main;
  const color1 = theme.palette.primary.contrastText;
  const bgColor2 = theme.palette.secondary.main;
  const color2 = theme.palette.secondary.contrastText;
  return {
    test: {
      backgroundColor: bgColor1,
      color: color1,
      [`& .${classes.test2}`]: {
        backgroundColor: bgColor2,
        color: color2
      }
    },
    test2: {}
  };
};
const StyledComp3c = (0, _mui.withStyles)(Comp3, styles3c);
function App() {
  return _Fragment2 || (_Fragment2 = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(StyledComp2, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledComp3a, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledComp3b, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledComp3c, {})]
  }));
}