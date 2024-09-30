"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("@mui/utils");
var _base = require("@mui/base");
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _toggleButtonGroupClasses = require("./toggleButtonGroupClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _ButtonGroup = require("../ButtonGroup/ButtonGroup");
var _ButtonGroupContext = _interopRequireDefault(require("../ButtonGroup/ButtonGroupContext"));
var _ToggleButtonGroupContext = _interopRequireDefault(require("./ToggleButtonGroupContext"));
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
  return (0, _base.unstable_composeClasses)(slots, _toggleButtonGroupClasses.getToggleButtonGroupUtilityClass, {});
};
const ToggleButtonGroupRoot = (0, _styled.default)(_ButtonGroup.StyledButtonGroup, {
  name: 'JoyToggleButtonGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
/**
 * ⚠️ ToggleButtonGroup must have Button and/or IconButton as direct children.
 *
 * Demos:
 *
 * - [Toggle Button Group](https://mui.com/joy-ui/react-toggle-button-group/)
 *
 * API:
 *
 * - [ToggleButtonGroup API](https://mui.com/joy-ui/api/toggle-button-group/)
 */
const ToggleButtonGroup = /*#__PURE__*/React.forwardRef(function ToggleButtonGroup(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyToggleButtonGroup'
  });
  const {
    buttonFlex,
    className,
    component = 'div',
    disabled = false,
    size = 'md',
    color = 'neutral',
    variant = 'outlined',
    children,
    onChange,
    orientation = 'horizontal',
    slots = {},
    slotProps = {},
    spacing = 0,
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    buttonFlex,
    color,
    component,
    orientation,
    spacing,
    size,
    variant
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
    elementType: ToggleButtonGroupRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      role: 'group'
    }
  });
  const buttonGroupContext = React.useMemo(() => ({
    variant,
    color,
    size,
    disabled
  }), [variant, color, size, disabled]);
  const handleChange = React.useCallback((event, buttonValue) => {
    if (!onChange || buttonValue === undefined) {
      return;
    }
    if (Array.isArray(value)) {
      const set = new Set(value);
      if (set.has(buttonValue)) {
        set.delete(buttonValue);
      } else {
        set.add(buttonValue);
      }
      onChange(event, Array.from(set));
    } else {
      onChange(event, value === buttonValue ? null : buttonValue);
    }
  }, [value, onChange]);
  const toggleButtonGroupContext = React.useMemo(() => ({
    onClick: (event, childValue) => {
      if (!event.defaultPrevented) {
        handleChange(event, childValue);
      }
    },
    value
  }), [handleChange, value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleButtonGroupContext.default.Provider, {
      value: toggleButtonGroupContext,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonGroupContext.default.Provider, {
        value: buttonGroupContext,
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
            extraProps.role = 'presentation';
            extraProps.component = 'span';
          }
          if (index === 0) {
            extraProps['data-first-child'] = '';
          }
          if (index === React.Children.count(children) - 1) {
            extraProps['data-last-child'] = '';
          }
          return /*#__PURE__*/React.cloneElement(child, extraProps);
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? ToggleButtonGroup.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The flex value of the button.
   * @example buttonFlex={1} will set flex: '1 1 auto' on each button (stretch the button to equally fill the available space).
   */
  buttonFlex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Used to render icon or text elements inside the ButtonGroup if `src` is not set.
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
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'info', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * If `true`, all the buttons will be disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange: _propTypes.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
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
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])), _propTypes.default.number, _propTypes.default.shape({
    lg: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    md: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    sm: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    xl: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    xs: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }), _propTypes.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The currently selected value within the group or an array of selected values.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = ToggleButtonGroup;