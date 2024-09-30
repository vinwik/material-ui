"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledAutocompleteOption = void 0;
var React = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("@mui/utils");
var _composeClasses = require("@mui/base/composeClasses");
var _ListItemButton = require("../ListItemButton/ListItemButton");
var _styles = require("../styles");
var _variantColorInheritance = require("../styles/variantColorInheritance");
var _autocompleteOptionClasses = require("./autocompleteOptionClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    color,
    variant
  } = ownerState;
  const slots = {
    root: ['root', color && `color${(0, _utils.unstable_capitalize)(color)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`]
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _autocompleteOptionClasses.getAutocompleteOptionUtilityClass, {});
};
const StyledAutocompleteOption = exports.StyledAutocompleteOption = (0, _styles.styled)(_ListItemButton.StyledListItemButton)(({
  theme,
  ownerState
}) => ({
  '&[aria-disabled="true"]': theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color],
  '&[aria-selected="true"]': {
    ...theme.variants[`${ownerState.variant}Active`]?.[ownerState.color],
    fontWeight: theme.vars.fontWeight.md
  }
}));
const AutocompleteOptionRoot = (0, _styles.styled)(StyledAutocompleteOption, {
  name: 'JoyAutocompleteOption',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/joy-ui/react-autocomplete/)
 *
 * API:
 *
 * - [AutocompleteOption API](https://mui.com/joy-ui/api/autocomplete-option/)
 */
const AutocompleteOption = /*#__PURE__*/React.forwardRef(function AutocompleteOption(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyAutocompleteOption'
  });
  const {
    children,
    component = 'li',
    color: colorProp = 'neutral',
    variant: variantProp = 'plain',
    className,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    variant = variantProp,
    color = colorProp
  } = (0, _variantColorInheritance.useVariantColor)(inProps.variant, inProps.color);
  const ownerState = {
    ...props,
    component,
    color,
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
    elementType: AutocompleteOptionRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role: 'option'
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? AutocompleteOption.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
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
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['contained', 'light', 'outlined', 'text']), _propTypes.default.string])
} : void 0;
var _default = exports.default = AutocompleteOption;