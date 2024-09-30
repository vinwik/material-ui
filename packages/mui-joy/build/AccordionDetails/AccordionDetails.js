'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps } from "../styles/index.js";
import styled from "../styles/styled.js";
import accordionDetailsClasses, { getAccordionDetailsUtilityClass } from "./accordionDetailsClasses.js";
import useSlot from "../utils/useSlot.js";
import AccordionContext from "../Accordion/AccordionContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    expanded
  } = ownerState;
  const slots = {
    root: ['root', expanded && 'expanded'],
    content: ['content', expanded && 'expanded']
  };
  return composeClasses(slots, getAccordionDetailsUtilityClass, {});
};
const AccordionDetailsRoot = styled('div', {
  name: 'JoyAccordionDetails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => ({
  overflow: 'hidden',
  borderRadius: 'var(--AccordionDetails-radius)',
  display: 'grid',
  gridTemplateRows: '1fr',
  marginInline: 'calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))',
  transition: 'var(--AccordionDetails-transition)',
  ...theme.variants[ownerState.variant]?.[ownerState.color],
  [`&:not(.${accordionDetailsClasses.expanded})`]: {
    gridTemplateRows: '0fr'
  }
}));

/**
 * The content slot is required because the root slot is a CSS Grid, it needs a child.
 */
const AccordionDetailsContent = styled('div', {
  name: 'JoyAccordionDetails',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  // required for user-provided transition to work
  // Need to apply padding to content rather than root because the overflow.
  // Otherwise, the focus ring of the children can be cut off.
  paddingInlineStart: 'var(--ListItem-paddingLeft)',
  paddingInlineEnd: 'var(--ListItem-paddingRight)',
  paddingBlockStart: 'calc(var(--ListItem-paddingY) / 2)',
  paddingBlockEnd: 'calc(2.5 * var(--ListItem-paddingY))',
  transition: 'var(--AccordionDetails-transition)',
  [`&:not(.${accordionDetailsClasses.expanded})`]: {
    paddingBlock: 0
  }
});

/**
 *
 * Demos:
 *
 * - [Accordion](https://mui.com/joy-ui/react-accordion/)
 *
 * API:
 *
 * - [AccordionDetails API](https://mui.com/joy-ui/api/accordion-details/)
 */
const AccordionDetails = /*#__PURE__*/React.forwardRef(function AccordionDetails(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyAccordionDetails'
  });
  const {
    component = 'div',
    children,
    color = 'neutral',
    variant = 'plain',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    accordionId,
    expanded = false
  } = React.useContext(AccordionContext);
  const rootRef = React.useRef(null);
  const handleRef = useForkRef(rootRef, ref);
  React.useEffect(() => {
    if (rootRef.current) {
      const elements = rootRef.current.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
      elements.forEach(elm => {
        const currentTabIndex = elm.getAttribute('tabindex');
        const prevTabIndex = elm.getAttribute('data-prev-tabindex');
        if (expanded) {
          // Restore the previous tabindex if it exists, or remove it if it was "unset"
          if (prevTabIndex === 'unset') {
            elm.removeAttribute('tabindex');
          } else if (prevTabIndex !== null) {
            elm.setAttribute('tabindex', prevTabIndex);
          }
          elm.removeAttribute('data-prev-tabindex');
        } else {
          // If element has no data-prev-tabindex, store the current tabindex or "unset"
          if (prevTabIndex === null) {
            elm.setAttribute('data-prev-tabindex', currentTabIndex || 'unset');
          }
          elm.setAttribute('tabindex', '-1');
        }
      });
    }
  }, [expanded]);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const ownerState = {
    ...props,
    component,
    color,
    variant,
    expanded,
    nesting: true // for the List styles
  };
  const classes = useUtilityClasses(ownerState);
  const [SlotRoot, rootProps] = useSlot('root', {
    ref: handleRef,
    className: classes.root,
    elementType: AccordionDetailsRoot,
    externalForwardedProps,
    additionalProps: {
      id: `${accordionId}-details`,
      'aria-labelledby': `${accordionId}-summary`,
      role: 'region',
      hidden: expanded ? undefined : true
    },
    ownerState
  });
  const [SlotContent, contentProps] = useSlot('content', {
    className: classes.content,
    elementType: AccordionDetailsContent,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: /*#__PURE__*/_jsx(SlotContent, {
      ...contentProps,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? AccordionDetails.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the AccordionDetails if `src` is not set.
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: PropTypes.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']),
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
    content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    content: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: PropTypes.oneOf(['outlined', 'plain', 'soft', 'solid'])
} : void 0;
export default AccordionDetails;