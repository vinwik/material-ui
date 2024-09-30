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
var _utils = require("@mui/utils");
var _base = require("@mui/base");
var _useSwitch = require("@mui/base/useSwitch");
var _styles = require("../styles");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _checkboxClasses = _interopRequireWildcard(require("./checkboxClasses"));
var _Check = _interopRequireDefault(require("../internal/svg-icons/Check"));
var _HorizontalRule = _interopRequireDefault(require("../internal/svg-icons/HorizontalRule"));
var _Typography = require("../Typography/Typography");
var _FormControlContext = _interopRequireDefault(require("../FormControl/FormControlContext"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    checked,
    disabled,
    disableIcon,
    focusVisible,
    color,
    variant,
    size,
    indeterminate
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', focusVisible && 'focusVisible', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`],
    checkbox: ['checkbox', checked && 'checked', indeterminate && 'indeterminate', disabled && 'disabled' // disabled class is necessary for displaying global variant
    ],
    action: ['action', checked && 'checked', disableIcon && disabled && 'disabled',
    // add disabled class to action element for displaying global variant
    focusVisible && 'focusVisible'],
    input: ['input'],
    label: ['label']
  };
  return (0, _base.unstable_composeClasses)(slots, _checkboxClasses.getCheckboxUtilityClass, {});
};
const CheckboxRoot = (0, _styles.styled)('span', {
  name: 'JoyCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => ({
  '--Icon-fontSize': 'var(--Checkbox-size)',
  ...(ownerState.size === 'sm' && {
    '--Checkbox-size': '1rem',
    '& ~ *': {
      '--FormHelperText-margin': '0 0 0 1.5rem'
    },
    fontSize: theme.vars.fontSize.sm,
    gap: 'var(--Checkbox-gap, 0.5rem)'
  }),
  ...(ownerState.size === 'md' && {
    '--Checkbox-size': '1.25rem',
    '& ~ *': {
      '--FormHelperText-margin': '0.25rem 0 0 1.875rem'
    },
    fontSize: theme.vars.fontSize.md,
    gap: 'var(--Checkbox-gap, 0.625rem)'
  }),
  ...(ownerState.size === 'lg' && {
    '--Checkbox-size': '1.5rem',
    '& ~ *': {
      '--FormHelperText-margin': '0.375rem 0 0 2.25rem'
    },
    fontSize: theme.vars.fontSize.lg,
    gap: 'var(--Checkbox-gap, 0.75rem)'
  }),
  position: ownerState.overlay ? 'initial' : 'relative',
  display: 'inline-flex',
  fontFamily: theme.vars.fontFamily.body,
  lineHeight: 'var(--Checkbox-size)',
  color: theme.vars.palette.text.primary,
  [`&.${_checkboxClasses.default.disabled}`]: {
    color: theme.variants.plainDisabled?.[ownerState.color]?.color
  },
  ...(ownerState.disableIcon && {
    color: theme.variants[ownerState.variant]?.[ownerState.color]?.color,
    [`&.${_checkboxClasses.default.disabled}`]: {
      color: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]?.color
    }
  })
}));
const CheckboxCheckbox = (0, _styles.styled)('span', {
  name: 'JoyCheckbox',
  slot: 'Checkbox',
  overridesResolver: (props, styles) => styles.checkbox
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[`${ownerState.variant}`]?.[ownerState.color];
  return [{
    '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
    boxSizing: 'border-box',
    borderRadius: `min(${theme.vars.radius.sm}, 0.25rem)`,
    width: 'var(--Checkbox-size)',
    height: 'var(--Checkbox-size)',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    ...(ownerState.disableIcon && {
      display: 'contents'
    }),
    [`&.${_checkboxClasses.default.checked}, &.${_checkboxClasses.default.indeterminate}`]: {
      '--Icon-color': 'currentColor'
    }
  }, ...(!ownerState.disableIcon ? [{
    ...variantStyle,
    backgroundColor: variantStyle?.backgroundColor ?? theme.vars.palette.background.surface
  }, {
    '&:hover': {
      '@media (hover: hover)': theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color]
    }
  }, {
    '&:active': theme.variants[`${ownerState.variant}Active`]?.[ownerState.color]
  }, {
    [`&.${_checkboxClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]
  }] : [])];
});
const CheckboxAction = (0, _styles.styled)('span', {
  name: 'JoyCheckbox',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => [{
  borderRadius: `var(--Checkbox-actionRadius, ${ownerState.overlay ? 'var(--unstable_actionRadius, inherit)' : 'inherit'})`,
  textAlign: 'left',
  // prevent text-align inheritance
  position: 'absolute',
  top: 'calc(-1 * var(--variant-borderWidth, 0px))',
  // clickable on the border and focus outline does not move when checked/unchecked
  left: 'calc(-1 * var(--variant-borderWidth, 0px))',
  bottom: 'calc(-1 * var(--variant-borderWidth, 0px))',
  right: 'calc(-1 * var(--variant-borderWidth, 0px))',
  zIndex: 1,
  // The action element usually cover the area of nearest positioned parent
  [theme.focus.selector]: theme.focus.default
}, ...(ownerState.disableIcon ? [theme.variants[ownerState.variant]?.[ownerState.color], {
  '&:hover': theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color]
}, {
  '&:active': theme.variants[`${ownerState.variant}Active`]?.[ownerState.color]
}, {
  [`&.${_checkboxClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]
}] : [])]);
const CheckboxInput = (0, _styles.styled)('input', {
  name: 'JoyCheckbox',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input
})(() => ({
  margin: 0,
  opacity: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  cursor: 'pointer'
}));
const CheckboxLabel = (0, _styles.styled)('label', {
  name: 'JoyCheckbox',
  slot: 'Label',
  overridesResolver: (props, styles) => styles.label
})(({
  ownerState
}) => ({
  flex: 1,
  minWidth: 0,
  ...(ownerState.disableIcon && {
    zIndex: 1,
    // label should stay on top of the action.
    pointerEvents: 'none' // makes hover ineffect.
  })
}));
const defaultCheckedIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Check.default, {});
const defaultIndeterminateIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_HorizontalRule.default, {});
/**
 *
 * Demos:
 *
 * - [Checkbox](https://mui.com/joy-ui/react-checkbox/)
 *
 * API:
 *
 * - [Checkbox API](https://mui.com/joy-ui/api/checkbox/)
 */
const Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyCheckbox'
  });
  const {
    checked: checkedProp,
    uncheckedIcon,
    checkedIcon = defaultCheckedIcon,
    label,
    defaultChecked,
    disabled: disabledExternalProp,
    disableIcon = false,
    overlay,
    id: idOverride,
    indeterminate = false,
    indeterminateIcon = defaultIndeterminateIcon,
    name,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
    value,
    color: colorProp,
    variant: variantProp,
    size: sizeProp = 'md',
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const formControl = React.useContext(_FormControlContext.default);
  const disabledProp = inProps.disabled ?? formControl?.disabled ?? disabledExternalProp;
  const size = inProps.size ?? formControl?.size ?? sizeProp;
  if (process.env.NODE_ENV !== 'production') {
    const registerEffect = formControl?.registerEffect;
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return undefined;
    }, [registerEffect]);
  }
  const id = (0, _utils.unstable_useId)(idOverride ?? formControl?.htmlFor);
  const useCheckboxProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible
  } = (0, _useSwitch.useSwitch)(useCheckboxProps);
  const isCheckboxActive = checked || indeterminate;
  const activeVariant = variantProp || 'solid';
  const inactiveVariant = variantProp || 'outlined';
  const variant = isCheckboxActive ? activeVariant : inactiveVariant;
  const color = inProps.color || (formControl?.error ? 'danger' : formControl?.color ?? colorProp);
  const activeColor = color || 'primary';
  const inactiveColor = color || 'neutral';
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableIcon,
    overlay,
    focusVisible,
    color: isCheckboxActive ? activeColor : inactiveColor,
    variant,
    size
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
    className: classes.root,
    elementType: CheckboxRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotCheckbox, checkboxProps] = (0, _useSlot.default)('checkbox', {
    className: classes.checkbox,
    elementType: CheckboxCheckbox,
    externalForwardedProps,
    ownerState
  });
  const [SlotAction, actionProps] = (0, _useSlot.default)('action', {
    className: classes.action,
    elementType: CheckboxAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = (0, _useSlot.default)('input', {
    additionalProps: {
      id,
      name,
      value,
      readOnly,
      role: undefined,
      required: required ?? formControl?.required,
      'aria-describedby': formControl?.['aria-describedby'],
      ...(indeterminate && {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked#values
        'aria-checked': 'mixed'
      })
    },
    className: classes.input,
    elementType: CheckboxInput,
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  const [SlotLabel, labelProps] = (0, _useSlot.default)('label', {
    additionalProps: {
      htmlFor: id
    },
    className: classes.label,
    elementType: CheckboxLabel,
    externalForwardedProps,
    ownerState
  });
  let icon = uncheckedIcon;
  if (disableIcon) {
    icon = null;
  } else if (indeterminate) {
    icon = indeterminateIcon;
  } else if (checked) {
    icon = checkedIcon;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
    ...rootProps,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotCheckbox, {
      ...checkboxProps,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SlotAction, {
        ...actionProps,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotInput, {
          ...inputProps
        })
      }), icon]
    }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.TypographyNestedContext.Provider, {
      value: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotLabel, {
        ...labelProps,
        children: label
      })
    })]
  });
});
process.env.NODE_ENV !== "production" ? Checkbox.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckIcon />
   */
  checkedIcon: _propTypes.default.node,
  /**
   * @ignore
   */
  children: _propTypes.default.node,
  /**
   * Class name applied to the root element.
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
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: _propTypes.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: _propTypes.default.bool,
  /**
   * If `true`, the checked icon is removed and the selected variant is applied on the `action` element instead.
   * @default false
   */
  disableIcon: _propTypes.default.bool,
  /**
   * @ignore
   */
  id: _propTypes.default.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: _propTypes.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateIcon />
   */
  indeterminateIcon: _propTypes.default.node,
  /**
   * The label element next to the checkbox.
   */
  label: _propTypes.default.node,
  /**
   * The `name` attribute of the input.
   */
  name: _propTypes.default.string,
  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: _propTypes.default.func,
  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,
  /**
   * @ignore
   */
  onFocusVisible: _propTypes.default.func,
  /**
   * If `true`, the root element's position is set to initial which allows the action area to fill the nearest positioned parent.
   * This prop is useful for composing Checkbox with ListItem component.
   * @default false
   */
  overlay: _propTypes.default.bool,
  /**
   * If `true`, the component is read only.
   */
  readOnly: _propTypes.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: _propTypes.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    action: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    checkbox: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    input: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    label: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    action: _propTypes.default.elementType,
    checkbox: _propTypes.default.elementType,
    input: _propTypes.default.elementType,
    label: _propTypes.default.elementType,
    root: _propTypes.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The icon when `checked` is false.
   */
  uncheckedIcon: _propTypes.default.node,
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: _propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid'])
} : void 0;
var _default = exports.default = Checkbox;