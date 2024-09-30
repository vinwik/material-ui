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
var _utils = require("@mui/utils");
var _base = require("@mui/base");
var _styles = require("../styles");
var _radioGroupClasses = require("./radioGroupClasses");
var _RadioGroupContext = _interopRequireDefault(require("./RadioGroupContext"));
var _FormControlContext = _interopRequireDefault(require("../FormControl/FormControlContext"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    orientation,
    size,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', orientation, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _radioGroupClasses.getRadioGroupUtilityClass, {});
};
const RadioGroupRoot = (0, _styles.styled)('div', {
  name: 'JoyRadioGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => ({
  ...(ownerState.size === 'sm' && {
    '--RadioGroup-gap': '0.625rem'
  }),
  ...(ownerState.size === 'md' && {
    '--RadioGroup-gap': '0.875rem'
  }),
  ...(ownerState.size === 'lg' && {
    '--RadioGroup-gap': '1.25rem'
  }),
  display: 'flex',
  margin: 'var(--unstable_RadioGroup-margin)',
  flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column',
  borderRadius: theme.vars.radius.sm,
  ...theme.variants[ownerState.variant]?.[ownerState.color]
}));
/**
 *
 * Demos:
 *
 * - [Radio](https://mui.com/joy-ui/react-radio-button/)
 *
 * API:
 *
 * - [RadioGroup API](https://mui.com/joy-ui/api/radio-group/)
 */
const RadioGroup = /*#__PURE__*/React.forwardRef(function RadioGroup(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyRadioGroup'
  });
  const {
    className,
    component,
    children,
    name: nameProp,
    defaultValue,
    disableIcon = false,
    overlay,
    value: valueProp,
    onChange,
    color = 'neutral',
    variant = 'plain',
    size: sizeProp = 'md',
    orientation = 'vertical',
    role = 'radiogroup',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [value, setValueState] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue,
    name: 'RadioGroup'
  });
  const formControl = React.useContext(_FormControlContext.default);
  const size = inProps.size || formControl?.size || sizeProp;
  const ownerState = {
    orientation,
    size,
    variant,
    color,
    role,
    ...props
  };
  const classes = useUtilityClasses(ownerState);
  const name = (0, _utils.unstable_useId)(nameProp);
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
  const contextValue = React.useMemo(() => ({
    disableIcon,
    overlay,
    orientation,
    size,
    name,
    value,
    onChange: event => {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event);
      }
    }
  }), [disableIcon, name, onChange, overlay, orientation, setValueState, size, value]);
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: RadioGroupRoot,
    externalForwardedProps: {
      ...other,
      component,
      slots,
      slotProps
    },
    ownerState,
    additionalProps: {
      as: component,
      role,
      // The `id` is just for the completeness, it does not have any effect because RadioGroup (div) is non-labelable element
      // MDN: "If it is not a labelable element, then the for attribute has no effect"
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
      id: formControl?.htmlFor,
      'aria-labelledby': formControl?.labelId,
      'aria-describedby': formControl?.['aria-describedby']
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioGroupContext.default.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
      ...rootProps,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlContext.default.Provider, {
        value: undefined,
        children: React.Children.map(children, (child, index) => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
          // to let Radio knows when to apply margin(Inline|Block)Start
          ...(index === 0 && {
            'data-first-child': ''
          }),
          ...(index === React.Children.count(children) - 1 && {
            'data-last-child': ''
          }),
          'data-parent': 'RadioGroup'
        }) : child)
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? RadioGroup.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
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
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: _propTypes.default.any,
  /**
   * The radio's `disabledIcon` prop. If specified, the value is passed down to every radios under this element.
   * @default false
   */
  disableIcon: _propTypes.default.bool,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: _propTypes.default.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: _propTypes.default.func,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  /**
   * The radio's `overlay` prop. If specified, the value is passed down to every radios under this element.
   * @default false
   */
  overlay: _propTypes.default.bool,
  /**
   * @ignore
   */
  role: _propTypes.default /* @typescript-to-proptypes-ignore */.string,
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
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: _propTypes.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = RadioGroup;