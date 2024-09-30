"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledAutocompleteListbox = void 0;
var React = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("@mui/utils");
var _composeClasses = require("@mui/base/composeClasses");
var _List = require("../List/List");
var _styles = require("../styles");
var _variantColorInheritance = require("../styles/variantColorInheritance");
var _autocompleteListboxClasses = require("./autocompleteListboxClasses");
var _listItemClasses = _interopRequireDefault(require("../ListItem/listItemClasses"));
var _listClasses = _interopRequireDefault(require("../List/listClasses"));
var _ListProvider = require("../List/ListProvider");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _autocompleteListboxClasses.getAutocompleteListboxUtilityClass, {});
};
const excludePopperProps = ({
  anchorEl,
  direction,
  disablePortal,
  keepMounted,
  modifiers,
  open,
  placement,
  popperOptions,
  popperRef,
  TransitionProps,
  ...other
}) => other;
const StyledAutocompleteListbox = exports.StyledAutocompleteListbox = (0, _styles.styled)(_List.StyledList)(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[ownerState.variant]?.[ownerState.color];
  return {
    '--focus-outline-offset': `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    '--ListItem-stickyBackground': variantStyle?.backgroundColor || variantStyle?.background || theme.vars.palette.background.popup,
    '--ListItem-stickyTop': 'calc(var(--List-padding, var(--ListDivider-gap)) * -1)',
    ..._ListProvider.scopedVariables,
    boxShadow: theme.shadow.md,
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
    ...(!variantStyle?.backgroundColor && {
      backgroundColor: theme.vars.palette.background.popup
    }),
    zIndex: theme.vars.zIndex.popup,
    overflow: 'auto',
    maxHeight: '40vh',
    position: 'relative',
    // to make sure that the listbox is positioned for grouped options to work.
    '&:empty': {
      visibility: 'hidden'
    },
    [`& .${_listItemClasses.default.nested}, & .${_listItemClasses.default.nested} .${_listClasses.default.root}`]: {
      // For grouped options autocomplete:
      // Force the position to make the scroll into view logic works because the `element.offsetTop` should reference to the listbox, not the grouped list.
      // See the implementation of the `useAutocomplete` line:370
      //
      // Resource: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
      position: 'initial'
    }
  };
});
const AutocompleteListboxRoot = (0, _styles.styled)(StyledAutocompleteListbox, {
  name: 'JoyAutocompleteListbox',
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
 * - [AutocompleteListbox API](https://mui.com/joy-ui/api/autocomplete-listbox/)
 */
const AutocompleteListbox = /*#__PURE__*/React.forwardRef(function AutocompleteListbox(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyAutocompleteListbox'
  });
  const {
    children,
    className,
    component,
    color = 'neutral',
    variant = 'outlined',
    size = 'md',
    slots = {},
    slotProps = {},
    ...otherProps
  } = props;
  const ownerState = {
    ...props,
    size,
    color,
    variant,
    nesting: false,
    row: false,
    wrap: false
  };
  const other = excludePopperProps(otherProps);
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
    elementType: AutocompleteListboxRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      role: 'listbox'
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_variantColorInheritance.VariantColorProvider, {
    variant: variant,
    color: color,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
      ...rootProps,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? AutocompleteListbox.propTypes /* remove-proptypes */ = {
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
   * The size of the component (affect other nested list* components).
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['contained', 'light', 'outlined', 'text']), _propTypes.default.string])
} : void 0;
var _default = exports.default = AutocompleteListbox;