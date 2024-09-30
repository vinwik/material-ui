'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@mui/base/composeClasses';
import { styled, useThemeProps } from "../styles/index.js";
import { getListItemDecoratorUtilityClass } from "./listItemDecoratorClasses.js";
import ListItemButtonOrientationContext from "../ListItemButton/ListItemButtonOrientationContext.js";
import useSlot from "../utils/useSlot.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getListItemDecoratorUtilityClass, {});
};
const ListItemDecoratorRoot = styled('span', {
  name: 'JoyListItemDecorator',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => ({
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: `var(--unstable_ListItemDecorator-alignItems, ${ownerState.parentOrientation === 'horizontal' ? 'center' : 'initial'})`,
  ...(ownerState.parentOrientation === 'horizontal' ? {
    minInlineSize: 'var(--ListItemDecorator-size)',
    marginInlineEnd: 'calc(-1 * var(--ListItem-gap))'
  } : {
    minBlockSize: 'var(--ListItemDecorator-size)',
    justifyContent: 'center',
    marginBlockEnd: 'calc(-1 * var(--ListItem-gap))'
  })
}));
/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/joy-ui/react-list/)
 *
 * API:
 *
 * - [ListItemDecorator API](https://mui.com/joy-ui/api/list-item-decorator/)
 */
const ListItemDecorator = /*#__PURE__*/React.forwardRef(function ListItemDecorator(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyListItemDecorator'
  });
  const {
    component,
    className,
    children,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const parentOrientation = React.useContext(ListItemButtonOrientationContext);
  const ownerState = {
    parentOrientation,
    ...props
  };
  const classes = useUtilityClasses();
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = useSlot('root', {
    ref,
    className: clsx(classes.root, className),
    elementType: ListItemDecoratorRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? ListItemDecorator.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export default ListItemDecorator;