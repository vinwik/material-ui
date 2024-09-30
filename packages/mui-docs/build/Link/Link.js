import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useUserLanguage } from "../i18n/index.js";
import { useDocsConfig } from "../DocsProvider/index.js";

/**
 * File to keep in sync with:
 *
 * - /docs/src/modules/components/Link.tsx
 * - /examples/material-ui-nextjs-pages-router/src/Link.js
 * - /examples/material-ui-nextjs-pages-router-ts/src/Link.tsx
 */

// Add support for the sx prop for consistency with the other branches.
import { jsx as _jsx } from "react/jsx-runtime";
const Anchor = styled('a')({});
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
  return /*#__PURE__*/_jsx(NextLink, {
    href: to,
    prefetch: prefetch,
    as: linkAs,
    replace: replace,
    scroll: scroll,
    shallow: shallow,
    passHref: true,
    locale: locale,
    legacyBehavior: legacyBehavior,
    children: /*#__PURE__*/_jsx(Anchor, {
      "data-no-markdown-link": "true",
      ref: ref,
      ...other
    })
  });
});
// A styled version of the Next.js Pages Router Link component:
// https://nextjs.org/docs/pages/api-reference/components/link
export const Link = /*#__PURE__*/React.forwardRef(function Link(props, ref) {
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
  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href?.pathname;
  const routerPathname = router.pathname.replace('/[docsTab]', '');
  const shouldBeActive = routerPathname === pathname;
  const className = clsx(classNameProps, shouldBeActive && activeClassName);
  const userLanguage = useUserLanguage();
  const {
    LANGUAGES_IGNORE_PAGES
  } = useDocsConfig();
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
    return /*#__PURE__*/_jsx(NextLinkComposed, {
      className: className,
      ref: ref,
      ...nextjsProps,
      ...other
    });
  }
  return /*#__PURE__*/_jsx(MuiLink, {
    component: NextLinkComposed,
    className: className,
    ref: ref,
    ...nextjsProps,
    ...other
  });
});