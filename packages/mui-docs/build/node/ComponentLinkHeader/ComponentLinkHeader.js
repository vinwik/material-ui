"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentLinkHeader = ComponentLinkHeader;
var React = _interopRequireWildcard(require("react"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _ChatRounded2 = _interopRequireDefault(require("@mui/icons-material/ChatRounded"));
var _GitHub = _interopRequireDefault(require("@mui/icons-material/GitHub"));
var _styles = require("@mui/material/styles");
var _SketchIcon = _interopRequireDefault(require("../svgIcons/SketchIcon"));
var _FigmaIcon = _interopRequireDefault(require("../svgIcons/FigmaIcon"));
var _AdobeXDIcon = _interopRequireDefault(require("../svgIcons/AdobeXDIcon"));
var _BundleSizeIcon2 = _interopRequireDefault(require("../svgIcons/BundleSizeIcon"));
var _W3CIcon2 = _interopRequireDefault(require("../svgIcons/W3CIcon"));
var _MaterialDesignIcon2 = _interopRequireDefault(require("../svgIcons/MaterialDesignIcon"));
var _i18n = require("../i18n");
var _jsxRuntime = require("react/jsx-runtime");
var _ChatRounded, _BundleSizeIcon, _GitHubIcon, _W3CIcon, _MaterialDesignIcon, _li, _React$Fragment;
const Root = (0, _styles.styled)('ul')({
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
function ComponentLinkHeader(props) {
  const {
    markdown: {
      headers
    },
    design
  } = props;
  const t = (0, _i18n.useTranslate)();
  const packageName = headers.packageName ?? defaultPackageNames[headers.productId] ?? '@mui/material';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
    children: [headers.githubLabel ? /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: `${process.env.SOURCE_CODE_REPO}/labels/${encodeURIComponent(headers.githubLabel)}`,
        icon: _ChatRounded || (_ChatRounded = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChatRounded2.default, {
          color: "primary"
        })),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": t('githubLabel'),
        "data-ga-event-split": "0.1",
        label: t('githubLabel')
      })
    }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
        title: t('bundleSizeTooltip'),
        describeChild: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
          clickable: true,
          role: undefined,
          component: "a",
          size: "small",
          variant: "outlined",
          rel: "nofollow",
          href: `https://bundlephobia.com/package/${packageName}@latest`,
          icon: _BundleSizeIcon || (_BundleSizeIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_BundleSizeIcon2.default, {
            color: "primary"
          })),
          "data-ga-event-category": "ComponentLinkHeader",
          "data-ga-event-action": "click",
          "data-ga-event-label": t('bundleSize'),
          "data-ga-event-split": "0.1",
          label: t('bundleSize')
        })
      })
    }), headers.githubSource ? /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: `${process.env.SOURCE_CODE_REPO}/tree/v${process.env.LIB_VERSION}/${headers.githubSource}`,
        icon: _GitHubIcon || (_GitHubIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHub.default, {})),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": "Source",
        "data-ga-event-split": "0.1",
        label: "Source"
      })
    }) : null, headers.waiAria ? /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: headers.waiAria,
        icon: _W3CIcon || (_W3CIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_W3CIcon2.default, {
          color: "primary"
        })),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": "WAI-ARIA",
        "data-ga-event-split": "0.1",
        label: "WAI-ARIA"
      })
    }) : null, headers.materialDesign ? /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
        clickable: true,
        role: undefined,
        component: "a",
        size: "small",
        variant: "outlined",
        rel: "nofollow",
        href: headers.materialDesign,
        icon: _MaterialDesignIcon || (_MaterialDesignIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaterialDesignIcon2.default, {})),
        "data-ga-event-category": "ComponentLinkHeader",
        "data-ga-event-action": "click",
        "data-ga-event-label": "Material Design",
        "data-ga-event-split": "0.1",
        label: "Material Design"
      })
    }) : null, design === false ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
      children: [_li || (_li = /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
          clickable: true,
          role: undefined,
          component: "a",
          size: "small",
          variant: "outlined",
          rel: "nofollow",
          href: "https://mui.com/store/items/figma-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FigmaIcon.default, {}),
          "data-ga-event-category": "ComponentLinkHeader",
          "data-ga-event-action": "click",
          "data-ga-event-label": "Figma",
          "data-ga-event-split": "0.1",
          label: "Figma"
        })
      })), packageName === '@mui/joy' ? null : _React$Fragment || (_React$Fragment = /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
            clickable: true,
            role: undefined,
            component: "a",
            size: "small",
            variant: "outlined",
            rel: "nofollow",
            href: "https://mui.com/store/items/adobe-xd-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdobeXDIcon.default, {}),
            "data-ga-event-category": "ComponentLinkHeader",
            "data-ga-event-action": "click",
            "data-ga-event-label": "Adobe XD",
            "data-ga-event-split": "0.1",
            label: "Adobe"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
            clickable: true,
            role: undefined,
            component: "a",
            size: "small",
            variant: "outlined",
            rel: "nofollow",
            href: "https://mui.com/store/items/sketch-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SketchIcon.default, {}),
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