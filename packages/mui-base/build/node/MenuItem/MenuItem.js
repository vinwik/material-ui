"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _menuItemClasses = require("./menuItemClasses");
var _useMenuItem = require("../useMenuItem");
var _composeClasses = require("../composeClasses");
var _useSlotProps = require("../utils/useSlotProps");
var _ClassNameConfigurator = require("../utils/ClassNameConfigurator");
var _useList = require("../useList");
var _jsxRuntime = require("react/jsx-runtime");
function useUtilityClasses(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_menuItemClasses.getMenuItemUtilityClass));
}
const InnerMenuItem = /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(function MenuItem(props, forwardedRef) {
  const {
    children,
    disabled: disabledProp = false,
    label,
    id,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const {
    getRootProps,
    disabled,
    focusVisible,
    highlighted
  } = (0, _useMenuItem.useMenuItem)({
    id,
    disabled: disabledProp,
    rootRef: forwardedRef,
    label
  });
  const ownerState = {
    ...props,
    disabled,
    focusVisible,
    highlighted
  };
  const classes = useUtilityClasses(ownerState);
  const Root = slots.root ?? 'li';
  const rootProps = (0, _useSlotProps.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, {
    ...rootProps,
    children: children
  });
}));

/**
 * An unstyled menu item to be used within a Menu.
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/)
 *
 * API:
 *
 * - [MenuItem API](https://mui.com/base-ui/react-menu/components-api/#menu-item)
 */
const MenuItem = exports.MenuItem = /*#__PURE__*/React.forwardRef(function MenuItem(props, ref) {
  const {
    id: idProp
  } = props;

  // This wrapper component is used as a performance optimization.
  // `useMenuItemContextStabilizer` ensures that the context value
  // is stable across renders, so that the actual MenuItem re-renders
  // only when it needs to.
  const {
    contextValue,
    id
  } = (0, _useMenuItem.useMenuItemContextStabilizer)(idProp);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_useList.ListContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerMenuItem, {
      ...props,
      id: id,
      ref: ref
    })
  });
});
process.env.NODE_ENV !== "production" ? MenuItem.propTypes /* remove-proptypes */ = {
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
   * If `true`, the menu item will be disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * If `true`, the menu item won't receive focus when the mouse moves over it.
   *
   * @default false
   */
  disableFocusOnHover: _propTypes.default.bool,
  /**
   * A text representation of the menu item's content.
   * Used for keyboard text navigation matching.
   */
  label: _propTypes.default.string,
  /**
   * @ignore
   */
  onClick: _propTypes.default.func,
  /**
   * The props used for each slot inside the MenuItem.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside the MenuItem.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: _propTypes.default.shape({
    root: _propTypes.default.elementType
  })
} : void 0;