import * as React from 'react';
import prism from '@mui/internal-markdown/prism';
import { NoSsr } from '@mui/base/NoSsr';
import { styled } from '@mui/material/styles';
import { useCodeCopy, CodeCopyButton } from "../CodeCopy/index.js";
import { MarkdownElement } from "../MarkdownElement/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Pre = styled('pre')(({
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
export const HighlightedCode = /*#__PURE__*/React.forwardRef(function HighlightedCode(props, ref) {
  const {
    code,
    copyButtonHidden = false,
    copyButtonProps,
    language,
    plainStyle,
    parentComponent: Component = plainStyle ? React.Fragment : MarkdownElement,
    preComponent: PreComponent = plainStyle ? Pre : 'pre',
    ...other
  } = props;
  const renderedCode = React.useMemo(() => {
    return prism(code.trim(), language);
  }, [code, language]);
  const handlers = useCodeCopy();
  return /*#__PURE__*/_jsx(Component, {
    ref: ref,
    ...other,
    children: /*#__PURE__*/_jsxs("div", {
      className: "MuiCode-root",
      ...handlers,
      style: {
        height: '100%'
      },
      children: [copyButtonHidden ? null : /*#__PURE__*/_jsx(NoSsr, {
        children: /*#__PURE__*/_jsx(CodeCopyButton, {
          code: code,
          ...copyButtonProps
        })
      }), /*#__PURE__*/_jsx(PreComponent, {
        children: /*#__PURE__*/_jsx("code", {
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