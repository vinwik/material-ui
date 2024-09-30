var _AdCarbonImage;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import loadScript from "../utils/loadScript.js";
import AdDisplay from "./AdDisplay.js";
import { adBodyImageStyles } from "./ad.styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CarbonRoot = styled('span')(({
  theme
}) => {
  const styles = adBodyImageStyles(theme);
  return {
    width: '100%',
    '& > div': {
      // The isolation logic of carbonads is broken.
      // Once the script starts loading, it will asynchronous resolve, with no way to stop it.
      // This leads to duplication of the ad.
      //
      // To solve the issue, we only display the #carbonads div
      display: 'none'
    },
    '& #carbonads': {
      ...styles.root,
      '& .carbon-img': styles.imgWrapper,
      '& img': styles.img,
      '& a, & a:hover': styles.a,
      '& .carbon-text': styles.description,
      '& .carbon-poweredby': styles.poweredby
    }
  };
});
function AdCarbonImage() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    // The isolation logic of carbonads is broken.
    // Once the script starts loading, it will asynchronous resolve, with no way to stop it.
    // This leads to duplication of the ad.
    //
    // To solve the issue, for example StrictModel double effect execution, we debounce the load action.
    const load = setTimeout(() => {
      const script = loadScript('https://cdn.carbonads.com/carbon.js?serve=CKYIL27L&placement=material-uicom', ref.current);
      script.id = '_carbonads_js';
    });
    return () => {
      clearTimeout(load);
    };
  }, []);
  return /*#__PURE__*/_jsx(CarbonRoot, {
    ref: ref
  });
}
export function AdCarbonInline() {
  const [ad, setAd] = React.useState(null);
  React.useEffect(() => {
    let active = true;
    let attempt = 0;
    (async () => {
      async function tryFetch() {
        if (attempt >= 10 || !active) {
          return null;
        }
        attempt += 1;
        let response;
        try {
          response = await fetch('https://srv.buysellads.com/ads/CE7DC23W.json');
        } catch (err) {
          // Ad blocker crashes this request
          return null;
        }
        const data = await response.json();
        // Inspired by https://github.com/Semantic-Org/Semantic-UI-React/blob/2c7134128925dd831de85011e3eb0ec382ba7f73/docs/src/components/CarbonAd/CarbonAdNative.js#L9
        const sanitizedAd = data.ads.filter(item => Object.keys(item).length > 0).filter(item => item.statlink).filter(Boolean)[0];
        if (!sanitizedAd) {
          return tryFetch();
        }
        return sanitizedAd;
      }
      const sanitizedAd = await tryFetch();
      if (active) {
        setAd(sanitizedAd);
      }
    })();
    return () => {
      active = false;
    };
  }, []);
  return ad ? /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx("img", {
      src: ad.statimp,
      alt: "",
      style: {
        display: 'none'
      }
    }), ad.pixel && ad.pixel.split('||').map((pixel, i) => /*#__PURE__*/_jsx("img", {
      src: `${pixel.replace('[timestamp]', ad.timestamp)}`,
      style: {
        display: 'none'
      },
      alt: ""
    }, i)), /*#__PURE__*/_jsx(AdDisplay, {
      className: "carbonads",
      shape: "inline",
      ad: {
        link: ad.statlink,
        img: ad.image,
        name: ad.company,
        description: `<strong>${ad.company}</strong> - ${ad.description}`,
        poweredby: 'Carbon',
        label: 'carbon-demo-inline'
      }
    })]
  }) : /*#__PURE__*/_jsx("div", {
    style: {
      minHeight: 52
    }
  });
}
export default function AdCarbon() {
  return _AdCarbonImage || (_AdCarbonImage = /*#__PURE__*/_jsx(AdCarbonImage, {}));
}