"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _nprogress = _interopRequireDefault(require("nprogress"));
var _NoSsr = require("@mui/base/NoSsr");
var _utils = require("@mui/utils");
var _GlobalStyles = _interopRequireDefault(require("@mui/material/GlobalStyles"));
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
_nprogress.default.configure({
  barSelector: '.nprogress-bar',
  template: `
    <div class="nprogress-bar">
      <div></div>
      <div></div>
    </div>
  `
});
const muiNProgressPulse = (0, _styles.keyframes)`
  30% {
    opacity: 0.6;
  }

  60% {
    opacity: 0;
  }

  to {
    opacity: 0.6;
  }
`;

/**
 * Elegant and ready-to-use wrapper on top of https://github.com/rstacruz/nprogress/.
 * The implementation is highly inspired by the YouTube one.
 */
function NProgressBar(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NoSsr.NoSsr, {
    children: [props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_GlobalStyles.default, {
      styles: theme => ({
        '#nprogress': {
          direction: 'ltr',
          pointerEvents: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          zIndex: (theme.vars || theme).zIndex.tooltip,
          backgroundColor: (theme.vars || theme).palette.primary[200],
          ...theme.applyDarkStyles({
            backgroundColor: (theme.vars || theme).palette.primary[700]
          }),
          '& .nprogress-bar': {
            position: 'fixed',
            backgroundColor: (theme.vars || theme).palette.primary.main,
            top: 0,
            left: 0,
            right: 0,
            height: 2
          },
          '& .nprogress-bar > div': {
            position: 'absolute',
            top: 0,
            height: 2,
            boxShadow: `${(theme.vars || theme).palette.primary.main} 1px 0 6px 1px`,
            borderRadius: '100%',
            animation: `${muiNProgressPulse} 2s ease-out 0s infinite`
          },
          '& .nprogress-bar > div:first-of-type': {
            opacity: 0.6,
            width: 20,
            right: 0,
            clip: 'rect(-6px,22px,14px,10px)'
          },
          '& .nprogress-bar > div:last-of-type': {
            opacity: 0.6,
            width: 180,
            right: -80,
            clip: 'rect(-6px,90px,14px,-6px)'
          }
        }
      })
    })]
  });
}
process.env.NODE_ENV !== "production" ? NProgressBar.propTypes = {
  children: _propTypes.default.node
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? NProgressBar.propTypes = (0, _utils.exactProp)(NProgressBar.propTypes) : void 0;
}
var _default = exports.default = NProgressBar;