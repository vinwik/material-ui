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
var _composeClasses = require("@mui/base/composeClasses");
var _useMenuItem = require("@mui/base/useMenuItem");
var _useList = require("@mui/base/useList");
var _ListItemButton = require("../ListItemButton/ListItemButton");
var _styles = require("../styles");
var _variantColorInheritance = require("../styles/variantColorInheritance");
var _menuItemClasses = require("./menuItemClasses");
var _RowListContext = _interopRequireDefault(require("../List/RowListContext"));
var _ListItemButtonOrientationContext = _interopRequireDefault(require("../ListItemButton/ListItemButtonOrientationContext"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    focusVisible,
    disabled,
    selected,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ['root', focusVisible && 'focusVisible', disabled && 'disabled', selected && 'selected', color && `color${(0, _utils.unstable_capitalize)(color)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`]
  };
  const composedClasses = (0, _composeClasses.unstable_composeClasses)(slots, _menuItemClasses.getMenuItemUtilityClass, {});
  return composedClasses;
};
const MenuItemRoot = (0, _styles.styled)(_ListItemButton.StyledListItemButton, {
  name: 'JoyMenuItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const MenuItem = /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(function MenuItem(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyMenuItem'
  });
  const row = React.useContext(_RowListContext.default);
  const {
    children,
    disabled: disabledProp = false,
    component = 'li',
    selected = false,
    color: colorProp = 'neutral',
    orientation = 'horizontal',
    variant: variantProp = 'plain',
    slots = {},
    slotProps = {},
    id,
    ...other
  } = props;
  const {
    variant = variantProp,
    color = colorProp
  } = (0, _variantColorInheritance.useVariantColor)(inProps.variant, inProps.color);
  const {
    getRootProps,
    disabled,
    focusVisible
  } = (0, _useMenuItem.useMenuItem)({
    id,
    disabled: disabledProp,
    rootRef: ref
  });
  const ownerState = {
    ...props,
    component,
    color,
    disabled,
    focusVisible,
    orientation,
    selected,
    row,
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
    elementType: MenuItemRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemButtonOrientationContext.default.Provider, {
    value: orientation,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
      ...rootProps,
      children: children
    })
  });
}));

/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/joy-ui/react-menu/)
 *
 * API:
 *
 * - [MenuItem API](https://mui.com/joy-ui/api/menu-item/)
 * - inherits [ListItemButton API](https://mui.com/joy-ui/api/list-item-button/)
 */
const StableMenuItem = /*#__PURE__*/React.forwardRef(function StableMenuItem(props, ref) {
  // This wrapper component is used as a performance optimization.
  // `useMenuItemContextStabilizer` ensures that the context value
  // is stable across renders, so that the actual MenuItem re-renders
  // only when it needs to.
  const {
    contextValue,
    id
  } = (0, _useMenuItem.useMenuItemContextStabilizer)(props.id);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_useList.ListContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
      ...props,
      id: id,
      ref: ref
    })
  });
});
process.env.NODE_ENV !== "production" ? StableMenuItem.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,
  id: _propTypes.default.string
} : void 0;
var _default = exports.default = StableMenuItem;