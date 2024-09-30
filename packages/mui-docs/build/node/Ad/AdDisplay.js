"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdDisplay;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _i18n = require("../i18n");
var _AdManager = require("./AdManager");
var _ad = require("./ad.styles");
var _AdProvider = require("./AdProvider");
var _jsxRuntime = require("react/jsx-runtime");
const InlineShape = (0, _styles.styled)('span')(({
  theme
}) => {
  const styles = (0, _ad.adBodyInlineStyles)(theme);
  return {
    ...styles.root,
    '& img': styles.img,
    '& a, & a:hover': styles.a,
    '& .AdDisplay-imageWrapper': styles.imgWrapper,
    '& .AdDisplay-description': styles.description,
    '& .AdDisplay-poweredby': styles.poweredby
  };
});
const ImageShape = (0, _styles.styled)('span')(({
  theme
}) => {
  const styles = (0, _ad.adBodyImageStyles)(theme);
  return {
    ...styles.root,
    '& img': styles.img,
    '& a, & a:hover': styles.a,
    '& .AdDisplay-imageWrapper': styles.imgWrapper,
    '& .AdDisplay-description': styles.description,
    '& .AdDisplay-poweredby': styles.poweredby
  };
});
function AdDisplay(props) {
  const {
    ad,
    className,
    shape: shapeProp = 'auto'
  } = props;
  const t = (0, _i18n.useTranslate)();
  const {
    GADisplayRatio
  } = (0, _AdProvider.useAdConfig)();
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
  const shape = shapeProp === 'auto' ? _AdManager.adShape : shapeProp;
  const Root = shape === 'image' ? ImageShape : InlineShape;

  /* eslint-disable react/no-danger */
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
      href: ad.link,
      target: "_blank",
      rel: "noopener sponsored",
      ...(ad.label ? {
        'data-ga-event-category': 'ad',
        'data-ga-event-action': 'click',
        'data-ga-event-label': ad.label
      } : {}),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "AdDisplay-imageWrapper",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          height: "100",
          width: "130",
          src: ad.img,
          alt: ad.name
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "AdDisplay-description",
        dangerouslySetInnerHTML: {
          __html: ad.description
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "AdDisplay-poweredby",
      children: t('adPublisher').replace('{{publisher}}', ad.poweredby)
    })]
  });
  /* eslint-enable react/no-danger */
}