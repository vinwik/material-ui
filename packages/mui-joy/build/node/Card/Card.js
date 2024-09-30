"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledCardRoot = void 0;
var React = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _base = require("@mui/base");
var _utils = require("@mui/utils");
var _styles = require("../styles");
var _colorInversion = require("../colorInversion");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _cardClasses = require("./cardClasses");
var _styleUtils = require("../styles/styleUtils");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _cardClasses.getCardUtilityClass, {});
};
const StyledCardRoot = exports.StyledCardRoot = (0, _styled.default)('div')(({
  theme,
  ownerState
}) => {
  const {
    p,
    padding,
    borderRadius
  } = (0, _styleUtils.resolveSxValue)({
    theme,
    ownerState
  }, ['p', 'padding', 'borderRadius']);
  return [{
    '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
    // a context variable for any child component
    '--Card-childRadius': 'max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))',
    // AspectRatio integration
    '--AspectRatio-radius': 'var(--Card-childRadius)',
    // Link integration
    '--unstable_actionMargin': 'calc(-1 * var(--variant-borderWidth, 0px))',
    // Link, Radio, Checkbox integration
    '--unstable_actionRadius': 'var(--Card-radius)',
    // CardCover integration
    '--CardCover-radius': 'calc(var(--Card-radius) - var(--variant-borderWidth, 0px))',
    // CardOverflow integration
    '--CardOverflow-offset': `calc(-1 * var(--Card-padding))`,
    '--CardOverflow-radius': 'calc(var(--Card-radius) - var(--variant-borderWidth, 0px))',
    // Divider integration
    '--Divider-inset': 'calc(-1 * var(--Card-padding))',
    ...(ownerState.size === 'sm' && {
      '--Card-radius': theme.vars.radius.sm,
      '--Card-padding': '0.625rem',
      gap: '0.5rem'
    }),
    ...(ownerState.size === 'md' && {
      '--Card-radius': theme.vars.radius.md,
      '--Card-padding': '1rem',
      gap: '0.75rem 1rem'
    }),
    ...(ownerState.size === 'lg' && {
      '--Card-radius': theme.vars.radius.lg,
      '--Card-padding': '1.5rem',
      gap: '1rem 1.5rem'
    }),
    padding: 'var(--Card-padding)',
    borderRadius: 'var(--Card-radius)',
    backgroundColor: theme.vars.palette.background.surface,
    position: 'relative',
    display: 'flex',
    flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column',
    ...theme.typography[`body-${ownerState.size}`],
    ...(ownerState.variant === 'solid' && ownerState.color && ownerState.invertedColors && (0, _colorInversion.applySolidInversion)(ownerState.color)(theme)),
    ...(ownerState.variant === 'soft' && ownerState.color && ownerState.invertedColors && (0, _colorInversion.applySoftInversion)(ownerState.color)(theme)),
    ...theme.variants[ownerState.variant]?.[ownerState.color]
  }, p !== undefined && {
    '--Card-padding': p
  }, padding !== undefined && {
    '--Card-padding': padding
  }, borderRadius !== undefined && {
    '--Card-radius': borderRadius
  }];
});
const CardRoot = (0, _styled.default)(StyledCardRoot, {
  name: 'JoyCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [Card API](https://mui.com/joy-ui/api/card/)
 */
const Card = /*#__PURE__*/React.forwardRef(function Card(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyCard'
  });
  const {
    className,
    color = 'neutral',
    component = 'div',
    invertedColors = false,
    size = 'md',
    variant = 'outlined',
    children,
    orientation = 'vertical',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    orientation,
    size,
    variant,
    invertedColors
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: CardRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: React.Children.map(children, (child, index) => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return child;
      }
      const extraProps = {};
      if ((0, _utils.unstable_isMuiElement)(child, ['Divider'])) {
        const childProps = child.props;
        extraProps.inset = childProps?.inset ?? 'context';
        const dividerOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
        extraProps.orientation = childProps?.orientation ?? dividerOrientation;
      }
      if (index === 0) {
        extraProps['data-first-child'] = '';
      }
      if (index === React.Children.count(children) - 1) {
        extraProps['data-last-child'] = '';
      }
      return /*#__PURE__*/React.cloneElement(child, extraProps);
    })
  });
});
process.env.NODE_ENV !== "production" ? Card.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the Card if `src` is not set.
   * This can be an element, or just a string.
   */
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: _propTypes.default.bool,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['lg', 'md', 'sm']), _propTypes.default.string]),
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
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = Card;