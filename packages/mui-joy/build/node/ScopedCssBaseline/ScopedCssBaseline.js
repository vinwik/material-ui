"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _base = require("@mui/base");
var _useThemeProps = _interopRequireDefault(require("../styles/useThemeProps"));
var _styled = _interopRequireDefault(require("../styles/styled"));
var _scopedCssBaselineClasses = require("./scopedCssBaselineClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _scopedCssBaselineClasses.getScopedCssBaselineUtilityClass, {});
};
const ScopedCssBaselineRoot = (0, _styled.default)('div', {
  name: 'JoyScopedCssBaseline',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const colorSchemeStyles = {};
  if (!ownerState.disableColorScheme && theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      colorSchemeStyles[`&${theme.getColorSchemeSelector(key).replace(/\s*&/, '')}`] = {
        colorScheme: scheme.palette?.mode
      };
    });
  }
  return {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: 'border-box',
    // Fix font resize problem in iOS
    WebkitTextSizeAdjust: '100%',
    color: theme.vars.palette.text.primary,
    ...theme.typography['body-md'],
    backgroundColor: theme.vars.palette.background.body,
    '@media print': {
      // Save printer ink.
      backgroundColor: '#fff'
    },
    '& *, & *::before, & *::after': {
      boxSizing: 'inherit'
    },
    '& strong, & b': {
      fontWeight: 'bold'
    },
    ...colorSchemeStyles
  };
});
/**
 *
 * Demos:
 *
 * - [CSS Baseline](https://mui.com/joy-ui/react-css-baseline/)
 *
 * API:
 *
 * - [ScopedCssBaseline API](https://mui.com/joy-ui/api/scoped-css-baseline/)
 */
const ScopedCssBaseline = /*#__PURE__*/React.forwardRef(function ScopedCssBaseline(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'JoyScopedCssBaseline'
  });
  const {
    className,
    component = 'div',
    disableColorScheme = false,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    disableColorScheme
  };
  const classes = useUtilityClasses();
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: ScopedCssBaselineRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps
  });
});
process.env.NODE_ENV !== "production" ? ScopedCssBaseline.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * Disable `color-scheme` CSS property.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  disableColorScheme: _propTypes.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    root: _propTypes.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = exports.default = ScopedCssBaseline;