'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_capitalize as capitalize, unstable_isMuiElement as isMuiElement } from '@mui/utils';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import clsx from 'clsx';
import { useThemeProps } from "../styles/index.js";
import useSlot from "../utils/useSlot.js";
import styled from "../styles/styled.js";
import { getBreadcrumbsUtilityClass } from "./breadcrumbsClasses.js";
import { TypographyInheritContext } from "../Typography/Typography.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    size
  } = ownerState;
  const slots = {
    root: ['root', size && `size${capitalize(size)}`],
    li: ['li'],
    ol: ['ol'],
    separator: ['separator']
  };
  return composeClasses(slots, getBreadcrumbsUtilityClass, {});
};
const BreadcrumbsRoot = styled('nav', {
  name: 'JoyBreadcrumbs',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  ...(ownerState.size === 'sm' && {
    '--Icon-fontSize': theme.vars.fontSize.lg,
    gap: 'var(--Breadcrumbs-gap, 0.25rem)',
    padding: '0.5rem'
  }),
  ...(ownerState.size === 'md' && {
    '--Icon-fontSize': theme.vars.fontSize.xl,
    gap: 'var(--Breadcrumbs-gap, 0.375rem)',
    padding: '0.75rem'
  }),
  ...(ownerState.size === 'lg' && {
    '--Icon-fontSize': theme.vars.fontSize.xl2,
    gap: 'var(--Breadcrumbs-gap, 0.5rem)',
    padding: '1rem'
  }),
  ...theme.typography[`body-${ownerState.size}`]
}));
const BreadcrumbsOl = styled('ol', {
  name: 'JoyBreadcrumbs',
  slot: 'Ol',
  overridesResolver: (props, styles) => styles.ol
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 'inherit',
  // reset user-agent style
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
const BreadcrumbsLi = styled('li', {
  name: 'JoyBreadcrumbs',
  slot: 'Li',
  overridesResolver: (props, styles) => styles.li
})({
  display: 'flex',
  alignItems: 'center'
});
const BreadcrumbsSeparator = styled('li', {
  name: 'JoyBreadcrumbs',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})({
  display: 'flex',
  userSelect: 'none'
});
/**
 *
 * Demos:
 *
 * - [Breadcrumbs](https://mui.com/joy-ui/react-breadcrumbs/)
 *
 * API:
 *
 * - [Breadcrumbs API](https://mui.com/joy-ui/api/breadcrumbs/)
 */
const Breadcrumbs = /*#__PURE__*/React.forwardRef(function Breadcrumbs(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyBreadcrumbs'
  });
  const {
    children,
    className,
    size = 'md',
    separator = '/',
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    separator,
    size
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
    className: clsx(classes.root, className),
    elementType: BreadcrumbsRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotOl, olProps] = useSlot('ol', {
    className: classes.ol,
    elementType: BreadcrumbsOl,
    externalForwardedProps,
    ownerState
  });
  const [SlotLi, liProps] = useSlot('li', {
    className: classes.li,
    elementType: BreadcrumbsLi,
    externalForwardedProps,
    ownerState
  });
  const [SlotSeparator, separatorProps] = useSlot('separator', {
    additionalProps: {
      'aria-hidden': true
    },
    className: classes.separator,
    elementType: BreadcrumbsSeparator,
    externalForwardedProps,
    ownerState
  });
  const allItems = React.Children.toArray(children).filter(child => {
    return /*#__PURE__*/React.isValidElement(child);
  }).map((child, index) => /*#__PURE__*/_jsx(SlotLi, {
    ...liProps,
    children: isMuiElement(child, ['Typography']) ? /*#__PURE__*/React.cloneElement(child, {
      component: child.props.component ?? 'span'
    }) : child
  }, `child-${index}`));
  return /*#__PURE__*/_jsx(TypographyInheritContext.Provider, {
    value: true,
    children: /*#__PURE__*/_jsx(SlotRoot, {
      ...rootProps,
      children: /*#__PURE__*/_jsx(SlotOl, {
        ...olProps,
        children: allItems.reduce((acc, current, index) => {
          if (index < allItems.length - 1) {
            acc = acc.concat(current, /*#__PURE__*/_jsx(SlotSeparator, {
              ...separatorProps,
              children: separator
            }, `separator-${index}`));
          } else {
            acc.push(current);
          }
          return acc;
        }, [])
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? Breadcrumbs.propTypes /* remove-proptypes */ = {
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
   * Custom separator node.
   * @default '/'
   */
  separator: PropTypes.node,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['sm', 'md', 'lg']), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    li: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    ol: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    separator: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    li: PropTypes.elementType,
    ol: PropTypes.elementType,
    root: PropTypes.elementType,
    separator: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export default Breadcrumbs;