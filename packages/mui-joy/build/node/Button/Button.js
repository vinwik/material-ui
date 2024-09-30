"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getButtonStyles = exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useButton = require("@mui/base/useButton");
var _composeClasses = require("@mui/base/composeClasses");
var _utils = require("@mui/utils");
var _styles = require("../styles");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _CircularProgress = _interopRequireDefault(require("../CircularProgress"));
var _buttonClasses = _interopRequireWildcard(require("./buttonClasses"));
var _ButtonGroupContext = _interopRequireDefault(require("../ButtonGroup/ButtonGroupContext"));
var _ToggleButtonGroupContext = _interopRequireDefault(require("../ToggleButtonGroup/ToggleButtonGroupContext"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    color,
    disabled,
    focusVisible,
    focusVisibleClassName,
    fullWidth,
    size,
    variant,
    loading
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', fullWidth && 'fullWidth', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`, loading && 'loading'],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator'],
    loadingIndicatorCenter: ['loadingIndicatorCenter']
  };
  const composedClasses = (0, _composeClasses.unstable_composeClasses)(slots, _buttonClasses.getButtonUtilityClass, {});
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonStartDecorator = (0, _styles.styled)('span', {
  name: 'JoyButton',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})({
  '--Icon-margin': '0 0 0 calc(var(--Button-gap) / -2)',
  '--CircularProgress-margin': '0 0 0 calc(var(--Button-gap) / -2)',
  display: 'inherit',
  marginRight: 'var(--Button-gap)'
});
const ButtonEndDecorator = (0, _styles.styled)('span', {
  name: 'JoyButton',
  slot: 'EndDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})({
  '--Icon-margin': '0 calc(var(--Button-gap) / -2) 0 0',
  '--CircularProgress-margin': '0 calc(var(--Button-gap) / -2) 0 0',
  display: 'inherit',
  marginLeft: 'var(--Button-gap)'
});
const ButtonLoadingCenter = (0, _styles.styled)('span', {
  name: 'JoyButton',
  slot: 'LoadingCenter',
  overridesResolver: (props, styles) => styles.loadingIndicatorCenter
})(({
  theme,
  ownerState
}) => ({
  display: 'inherit',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.variants[ownerState.variant]?.[ownerState.color]?.color,
  ...(ownerState.disabled && {
    color: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]?.color
  })
}));
const getButtonStyles = ({
  theme,
  ownerState
}) => {
  return [{
    '--Icon-margin': 'initial',
    // reset the icon's margin.
    '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
    ...(ownerState.size === 'sm' && {
      '--Icon-fontSize': theme.vars.fontSize.lg,
      '--CircularProgress-size': '20px',
      // must be `px` unit, otherwise the CircularProgress is broken in Safari
      '--CircularProgress-thickness': '2px',
      '--Button-gap': '0.375rem',
      minHeight: 'var(--Button-minHeight, 2rem)',
      fontSize: theme.vars.fontSize.sm,
      paddingBlock: 'var(--Button-paddingBlock, 0.25rem)',
      paddingInline: '0.75rem'
    }),
    ...(ownerState.size === 'md' && {
      '--Icon-fontSize': theme.vars.fontSize.xl,
      '--CircularProgress-size': '20px',
      // must be `px` unit, otherwise the CircularProgress is broken in Safari
      '--CircularProgress-thickness': '2px',
      '--Button-gap': '0.5rem',
      minHeight: 'var(--Button-minHeight, 2.25rem)',
      // use min-height instead of height to make the button resilient to its content
      fontSize: theme.vars.fontSize.sm,
      // internal --Button-paddingBlock is used to control the padding-block of the button from the outside, for example as a decorator of an Input
      paddingBlock: 'var(--Button-paddingBlock, 0.375rem)',
      // the padding-block act as a minimum spacing between content and root element
      paddingInline: '1rem'
    }),
    ...(ownerState.size === 'lg' && {
      '--Icon-fontSize': theme.vars.fontSize.xl2,
      '--CircularProgress-size': '28px',
      // must be `px` unit, otherwise the CircularProgress is broken in Safari
      '--CircularProgress-thickness': '4px',
      '--Button-gap': '0.75rem',
      minHeight: 'var(--Button-minHeight, 2.75rem)',
      fontSize: theme.vars.fontSize.md,
      paddingBlock: 'var(--Button-paddingBlock, 0.5rem)',
      paddingInline: '1.5rem'
    }),
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    borderRadius: `var(--Button-radius, ${theme.vars.radius.sm})`,
    // to be controlled by other components, for example Input
    margin: `var(--Button-margin)`,
    // to be controlled by other components, for example Input
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    textDecoration: 'none',
    // prevent user agent underline when used as anchor
    fontFamily: theme.vars.fontFamily.body,
    fontWeight: theme.vars.fontWeight.lg,
    lineHeight: theme.vars.lineHeight.md,
    ...(ownerState.fullWidth && {
      width: '100%'
    }),
    [theme.focus.selector]: theme.focus.default
  }, {
    ...theme.variants[ownerState.variant]?.[ownerState.color],
    '&:hover': {
      '@media (hover: hover)': theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color]
    },
    '&:active, &[aria-pressed="true"]': theme.variants[`${ownerState.variant}Active`]?.[ownerState.color],
    [`&.${_buttonClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color],
    ...(ownerState.loadingPosition === 'center' && {
      // this has to come after the variant styles to take effect.
      [`&.${_buttonClasses.default.loading}`]: {
        color: 'transparent'
      }
    })
  }];
};
exports.getButtonStyles = getButtonStyles;
const ButtonRoot = (0, _styles.styled)('button', {
  name: 'JoyButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(getButtonStyles);
/**
 *
 * Demos:
 *
 * - [Button](https://mui.com/joy-ui/react-button/)
 * - [Button Group](https://mui.com/joy-ui/react-button-group/)
 * - [Toggle Button Group](https://mui.com/joy-ui/react-toggle-button-group/)
 *
 * API:
 *
 * - [Button API](https://mui.com/joy-ui/api/button/)
 */
const Button = /*#__PURE__*/React.forwardRef(function Button(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyButton'
  });
  const {
    children,
    action,
    color: colorProp = 'primary',
    variant: variantProp = 'solid',
    size: sizeProp = 'md',
    fullWidth = false,
    startDecorator,
    endDecorator,
    loading = false,
    loadingPosition = 'center',
    loadingIndicator: loadingIndicatorProp,
    disabled: disabledProp,
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const buttonGroup = React.useContext(_ButtonGroupContext.default);
  const toggleButtonGroup = React.useContext(_ToggleButtonGroupContext.default);
  const variant = inProps.variant || buttonGroup.variant || variantProp;
  const size = inProps.size || buttonGroup.size || sizeProp;
  const color = inProps.color || buttonGroup.color || colorProp;
  const disabled = (inProps.loading || inProps.disabled) ?? (buttonGroup.disabled || loading || disabledProp);
  const buttonRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(buttonRef, ref);
  const {
    focusVisible,
    setFocusVisible,
    getRootProps
  } = (0, _useButton.useButton)({
    ...props,
    disabled,
    rootRef: handleRef
  });
  const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
    color: color,
    thickness: {
      sm: 2,
      md: 3,
      lg: 4
    }[size] || 3
  });
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current?.focus();
    }
  }), [setFocusVisible]);
  const ownerState = {
    ...props,
    color,
    fullWidth,
    variant,
    size,
    focusVisible,
    loading,
    loadingPosition,
    disabled
  };
  const classes = useUtilityClasses(ownerState);
  const handleClick = event => {
    let onClick = props.onClick;
    if (typeof slotProps.root === 'function') {
      onClick = slotProps.root(ownerState).onClick;
    } else if (slotProps.root) {
      onClick = slotProps.root.onClick;
    }
    onClick?.(event);
    if (toggleButtonGroup) {
      toggleButtonGroup.onClick?.(event, props.value);
    }
  };
  let ariaPressed = props['aria-pressed'];
  if (typeof slotProps.root === 'function') {
    ariaPressed = slotProps.root(ownerState)['aria-pressed'];
  } else if (slotProps.root) {
    ariaPressed = slotProps.root['aria-pressed'];
  }
  if (toggleButtonGroup?.value) {
    if (Array.isArray(toggleButtonGroup.value)) {
      ariaPressed = toggleButtonGroup.value.includes(props.value);
    } else {
      ariaPressed = toggleButtonGroup.value === props.value;
    }
  }
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: classes.root,
    elementType: ButtonRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState,
    additionalProps: {
      onClick: handleClick,
      'aria-pressed': ariaPressed
    }
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: ButtonStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: ButtonEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotLoadingIndicatorCenter, loadingIndicatorCenterProps] = (0, _useSlot.default)('loadingIndicatorCenter', {
    className: classes.loadingIndicatorCenter,
    elementType: ButtonLoadingCenter,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
    ...rootProps,
    children: [(startDecorator || loading && loadingPosition === 'start') && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, {
      ...startDecoratorProps,
      children: loading && loadingPosition === 'start' ? loadingIndicator : startDecorator
    }), children, loading && loadingPosition === 'center' && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotLoadingIndicatorCenter, {
      ...loadingIndicatorCenterProps,
      children: loadingIndicator
    }), (endDecorator || loading && loadingPosition === 'end') && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, {
      ...endDecoratorProps,
      children: loading && loadingPosition === 'end' ? loadingIndicator : endDecorator
    })]
  });
});
process.env.NODE_ENV !== "production" ? Button.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.shape({
      focusVisible: _propTypes.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: _propTypes.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
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
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: _propTypes.default.bool,
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading: _propTypes.default.bool,
  /**
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress />
   */
  loadingIndicator: _propTypes.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: _propTypes.default.oneOf(['center', 'end', 'start']),
  /**
   * @ignore
   */
  onClick: _propTypes.default.func,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['sm', 'md', 'lg']), _propTypes.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    endDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    loadingIndicatorCenter: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    startDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    endDecorator: _propTypes.default.elementType,
    loadingIndicatorCenter: _propTypes.default.elementType,
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
   * @default 0
   */
  tabIndex: _propTypes.default.number,
  /**
   * @ignore
   */
  value: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;

// @ts-ignore internal logic for ToggleButtonGroup
Button.muiName = 'Button';
var _default = exports.default = Button;