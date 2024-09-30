"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightedCode = void 0;
var React = _interopRequireWildcard(require("react"));
var _prism = _interopRequireDefault(require("@mui/internal-markdown/prism"));
var _NoSsr = require("@mui/base/NoSsr");
var _styles = require("@mui/material/styles");
var _CodeCopy = require("../CodeCopy");
var _MarkdownElement = require("../MarkdownElement");
var _jsxRuntime = require("react/jsx-runtime");
const Pre = (0, _styles.styled)('pre')(({
  theme
}) => ({
  margin: 0,
  color: 'hsl(60deg 30% 96.08%)',
  // fallback color until Prism's theme is loaded
  WebkitOverflowScrolling: 'touch',
  // iOS momentum scrolling.
  maxWidth: 'calc(100vw - 32px)',
  [theme.breakpoints.up('md')]: {
    maxWidth: 'calc(100vw - 32px - 16px)'
  },
  '& code': {
    // Avoid layout jump after hydration (style injected by Prism)
    ...theme.typography.caption,
    fontFamily: theme.typography.fontFamilyCode,
    fontWeight: 400,
    WebkitFontSmoothing: 'subpixel-antialiased'
    // Reset for Safari
    // https://github.com/necolas/normalize.css/blob/master/normalize.css#L102
  }
}));
const HighlightedCode = exports.HighlightedCode = /*#__PURE__*/React.forwardRef(function HighlightedCode(props, ref) {
  const {
    code,
    copyButtonHidden = false,
    copyButtonProps,
    language,
    plainStyle,
    parentComponent: Component = plainStyle ? React.Fragment : _MarkdownElement.MarkdownElement,
    preComponent: PreComponent = plainStyle ? Pre : 'pre',
    ...other
  } = props;
  const renderedCode = React.useMemo(() => {
    return (0, _prism.default)(code.trim(), language);
  }, [code, language]);
  const handlers = (0, _CodeCopy.useCodeCopy)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
    ref: ref,
    ...other,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "MuiCode-root",
      ...handlers,
      style: {
        height: '100%'
      },
      children: [copyButtonHidden ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_NoSsr.NoSsr, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CodeCopy.CodeCopyButton, {
          code: code,
          ...copyButtonProps
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(PreComponent, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("code", {
          className: `language-${language}`
          // eslint-disable-next-line react/no-danger
          ,
          dangerouslySetInnerHTML: {
            __html: renderedCode
          }
        })
      })]
    })
  });
});