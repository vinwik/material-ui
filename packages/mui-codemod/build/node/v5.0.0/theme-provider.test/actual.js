"use strict";

var _styles = require("@material-ui/core/styles");
var _jsxRuntime = require("react/jsx-runtime");
var _div;
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.MuiThemeProvider, {
    theme: (0, _styles.createTheme)(),
    children: _div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "foo"
    }))
  });
}