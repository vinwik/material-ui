var _span, _PleaseDisableAdblock, _AdCarbon;
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTranslate } from "../i18n/index.js";
import AdCarbon from "./AdCarbon.js";
import AdInHouse from "./AdInHouse.js";
import { AdContext, adShape } from "./AdManager.js";
import { useAdConfig } from "./AdProvider.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function PleaseDisableAdblock() {
  const t = useTranslate();
  return /*#__PURE__*/_jsxs(Paper, {
    component: "span",
    elevation: 0,
    sx: {
      display: 'block',
      p: 1.5,
      border: '2px solid',
      borderColor: 'primary.main'
    },
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "body2",
      component: "span",
      gutterBottom: true,
      sx: {
        display: 'block'
      },
      children: t('likeMui')
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "body2",
      component: "span",
      gutterBottom: true,
      sx: {
        display: 'block'
      },
      children: t('adblock')
    }), /*#__PURE__*/_jsxs(Typography, {
      variant: "body2",
      component: "span",
      sx: {
        display: 'block'
      },
      children: [t('thanks'), ' ', /*#__PURE__*/_jsx("span", {
        role: "img",
        "aria-label": t('emojiLove'),
        children: "\u2764\uFE0F"
      })]
    })]
  });
}
const disableAd = process.env.NODE_ENV !== 'production' && process.env.ENABLE_AD_IN_DEV_MODE !== 'true';
const inHouseAds = [{
  name: 'scaffoldhub',
  link: 'https://v2.scaffoldhub.io/scaffolds/react-material-ui?partner=1',
  img: '/static/ads-in-house/scaffoldhub.png',
  description: '<b>ScaffoldHub</b>. Automate building your full-stack Material UI web-app.'
}, {
  name: 'templates',
  link: 'https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=in-house-templates',
  img: '/static/ads-in-house/themes-2.jpg',
  description: '<b>Premium Templates</b>. Start your project with the best templates for admins, dashboards, and more.'
}, {
  name: 'themes',
  link: 'https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=in-house-themes',
  img: '/static/ads-in-house/themes.png',
  description: '<b>Premium Themes</b>. Kickstart your application development with a ready-made theme.'
}, {
  name: 'tidelift',
  link: 'https://tidelift.com/subscription/pkg/npm-material-ui?utm_source=npm-material-ui&utm_medium=referral&utm_campaign=enterprise&utm_content=ad',
  img: '/static/ads-in-house/tidelift.png',
  description: '<b>MUI for enterprise</b>. Save time and reduce risk. Managed open source — backed by maintainers.'
}, {
  name: 'figma',
  link: 'https://mui.com/store/items/figma-react/?utm_source=docs&utm_medium=referral&utm_campaign=in-house-figma',
  img: '/static/ads-in-house/figma.png',
  description: '<b>For Figma</b>. A large UI kit with over 600 handcrafted Material UI, MUI X, Joy UI components 🎨.'
}];
class AdErrorBoundary extends React.Component {
  state = {
    didError: false
  };
  static getDerivedStateFromError() {
    return {
      didError: true
    };
  }
  componentDidCatch() {
    // send explicit `'null'`
    const eventLabel = String(this.props.eventLabel);
    // TODO: Use proper error monitoring service (for example Sentry) instead

    window.gtag('event', 'ad', {
      eventAction: 'crash',
      eventLabel
    });
  }
  render() {
    const {
      didError
    } = this.state;
    const {
      children
    } = this.props;
    if (didError) {
      return null;
    }
    return children;
  }
}
export const AD_MARGIN_TOP = 3;
export const AD_MARGIN_BOTTOM = 3;
export const AD_HEIGHT = 126;
// Add more height on mobile as the text tends to wrap beyond the image height.
export const AD_HEIGHT_MOBILE = 126 + 16;

// https://stackoverflow.com/a/20084661
function isBot() {
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
}
export function Ad() {
  const [adblock, setAdblock] = React.useState(null);
  const [carbonOut, setCarbonOut] = React.useState(null);
  const {
    current: randomAdblock
  } = React.useRef(Math.random());
  const {
    current: randomInHouse
  } = React.useRef(Math.random());
  let children;
  let label;
  // Hide the content to google bot to avoid its indexation.
  if (typeof window !== 'undefined' && isBot() || disableAd) {
    children = _span || (_span = /*#__PURE__*/_jsx("span", {}));
  } else if (adblock) {
    if (randomAdblock < 0.2) {
      children = _PleaseDisableAdblock || (_PleaseDisableAdblock = /*#__PURE__*/_jsx(PleaseDisableAdblock, {}));
      label = 'in-house-adblock';
    } else {
      children = /*#__PURE__*/_jsx(AdInHouse, {
        ad: inHouseAds[Math.floor(inHouseAds.length * randomInHouse)]
      });
      label = 'in-house';
    }
  } else if (carbonOut) {
    children = /*#__PURE__*/_jsx(AdInHouse, {
      ad: inHouseAds[Math.floor(inHouseAds.length * randomInHouse)]
    });
    label = 'in-house-carbon';
  } else {
    children = _AdCarbon || (_AdCarbon = /*#__PURE__*/_jsx(AdCarbon, {}));
    label = 'carbon';
  }
  const ad = React.useContext(AdContext);
  const eventLabel = label ? `${label}-${ad.placement}-${adShape}` : null;
  const timerAdblock = React.useRef(undefined);
  const checkAdblock = React.useCallback((attempt = 1) => {
    if (document.querySelector('.ea-placement') || document.querySelector('#carbonads') || document.querySelector('.carbonads') || carbonOut) {
      if (document.querySelector('#carbonads a') && document.querySelector('#carbonads a')?.getAttribute('href') === 'https://material-ui-next.com/discover-more/backers') {
        setCarbonOut(true);
      }
      setAdblock(false);
      return;
    }
    if (attempt < 30) {
      timerAdblock.current = setTimeout(() => {
        checkAdblock(attempt + 1);
      }, 500);
    }
    if (attempt > 6) {
      setAdblock(true);
    }
  }, [carbonOut]);
  React.useEffect(() => {
    if (disableAd) {
      return undefined;
    }
    checkAdblock();
    return () => {
      clearTimeout(timerAdblock.current);
    };
  }, [checkAdblock]);
  const {
    GADisplayRatio
  } = useAdConfig();
  React.useEffect(() => {
    // Avoid an exceed on the Google Analytics quotas.
    if (Math.random() > (GADisplayRatio ?? 0.1) || !eventLabel) {
      return undefined;
    }
    const delay = setTimeout(() => {
      window.gtag('event', 'ad', {
        eventAction: 'display',
        eventLabel
      });
    }, 2500);
    return () => {
      clearTimeout(delay);
    };
  }, [GADisplayRatio, eventLabel]);
  return /*#__PURE__*/_jsx(Box, {
    component: "span",
    sx: theme => ({
      position: 'relative',
      display: 'block',
      mt: AD_MARGIN_TOP,
      mb: AD_MARGIN_BOTTOM,
      minHeight: AD_HEIGHT_MOBILE,
      [theme.breakpoints.up('sm')]: {
        minHeight: AD_HEIGHT
      },
      ...(adShape === 'image' && {}),
      ...(adShape === 'inline' && {
        display: 'flex',
        alignItems: 'flex-end'
      })
    }),
    "data-ga-event-category": "ad",
    "data-ga-event-action": "click",
    "data-ga-event-label": eventLabel,
    className: "Ad-root",
    children: /*#__PURE__*/_jsx(AdErrorBoundary, {
      eventLabel: eventLabel,
      children: children
    })
  });
}