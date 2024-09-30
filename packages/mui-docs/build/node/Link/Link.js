"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var React = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _router = require("next/router");
var _link = _interopRequireDefault(require("next/link"));
var _Link = _interopRequireDefault(require("@mui/material/Link"));
var _styles = require("@mui/material/styles");
var _i18n = require("../i18n");
var _DocsProvider = require("../DocsProvider");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * File to keep in sync with:
 *
 * - /docs/src/modules/components/Link.tsx
 * - /examples/material-ui-nextjs-pages-router/src/Link.js
 * - /examples/material-ui-nextjs-pages-router-ts/src/Link.tsx
 */

// Add support for the sx prop for consistency with the other branches.
const Anchor = (0, _styles.styled)('a')({});
const NextLinkComposed = /*#__PURE__*/React.forwardRef(function NextLinkComposed(props, ref) {
  const {
    to,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior = true,
    locale,
    ...other
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_link.default, {
    href: to,
    prefetch: prefetch,
    as: linkAs,
    replace: replace,
    scroll: scroll,
    shallow: shallow,
    passHref: true,
    locale: locale,
    legacyBehavior: legacyBehavior,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Anchor, {
      "data-no-markdown-link": "true",
      ref: ref,
      ...other
    })
  });
});
// A styled version of the Next.js Pages Router Link component:
// https://nextjs.org/docs/pages/api-reference/components/link
const Link = exports.Link = /*#__PURE__*/React.forwardRef(function Link(props, ref) {
  const {
    activeClassName = 'active',
    as,
    className: classNameProps,
    href,
    legacyBehavior,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    scroll,
    shallow,
    ...other
  } = props;
  const router = (0, _router.useRouter)();
  const pathname = typeof href === 'string' ? href : href?.pathname;
  const routerPathname = router.pathname.replace('/[docsTab]', '');
  const shouldBeActive = routerPathname === pathname;
  const className = (0, _clsx.default)(classNameProps, shouldBeActive && activeClassName);
  const userLanguage = (0, _i18n.useUserLanguage)();
  const {
    LANGUAGES_IGNORE_PAGES
  } = (0, _DocsProvider.useDocsConfig)();
  let linkAs = linkAsProp || as || href;
  if (userLanguage !== 'en' && pathname && pathname.startsWith('/') && !LANGUAGES_IGNORE_PAGES(pathname) && !pathname.startsWith(`/${userLanguage}/`)) {
    linkAs = `/${userLanguage}${linkAs}`;
  }
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    legacyBehavior,
    prefetch,
    locale
  };
  if (noLinkStyle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(NextLinkComposed, {
      className: className,
      ref: ref,
      ...nextjsProps,
      ...other
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
    component: NextLinkComposed,
    className: className,
    ref: ref,
    ...nextjsProps,
    ...other
  });
});