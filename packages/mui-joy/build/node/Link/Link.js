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
var _base = require("@mui/base");
var _utils = require("@mui/utils");
var _system = require("@mui/system");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _useThemeProps = _interopRequireDefault(require("../styles/useThemeProps"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _linkClasses = _interopRequireWildcard(require("./linkClasses"));
var _Typography = require("../Typography/Typography");
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    level,
    color,
    variant,
    underline,
    focusVisible,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', color && `color${(0, _utils.unstable_capitalize)(color)}`, disabled && 'disabled', focusVisible && 'focusVisible', level, underline && `underline${(0, _utils.unstable_capitalize)(underline)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator']
  };
  return (0, _base.unstable_composeClasses)(slots, _linkClasses.getLinkUtilityClass, {});
};
const StartDecorator = (0, _styled.default)('span', {
  name: 'JoyLink',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})(({
  ownerState
}) => ({
  display: 'inline-flex',
  marginInlineEnd: 'clamp(4px, var(--Link-gap, 0.375em), 0.75rem)',
  ...(typeof ownerState.startDecorator !== 'string' && (ownerState.alignItems === 'flex-start' || ownerState.sx?.alignItems === 'flex-start') && {
    marginTop: '2px' // this makes the alignment perfect in most cases
  })
}));
const EndDecorator = (0, _styled.default)('span', {
  name: 'JoyLink',
  slot: 'endDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})(({
  ownerState
}) => ({
  display: 'inline-flex',
  marginInlineStart: 'clamp(4px, var(--Link-gap, 0.25em), 0.5rem)',
  // for end decorator, 0.25em looks better.
  ...(typeof ownerState.startDecorator !== 'string' && (ownerState.alignItems === 'flex-start' || ownerState.sx?.alignItems === 'flex-start') && {
    marginTop: '2px' // this makes the alignment perfect in most cases
  })
}));
const LinkRoot = (0, _styled.default)('a', {
  name: 'JoyLink',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  return [{
    '--Icon-fontSize': '1.25em',
    '--Icon-color': 'currentColor',
    '--CircularProgress-size': '1.25em',
    '--CircularProgress-thickness': '3px',
    ...(ownerState.level && ownerState.level !== 'inherit' && theme.typography[ownerState.level]),
    ...(ownerState.level === 'inherit' && {
      font: 'inherit'
    }),
    ...(ownerState.underline === 'none' && {
      textDecoration: 'none'
    }),
    ...(ownerState.underline === 'hover' && {
      textDecoration: 'none',
      '&:hover': {
        '@media (hover: hover)': {
          textDecorationLine: 'underline'
        }
      }
    }),
    ...(ownerState.underline === 'always' && {
      textDecoration: 'underline'
    }),
    ...(ownerState.startDecorator && {
      verticalAlign: 'bottom' // to make the link align with the parent's content
    }),
    textDecorationThickness: 'max(0.08em, 1px)',
    // steal from https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/#css-reset-additions
    textUnderlineOffset: '0.15em',
    // steal from https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/#css-reset-additions
    display: 'inline-flex',
    alignItems: 'center',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: theme.vars.radius.xs,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    textDecorationColor: `var(--variant-outlinedBorder, rgba(${theme.vars.palette[ownerState.color]?.mainChannel} / var(--Link-underlineOpacity, 0.72)))`,
    ...(ownerState.variant ? {
      paddingBlock: 'min(0.1em, 4px)',
      paddingInline: '0.25em',
      // better than left, right because it also works with writing mode.
      ...(!ownerState.nesting && {
        marginInline: '-0.25em'
      })
    } : {
      color: `var(--variant-plainColor, rgba(${theme.vars.palette[ownerState.color]?.mainChannel} / 1))`,
      [`&.${_linkClasses.default.disabled}`]: {
        pointerEvents: 'none',
        color: `var(--variant-plainDisabledColor, rgba(${theme.vars.palette[ownerState.color]?.mainChannel} / 0.6))`
      }
    }),
    userSelect: ownerState.component === 'button' ? 'none' : undefined,
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },
    ...(ownerState.overlay ? {
      position: 'initial',
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: `var(--unstable_actionRadius, inherit)`,
        margin: `var(--unstable_actionMargin)`
      },
      [`${theme.focus.selector}`]: {
        '&::after': theme.focus.default
      }
    } : {
      position: 'relative',
      [theme.focus.selector]: theme.focus.default
    })
  }, ownerState.variant && {
    ...theme.variants[ownerState.variant]?.[ownerState.color],
    '&:hover': {
      '@media (hover: hover)': theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color]
    },
    '&:active': theme.variants[`${ownerState.variant}Active`]?.[ownerState.color],
    [`&.${_linkClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]
  }];
});
/**
 *
 * Demos:
 *
 * - [Link](https://mui.com/joy-ui/react-link/)
 *
 * API:
 *
 * - [Link API](https://mui.com/joy-ui/api/link/)
 */
const Link = /*#__PURE__*/React.forwardRef(function Link(inProps, ref) {
  const {
    color = 'primary',
    textColor,
    variant,
    ...themeProps
  } = (0, _useThemeProps.default)({
    props: inProps,
    name: 'JoyLink'
  });
  const nesting = React.useContext(_Typography.TypographyNestedContext);
  const inheriting = React.useContext(_Typography.TypographyInheritContext);
  const props = (0, _system.unstable_extendSxProp)({
    ...themeProps,
    color: textColor
  });
  const {
    children,
    disabled = false,
    onBlur,
    onFocus,
    level: levelProp = 'body-md',
    overlay = false,
    underline = 'hover',
    endDecorator,
    startDecorator,
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const level = nesting || inheriting ? inProps.level || 'inherit' : levelProp;
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleBlur = event => {
    if (!(0, _utils.unstable_isFocusVisible)(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = event => {
    if ((0, _utils.unstable_isFocusVisible)(event.target)) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = {
    ...props,
    color,
    disabled,
    focusVisible,
    underline,
    variant,
    level,
    overlay,
    nesting
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    additionalProps: {
      onBlur: handleBlur,
      onFocus: handleFocus
    },
    ref,
    className: classes.root,
    elementType: LinkRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: StartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: EndDecorator,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.TypographyNestedContext.Provider, {
    value: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
      ...rootProps,
      children: [startDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, {
        ...startDecoratorProps,
        children: startDecorator
      }), (0, _utils.unstable_isMuiElement)(children, ['Skeleton']) ? /*#__PURE__*/React.cloneElement(children, {
        variant: children.props.variant || 'inline'
      }) : children, endDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, {
        ...endDecoratorProps,
        children: endDecorator
      })]
    })
  });
});
process.env.NODE_ENV !== "production" ? Link.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,
  /**
   * The color of the link.
   * @default 'primary'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: _propTypes.default.node,
  /**
   * Applies the theme typography styles.
   * @default 'body-md'
   */
  level: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['body1', 'body2', 'body3', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit']), _propTypes.default.string]),
  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,
  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,
  /**
   * If `true`, the ::after pseudo element is added to cover the area of interaction.
   * The parent of the overlay Link should have `relative` CSS position.
   * @default false
   */
  overlay: _propTypes.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    endDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    startDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    endDecorator: _propTypes.default.elementType,
    root: _propTypes.default.elementType,
    startDecorator: _propTypes.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: _propTypes.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The system color.
   */
  textColor: _propTypes.default /* @typescript-to-proptypes-ignore */.any,
  /**
   * Controls when the link should have an underline.
   * @default 'hover'
   */
  underline: _propTypes.default.oneOf(['always', 'hover', 'none']),
  /**
   * Applies the theme link styles.
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = Link;