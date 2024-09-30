"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdGuest = AdGuest;
var React = _interopRequireWildcard(require("react"));
var _Portal = _interopRequireDefault(require("@mui/material/Portal"));
var _AdManager = require("./AdManager");
var _jsxRuntime = require("react/jsx-runtime");
function AdGuest(props) {
  const {
    classSelector = '.description',
    children
  } = props;
  const ad = React.useContext(_AdManager.AdContext);
  if (!ad.element) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.default, {
    container: () => {
      const element = document.querySelector(classSelector);
      if (element) {
        if (ad.element === element) {
          element.classList.add('ad');
        } else {
          element.classList.remove('ad');
        }
      }
      return ad.element;
    },
    children: children
  });
}