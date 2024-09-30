"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _utils = require("@mui/utils");
var _Popper = require("@mui/base/Popper");
var _useSelect = require("@mui/base/useSelect");
var _composeClasses = require("@mui/base/composeClasses");
var _List = require("../List/List");
var _ListProvider = _interopRequireWildcard(require("../List/ListProvider"));
var _GroupListContext = _interopRequireDefault(require("../List/GroupListContext"));
var _Unfold2 = _interopRequireDefault(require("../internal/svg-icons/Unfold"));
var _styles = require("../styles");
var _styleUtils = require("../styles/styleUtils");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _selectClasses = _interopRequireWildcard(require("./selectClasses"));
var _FormControlContext = _interopRequireDefault(require("../FormControl/FormControlContext"));
var _variantColorInheritance = require("../styles/variantColorInheritance");
var _jsxRuntime = require("react/jsx-runtime");
var _Unfold;
function defaultRenderValue(selectedOptions) {
  if (Array.isArray(selectedOptions)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
      children: selectedOptions.map(o => o.label).join(', ')
    });
  }
  return selectedOptions?.label ?? '';
}
const defaultModifiers = [{
  name: 'offset',
  options: {
    offset: [0, 4]
  }
}, {
  // popper will have the same width as root element when open
  name: 'equalWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({
    state
  }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  }
}];
const useUtilityClasses = ownerState => {
  const {
    color,
    disabled,
    focusVisible,
    size,
    variant,
    open,
    multiple
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', open && 'expanded', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`, multiple && 'multiple'],
    button: ['button'],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator'],
    indicator: ['indicator', open && 'expanded'],
    listbox: ['listbox', open && 'expanded', disabled && 'disabled']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _selectClasses.getSelectUtilityClass, {});
};
const SelectRoot = (0, _styles.styled)('div', {
  name: 'JoySelect',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[`${ownerState.variant}`]?.[ownerState.color];
  const {
    borderRadius
  } = (0, _styleUtils.resolveSxValue)({
    theme,
    ownerState
  }, ['borderRadius']);
  return [{
    '--Select-radius': theme.vars.radius.sm,
    '--Select-gap': '0.5rem',
    '--Select-placeholderOpacity': 0.64,
    '--Select-decoratorColor': theme.vars.palette.text.icon,
    '--Select-focusedThickness': theme.vars.focus.thickness,
    '--Select-focusedHighlight': theme.vars.palette[ownerState.color === 'neutral' ? 'primary' : ownerState.color]?.[500],
    '&:not([data-inverted-colors="false"])': {
      ...(ownerState.instanceColor && {
        '--_Select-focusedHighlight': theme.vars.palette[ownerState.instanceColor === 'neutral' ? 'primary' : ownerState.instanceColor]?.[500]
      }),
      '--Select-focusedHighlight': theme.vars.palette.focusVisible
    },
    '--Select-indicatorColor': variantStyle?.backgroundColor ? variantStyle?.color : theme.vars.palette.text.tertiary,
    ...(ownerState.size === 'sm' && {
      '--Select-minHeight': '2rem',
      '--Select-paddingInline': '0.5rem',
      '--Select-decoratorChildHeight': 'min(1.5rem, var(--Select-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl
    }),
    ...(ownerState.size === 'md' && {
      '--Select-minHeight': '2.25rem',
      '--Select-paddingInline': '0.75rem',
      '--Select-decoratorChildHeight': 'min(1.75rem, var(--Select-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }),
    ...(ownerState.size === 'lg' && {
      '--Select-minHeight': '2.75rem',
      '--Select-paddingInline': '1rem',
      '--Select-decoratorChildHeight': 'min(2.375rem, var(--Select-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }),
    // variables for controlling child components
    '--Select-decoratorChildOffset': 'min(calc(var(--Select-paddingInline) - (var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2), var(--Select-paddingInline))',
    '--_Select-paddingBlock': 'max((var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2, 0px)',
    '--Select-decoratorChildRadius': 'max(var(--Select-radius) - var(--variant-borderWidth, 0px) - var(--_Select-paddingBlock), min(var(--_Select-paddingBlock) + var(--variant-borderWidth, 0px), var(--Select-radius) / 2))',
    '--Button-minHeight': 'var(--Select-decoratorChildHeight)',
    '--Button-paddingBlock': '0px',
    // to ensure that the height of the button is equal to --Button-minHeight
    '--IconButton-size': 'var(--Select-decoratorChildHeight)',
    '--Button-radius': 'var(--Select-decoratorChildRadius)',
    '--IconButton-radius': 'var(--Select-decoratorChildRadius)',
    boxSizing: 'border-box',
    ...(ownerState.variant !== 'plain' && {
      boxShadow: theme.shadow.xs
    }),
    minWidth: 0,
    minHeight: 'var(--Select-minHeight)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 'var(--Select-radius)',
    cursor: 'pointer',
    ...(!variantStyle?.backgroundColor && {
      backgroundColor: theme.vars.palette.background.surface
    }),
    ...(ownerState.size && {
      paddingBlock: {
        sm: 2,
        md: 3,
        lg: 4
      }[ownerState.size] // the padding-block act as a minimum spacing between content and root element
    }),
    paddingInline: `var(--Select-paddingInline)`,
    ...theme.typography[`body-${ownerState.size}`],
    ...variantStyle,
    '&::before': {
      boxSizing: 'border-box',
      content: '""',
      display: 'block',
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: 'inherit',
      margin: 'calc(var(--variant-borderWidth, 0px) * -1)' // for outlined variant
    },
    [`&.${_selectClasses.default.focusVisible}`]: {
      '--Select-indicatorColor': variantStyle?.color,
      '&::before': {
        boxShadow: `inset 0 0 0 var(--Select-focusedThickness) var(--Select-focusedHighlight)`
      }
    },
    [`&.${_selectClasses.default.disabled}`]: {
      '--Select-indicatorColor': 'inherit'
    }
  }, {
    '&:hover': theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color],
    [`&.${_selectClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]
  }, borderRadius !== undefined && {
    '--Select-radius': borderRadius
  }];
});
const SelectButton = (0, _styles.styled)('button', {
  name: 'JoySelect',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({
  ownerState
}) => ({
  // reset user-agent button style
  border: 0,
  outline: 0,
  background: 'none',
  padding: 0,
  fontSize: 'inherit',
  color: 'inherit',
  alignSelf: 'stretch',
  // make children horizontally aligned
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  fontFamily: 'inherit',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  // prevent the scrollbar for long text
  ...((ownerState.value === null || ownerState.value === undefined) && {
    opacity: 'var(--Select-placeholderOpacity)'
  }),
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    // TODO: use https://caniuse.com/?search=inset when ~94%
    top: 'calc(-1 * var(--variant-borderWidth, 0px))',
    left: 'calc(-1 * var(--variant-borderWidth, 0px))',
    right: 'calc(-1 * var(--variant-borderWidth, 0px))',
    bottom: 'calc(-1 * var(--variant-borderWidth, 0px))',
    borderRadius: 'var(--Select-radius)'
  }
}));
const SelectListbox = (0, _styles.styled)(_List.StyledList, {
  name: 'JoySelect',
  slot: 'Listbox',
  overridesResolver: (props, styles) => styles.listbox
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[ownerState.variant]?.[ownerState.color];
  return {
    '--focus-outline-offset': `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    '--ListItem-stickyBackground': variantStyle?.backgroundColor || variantStyle?.background || theme.vars.palette.background.popup,
    '--ListItem-stickyTop': 'calc(var(--List-padding, var(--ListDivider-gap)) * -1)',
    // negative amount of the List's padding block
    ..._ListProvider.scopedVariables,
    minWidth: 'max-content',
    // prevent options from shrinking if some of them is wider than the Select's root.
    maxHeight: '44vh',
    // the best value from what I tried so far which does not cause screen flicker when listbox is open.
    overflow: 'auto',
    outline: 0,
    boxShadow: theme.shadow.md,
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
    // `unstable_popup-zIndex` is a private variable that lets other component, for example Modal, to override the z-index so that the listbox can be displayed above the Modal.
    zIndex: `var(--unstable_popup-zIndex, ${theme.vars.zIndex.popup})`,
    ...(!variantStyle?.backgroundColor && {
      backgroundColor: theme.vars.palette.background.popup
    })
  };
});
const SelectStartDecorator = (0, _styles.styled)('span', {
  name: 'JoySelect',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})({
  '--Button-margin': '0 0 0 calc(var(--Select-decoratorChildOffset) * -1)',
  '--IconButton-margin': '0 0 0 calc(var(--Select-decoratorChildOffset) * -1)',
  '--Icon-margin': '0 0 0 calc(var(--Select-paddingInline) / -4)',
  display: 'inherit',
  alignItems: 'center',
  color: 'var(--Select-decoratorColor)',
  marginInlineEnd: 'var(--Select-gap)'
});
const SelectEndDecorator = (0, _styles.styled)('span', {
  name: 'JoySelect',
  slot: 'EndDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})({
  '--Button-margin': '0 calc(var(--Select-decoratorChildOffset) * -1) 0 0',
  '--IconButton-margin': '0 calc(var(--Select-decoratorChildOffset) * -1) 0 0',
  '--Icon-margin': '0 calc(var(--Select-paddingInline) / -4) 0 0',
  display: 'inherit',
  alignItems: 'center',
  color: 'var(--Select-decoratorColor)',
  marginInlineStart: 'var(--Select-gap)'
});
const SelectIndicator = (0, _styles.styled)('span', {
  name: 'JoySelect',
  slot: 'Indicator'
})(({
  ownerState,
  theme
}) => ({
  ...(ownerState.size === 'sm' && {
    '--Icon-fontSize': theme.vars.fontSize.lg
  }),
  ...(ownerState.size === 'md' && {
    '--Icon-fontSize': theme.vars.fontSize.xl
  }),
  ...(ownerState.size === 'lg' && {
    '--Icon-fontSize': theme.vars.fontSize.xl2
  }),
  '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
  display: 'inherit',
  alignItems: 'center',
  marginInlineStart: 'var(--Select-gap)',
  marginInlineEnd: 'calc(var(--Select-paddingInline) / -4)',
  [`.${_selectClasses.default.endDecorator} + &`]: {
    marginInlineStart: 'calc(var(--Select-gap) / 2)'
  },
  [`&.${_selectClasses.default.expanded}, .${_selectClasses.default.disabled} > &`]: {
    '--Icon-color': 'currentColor'
  }
}));
/**
 *
 * Demos:
 *
 * - [Select](https://mui.com/joy-ui/react-select/)
 *
 * API:
 *
 * - [Select API](https://mui.com/joy-ui/api/select/)
 */
const Select = /*#__PURE__*/React.forwardRef(function Select(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoySelect'
  });
  const {
    action,
    autoFocus,
    children,
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledExternalProp,
    getSerializedValue,
    placeholder,
    listboxId,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    onClose,
    renderValue: renderValueProp,
    required = false,
    value: valueProp,
    size: sizeProp = 'md',
    variant = 'outlined',
    color: colorProp = 'neutral',
    startDecorator,
    endDecorator,
    indicator = _Unfold || (_Unfold = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Unfold2.default, {})),
    // props to forward to the button (all handlers should go through slotProps.button)
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    id,
    name,
    multiple = false,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const formControl = React.useContext(_FormControlContext.default);
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
  const disabledProp = inProps.disabled ?? formControl?.disabled ?? disabledExternalProp;
  const size = inProps.size ?? formControl?.size ?? sizeProp;
  const color = inProps.color ?? (formControl?.error ? 'danger' : formControl?.color ?? colorProp);
  const renderValue = renderValueProp ?? defaultRenderValue;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const rootRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, rootRef);
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      buttonRef.current?.focus();
    }
  }), []);
  React.useEffect(() => {
    setAnchorEl(rootRef.current);
  }, []);
  React.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const handleOpenChange = React.useCallback(isOpen => {
    onListboxOpenChange?.(isOpen);
    if (!isOpen) {
      onClose?.();
    }
  }, [onClose, onListboxOpenChange]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getHiddenInputProps,
    getOptionMetadata,
    open: listboxOpen,
    value
  } = (0, _useSelect.useSelect)({
    buttonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    getSerializedValue,
    listboxId,
    multiple,
    name,
    required,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpenProp,
    value: valueProp
  });
  const ownerState = {
    ...props,
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value,
    size,
    variant,
    color
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    slots,
    slotProps
  };
  const selectedOption = React.useMemo(() => {
    let selectedOptionsMetadata;
    if (multiple) {
      selectedOptionsMetadata = value.map(v => getOptionMetadata(v)).filter(o => o !== undefined);
    } else {
      selectedOptionsMetadata = getOptionMetadata(value) ?? null;
    }
    return selectedOptionsMetadata;
  }, [getOptionMetadata, value, multiple]);
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref: handleRef,
    className: classes.root,
    elementType: SelectRoot,
    externalForwardedProps,
    ownerState: ownerState
  });
  const [SlotButton, buttonProps] = (0, _useSlot.default)('button', {
    additionalProps: {
      'aria-describedby': ariaDescribedby ?? formControl?.['aria-describedby'],
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby ?? formControl?.labelId,
      'aria-required': required ? 'true' : undefined,
      id: id ?? formControl?.htmlFor,
      name
    },
    className: classes.button,
    elementType: SelectButton,
    externalForwardedProps,
    getSlotProps: getButtonProps,
    ownerState: ownerState
  });
  const [SlotListbox, listboxProps] = (0, _useSlot.default)('listbox', {
    additionalProps: {
      anchorEl,
      open: listboxOpen,
      placement: 'bottom',
      keepMounted: true
    },
    className: classes.listbox,
    elementType: SelectListbox,
    externalForwardedProps,
    getSlotProps: getListboxProps,
    ownerState: {
      ...ownerState,
      nesting: false,
      row: false,
      wrap: false
    },
    getSlotOwnerState: mergedProps => ({
      size: mergedProps.size || size,
      variant: mergedProps.variant || variant,
      color: mergedProps.color || (!mergedProps.disablePortal ? colorProp : color),
      disableColorInversion: !mergedProps.disablePortal
    })
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: SelectStartDecorator,
    externalForwardedProps,
    ownerState: ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: SelectEndDecorator,
    externalForwardedProps,
    ownerState: ownerState
  });
  const [SlotIndicator, indicatorProps] = (0, _useSlot.default)('indicator', {
    className: classes.indicator,
    elementType: SelectIndicator,
    externalForwardedProps,
    ownerState: ownerState
  });

  // Wait for `listboxProps` because `slotProps.listbox` could be a function.
  const modifiers = React.useMemo(() => [...defaultModifiers, ...(listboxProps.modifiers || [])], [listboxProps.modifiers]);
  let displayValue = placeholder;
  if (Array.isArray(selectedOption) && selectedOption.length > 0 || !Array.isArray(selectedOption) && !!selectedOption) {
    displayValue = renderValue(selectedOption);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
      ...rootProps,
      children: [startDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, {
        ...startDecoratorProps,
        children: startDecorator
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotButton, {
        ...buttonProps,
        children: displayValue
      }), endDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, {
        ...endDecoratorProps,
        children: endDecorator
      }), indicator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotIndicator, {
        ...indicatorProps,
        children: indicator
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ...getHiddenInputProps()
      })]
    }), anchorEl && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotListbox, {
      ...listboxProps,
      className: (0, _clsx.default)(listboxProps.className)
      // @ts-ignore internal logic (too complex to typed PopperOwnProps to SlotListbox but this should be removed when we have `usePopper`)
      ,
      modifiers: modifiers,
      ...(!props.slots?.listbox && {
        as: _Popper.Popper,
        slots: {
          root: listboxProps.as || 'ul'
        }
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_useSelect.SelectProvider, {
        value: contextValue,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_variantColorInheritance.VariantColorProvider, {
          variant: variant,
          color: colorProp,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupListContext.default.Provider, {
            value: "select",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListProvider.default, {
              nested: true,
              children: children
            })
          })
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" ? Select.propTypes /* remove-proptypes */ = {
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
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: _propTypes.default.bool,
  /**
   * @ignore
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
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: _propTypes.default.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: _propTypes.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * Trailing adornment for the select.
   */
  endDecorator: _propTypes.default.node,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: _propTypes.default.func,
  /**
   * The indicator(*) for the select.
   *    ________________
   *   [ value        * ]
   *    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
   */
  indicator: _propTypes.default.node,
  /**
   * `id` attribute of the listbox element.
   * Also used to derive the `id` attributes of options.
   */
  listboxId: _propTypes.default.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: _propTypes.default.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   * This affects the type of the `value`, `defaultValue`, and `onChange` props.
   */
  multiple: _propTypes.default.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: _propTypes.default.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: _propTypes.default.func,
  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: _propTypes.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: _propTypes.default.func,
  /**
   * Text to show when there is no selected value.
   */
  placeholder: _propTypes.default.node,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: _propTypes.default.func,
  /**
   * If `true`, the Select cannot be empty when submitting form.
   * @default false
   */
  required: _propTypes.default.bool,
  /**
   * The size of the component.
   */
  size: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['sm', 'md', 'lg']), _propTypes.default.string]),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    button: _propTypes.default.elementType,
    endDecorator: _propTypes.default.elementType,
    indicator: _propTypes.default.elementType,
    listbox: _propTypes.default.elementType,
    root: _propTypes.default.elementType,
    startDecorator: _propTypes.default.elementType
  }),
  /**
   * Leading adornment for the select.
   */
  startDecorator: _propTypes.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: _propTypes.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = Select;