var _ChatRounded, _BundleSizeIcon, _GitHubIcon, _W3CIcon, _MaterialDesignIcon, _li, _React$Fragment;
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import ChatRounded from '@mui/icons-material/ChatRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import SketchIcon from "../svgIcons/SketchIcon.js";
import FigmaIcon from "../svgIcons/FigmaIcon.js";
import AdobeXDIcon from "../svgIcons/AdobeXDIcon.js";
import BundleSizeIcon from "../svgIcons/BundleSizeIcon.js";
import W3CIcon from "../svgIcons/W3CIcon.js";
import MaterialDesignIcon from "../svgIcons/MaterialDesignIcon.js";
import { useTranslate } from "../i18n/index.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Root = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  '& .MuiChip-root': {
    height: 26,
    padding: '0 8px',
    gap: 6,
    '& .MuiChip-label': {
      padding: 0
    },
    '& .MuiChip-iconSmall': {
      margin: 0,
      fontSize: 14
    }
  }
});
const defaultPackageNames = {
  'material-ui': '@mui/material',
  'joy-ui': '@mui/joy',
  'base-ui': '@mui/base',
  system: '@mui/system'
};
export function ComponentLinkHeader(props) {
  const {
    markdown: {
      headers
    },
    design
  } = props;
  const t = useTranslate();
  const packageName = headers.packageName ?? defaultPackageNames[headers.productId] ?? '@mui/material';
  return /*#__PURE__*/_jsxs(Root, {
    children: [headers.githubLabel ? /*#__PURE__*/_jsx("li", {
      children: /*#__PURE__*/_jsx(Chip, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: `${process.env.SOURCE_CODE_REPO}/labels/${encodeURIComponent(headers.githubLabel)}`,
        icon: _ChatRounded || (_ChatRounded = /*#__PURE__*/_jsx(ChatRounded, {
          color: "primary"
        })),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": t('githubLabel'),
        "data-ga-event-split": "0.1",
        label: t('githubLabel')
      })
    }) : null, /*#__PURE__*/_jsx("li", {
      children: /*#__PURE__*/_jsx(Tooltip, {
        title: t('bundleSizeTooltip'),
        describeChild: true,
        children: /*#__PURE__*/_jsx(Chip, {
          clickable: true,
          role: undefined,
          component: "a",
          size: "small",
          variant: "outlined",
          rel: "nofollow",
          href: `https://bundlephobia.com/package/${packageName}@latest`,
          icon: _BundleSizeIcon || (_BundleSizeIcon = /*#__PURE__*/_jsx(BundleSizeIcon, {
            color: "primary"
          })),
          "data-ga-event-category": "ComponentLinkHeader",
          "data-ga-event-action": "click",
          "data-ga-event-label": t('bundleSize'),
          "data-ga-event-split": "0.1",
          label: t('bundleSize')
        })
      })
    }), headers.githubSource ? /*#__PURE__*/_jsx("li", {
      children: /*#__PURE__*/_jsx(Chip, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: `${process.env.SOURCE_CODE_REPO}/tree/v${process.env.LIB_VERSION}/${headers.githubSource}`,
        icon: _GitHubIcon || (_GitHubIcon = /*#__PURE__*/_jsx(GitHubIcon, {})),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": "Source",
        "data-ga-event-split": "0.1",
        label: "Source"
      })
    }) : null, headers.waiAria ? /*#__PURE__*/_jsx("li", {
      children: /*#__PURE__*/_jsx(Chip, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: headers.waiAria,
        icon: _W3CIcon || (_W3CIcon = /*#__PURE__*/_jsx(W3CIcon, {
          color: "primary"
        })),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": "WAI-ARIA",
        "data-ga-event-split": "0.1",
        label: "WAI-ARIA"
      })
    }) : null, headers.materialDesign ? /*#__PURE__*/_jsx("li", {
      children: /*#__PURE__*/_jsx(Chip, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: headers.materialDesign,
        icon: _MaterialDesignIcon || (_MaterialDesignIcon = /*#__PURE__*/_jsx(MaterialDesignIcon, {})),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": "Material Design",
        "data-ga-event-split": "0.1",
        label: "Material Design"
      })
    }) : null, design === false ? null : /*#__PURE__*/_jsxs(React.Fragment, {
      children: [_li || (_li = /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx(Chip, {
          clickable: true,
          role: undefined,
          component: "a",
          size: "small",
          variant: "outlined",
          rel: "nofollow",
          href: "https://mui.com/store/items/figma-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",
          icon: /*#__PURE__*/_jsx(FigmaIcon, {}),
          "data-ga-event-category": "ComponentLinkHeader",
          "data-ga-event-action": "click",
          "data-ga-event-label": "Figma",
          "data-ga-event-split": "0.1",
          label: "Figma"
        })
      })), packageName === '@mui/joy' ? null : _React$Fragment || (_React$Fragment = /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx(Chip, {
            clickable: true,
            role: undefined,
            component: "a",
            size: "small",
            variant: "outlined",
            rel: "nofollow",
            href: "https://mui.com/store/items/adobe-xd-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",
            icon: /*#__PURE__*/_jsx(AdobeXDIcon, {}),
            "data-ga-event-category": "ComponentLinkHeader",
            "data-ga-event-action": "click",
            "data-ga-event-label": "Adobe XD",
            "data-ga-event-split": "0.1",
            label: "Adobe"
          })
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx(Chip, {
            clickable: true,
            role: undefined,
            component: "a",
            size: "small",
            variant: "outlined",
            rel: "nofollow",
            href: "https://mui.com/store/items/sketch-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",
            icon: /*#__PURE__*/_jsx(SketchIcon, {}),
            "data-ga-event-category": "ComponentLinkHeader",
            "data-ga-event-action": "click",
            "data-ga-event-label": "Sketch",
            "data-ga-event-split": "0.1",
            label: "Sketch"
          })
        })]
      }))]
    })]
  });
}