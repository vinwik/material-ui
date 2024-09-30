import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useTranslate } from "../i18n/index.js";
import { adShape } from "./AdManager.js";
import { adBodyImageStyles, adBodyInlineStyles } from "./ad.styles.js";
import { useAdConfig } from "./AdProvider.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const InlineShape = styled('span')(({
  theme
}) => {
  const styles = adBodyInlineStyles(theme);
  return {
    ...styles.root,
    '& img': styles.img,
    '& a, & a:hover': styles.a,
    '& .AdDisplay-imageWrapper': styles.imgWrapper,
    '& .AdDisplay-description': styles.description,
    '& .AdDisplay-poweredby': styles.poweredby
  };
});
const ImageShape = styled('span')(({
  theme
}) => {
  const styles = adBodyImageStyles(theme);
  return {
    ...styles.root,
    '& img': styles.img,
    '& a, & a:hover': styles.a,
    '& .AdDisplay-imageWrapper': styles.imgWrapper,
    '& .AdDisplay-description': styles.description,
    '& .AdDisplay-poweredby': styles.poweredby
  };
});
export default function AdDisplay(props) {
  const {
    ad,
    className,
    shape: shapeProp = 'auto'
  } = props;
  const t = useTranslate();
  const {
    GADisplayRatio
  } = useAdConfig();
  React.useEffect(() => {
    // Avoid an exceed on the Google Analytics quotas.
    if (Math.random() > (GADisplayRatio ?? 0.1) || !ad.label) {
      return;
    }
    window.gtag('event', 'ad', {
      eventAction: 'display',
      eventLabel: ad.label
    });
  }, [GADisplayRatio, ad.label]);
  const shape = shapeProp === 'auto' ? adShape : shapeProp;
  const Root = shape === 'image' ? ImageShape : InlineShape;

  /* eslint-disable react/no-danger */
  return /*#__PURE__*/_jsxs(Root, {
    className: className,
    children: [/*#__PURE__*/_jsxs("a", {
      href: ad.link,
      target: "_blank",
      rel: "noopener sponsored",
      ...(ad.label ? {
        'data-ga-event-category': 'ad',
        'data-ga-event-action': 'click',
        'data-ga-event-label': ad.label
      } : {}),
      children: [/*#__PURE__*/_jsx("span", {
        className: "AdDisplay-imageWrapper",
        children: /*#__PURE__*/_jsx("img", {
          height: "100",
          width: "130",
          src: ad.img,
          alt: ad.name
        })
      }), /*#__PURE__*/_jsx("span", {
        className: "AdDisplay-description",
        dangerouslySetInnerHTML: {
          __html: ad.description
        }
      })]
    }), /*#__PURE__*/_jsx("span", {
      className: "AdDisplay-poweredby",
      children: t('adPublisher').replace('{{publisher}}', ad.poweredby)
    })]
  });
  /* eslint-enable react/no-danger */
}