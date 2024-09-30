'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_capitalize as capitalize } from '@mui/utils';
import { unstable_composeClasses as composeClasses } from '@mui/base/composeClasses';
import { useMenuItem, useMenuItemContextStabilizer } from '@mui/base/useMenuItem';
import { ListContext } from '@mui/base/useList';
import { StyledListItemButton } from "../ListItemButton/ListItemButton.js";
import { styled, useThemeProps } from "../styles/index.js";
import { useVariantColor } from "../styles/variantColorInheritance.js";
import { getMenuItemUtilityClass } from "./menuItemClasses.js";
import RowListContext from "../List/RowListContext.js";
import ListItemButtonOrientationContext from "../ListItemButton/ListItemButtonOrientationContext.js";
import useSlot from "../utils/useSlot.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    focusVisible,
    disabled,
    selected,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ['root', focusVisible && 'focusVisible', disabled && 'disabled', selected && 'selected', color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`]
  };
  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, {});
  return composedClasses;
};
const MenuItemRoot = styled(StyledListItemButton, {
  name: 'JoyMenuItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const MenuItem = /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(function MenuItem(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyMenuItem'
  });
  const row = React.useContext(RowListContext);
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
  } = useVariantColor(inProps.variant, inProps.color);
  const {
    getRootProps,
    disabled,
    focusVisible
  } = useMenuItem({
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
  const [SlotRoot, rootProps] = useSlot('root', {
    ref,
    elementType: MenuItemRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/_jsx(ListItemButtonOrientationContext.Provider, {
    value: orientation,
    children: /*#__PURE__*/_jsx(SlotRoot, {
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
  } = useMenuItemContextStabilizer(props.id);
  return /*#__PURE__*/_jsx(ListContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(MenuItem, {
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
  children: PropTypes.node,
  id: PropTypes.string
} : void 0;
export default StableMenuItem;