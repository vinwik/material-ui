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
var _composeClasses = require("@mui/base/composeClasses");
var _useOption = require("@mui/base/useOption");
var _utils = require("@mui/utils");
var _useList = require("@mui/base/useList");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _ListItemButton = require("../ListItemButton/ListItemButton");
var _styles = require("../styles");
var _variantColorInheritance = require("../styles/variantColorInheritance");
var _optionClasses = _interopRequireWildcard(require("./optionClasses"));
var _RowListContext = _interopRequireDefault(require("../List/RowListContext"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', highlighted && 'highlighted', selected && 'selected']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _optionClasses.getOptionUtilityClass, {});
};
const OptionRoot = (0, _styles.styled)(_ListItemButton.StyledListItemButton, {
  name: 'JoyOption',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color];
  return {
    [`&.${_optionClasses.default.highlighted}:not([aria-selected="true"])`]: {
      backgroundColor: variantStyle?.backgroundColor
    }
  };
});
const Option = /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(function Option(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyOption'
  });
  const {
    component = 'li',
    children,
    disabled = false,
    value,
    label,
    variant: variantProp = 'plain',
    color: colorProp = 'neutral',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const row = React.useContext(_RowListContext.default);
  const {
    variant = variantProp,
    color = colorProp
  } = (0, _variantColorInheritance.useVariantColor)(inProps.variant, inProps.color);
  const optionRef = React.useRef(null);
  const combinedRef = (0, _utils.unstable_useForkRef)(optionRef, ref);
  const computedLabel = label ?? (typeof children === 'string' ? children : optionRef.current?.innerText);
  const {
    getRootProps,
    selected,
    highlighted,
    index
  } = (0, _useOption.useOption)({
    disabled,
    label: computedLabel,
    value,
    rootRef: combinedRef
  });
  const ownerState = {
    ...props,
    disabled,
    selected,
    highlighted,
    index,
    component,
    variant,
    color,
    row
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
    getSlotProps: getRootProps,
    elementType: OptionRoot,
    externalForwardedProps,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: children
  });
}));

/**
 *
 * Demos:
 *
 * - [Select](https://mui.com/joy-ui/react-select/)
 *
 * API:
 *
 * - [Option API](https://mui.com/joy-ui/api/option/)
 */
const StableOption = /*#__PURE__*/React.forwardRef(function StableOption(props, ref) {
  // This wrapper component is used as a performance optimization.
  // `useOptionContextStabilizer` ensures that the context value
  // is stable across renders, so that the actual Option re-renders
  // only when it needs to.
  const {
    contextValue
  } = (0, _useOption.useOptionContextStabilizer)(props.value);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_useList.ListContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
      ...props,
      ref: ref
    })
  });
});
process.env.NODE_ENV !== "production" ? StableOption.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The option value.
   */
  value: _propTypes.default.any.isRequired,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = StableOption;