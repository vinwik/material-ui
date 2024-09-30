'use client';

import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { unstable_capitalize as capitalize } from '@mui/utils';
import { useThemeProps } from "../styles/index.js";
import styled from "../styles/styled.js";
import { getCardOverflowUtilityClass } from "./cardOverflowClasses.js";
import useSlot from "../utils/useSlot.js";
import buttonClasses from "../Button/buttonClasses.js";
import cardClasses from "../Card/cardClasses.js";
import modalDialogClasses from "../ModalDialog/modalDialogClasses.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getCardOverflowUtilityClass, {});
};
const CardOverflowRoot = styled('div', {
  name: 'JoyCardOverflow',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const childRadius = 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))';
  return {
    alignSelf: 'stretch',
    // prevent shrinking if parent's align-items is not initial
    position: 'relative',
    display: 'flex',
    flexDirection: 'var(--_CardOverflow-flexDirection)',
    margin: 'var(--_CardOverflow-margin)',
    borderRadius: 'var(--_CardOverflow-radius)',
    padding: 'var(--_CardOverflow-padding)',
    [`.${cardClasses.vertical} &, .${cardClasses.horizontal} .${cardClasses.vertical} &, .${modalDialogClasses.root} &`]: {
      '--_CardOverflow-flexDirection': 'column',
      // required to make AspectRatio works
      '--AspectRatio-margin': '0 calc(-1 * var(--Card-padding))',
      '--_CardOverflow-margin': '0 var(--CardOverflow-offset)',
      '--_CardOverflow-padding': '0 var(--Card-padding)',
      '&[data-first-child]': {
        '--AspectRatio-radius': `${childRadius} ${childRadius} 0 0`,
        '--_CardOverflow-radius': 'var(--CardOverflow-radius) var(--CardOverflow-radius) 0 0',
        '--_CardOverflow-margin': 'var(--CardOverflow-offset) var(--CardOverflow-offset) 0'
      },
      '&[data-last-child]': {
        '--AspectRatio-radius': `0 0 ${childRadius} ${childRadius}`,
        '--_CardOverflow-radius': '0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)',
        '--_CardOverflow-margin': '0 var(--CardOverflow-offset) var(--CardOverflow-offset)'
      },
      '&[data-last-child][data-first-child]': {
        '--AspectRatio-radius': childRadius,
        '--_CardOverflow-margin': 'var(--CardOverflow-offset)'
      },
      [`& > .${buttonClasses.root}:only-child`]: {
        zIndex: 1,
        // prevent button from being covered Link overlay. This can be improved in the future with :has() selector
        width: 'calc(100% + -2 * var(--CardOverflow-offset))',
        '--Button-margin': '0 var(--CardOverflow-offset)',
        '--Button-radius': '0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)'
      }
    },
    [`.${cardClasses.horizontal} &, .${cardClasses.vertical} .${cardClasses.horizontal} &`]: {
      '--_CardOverflow-flexDirection': 'row',
      '--AspectRatio-margin': 'calc(-1 * var(--Card-padding)) 0px',
      '--_CardOverflow-margin': 'var(--CardOverflow-offset) 0px',
      '--_CardOverflow-padding': 'var(--Card-padding) 0px',
      '&[data-first-child]': {
        '--AspectRatio-radius': `${childRadius} 0 0 ${childRadius}`,
        '--_CardOverflow-radius': 'var(--CardOverflow-radius) 0 0 var(--CardOverflow-radius)',
        '--_CardOverflow-margin': 'var(--CardOverflow-offset) 0px var(--CardOverflow-offset) var(--CardOverflow-offset)'
      },
      '&[data-last-child]': {
        '--AspectRatio-radius': `0 ${childRadius} ${childRadius} 0`,
        '--_CardOverflow-radius': '0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0',
        '--_CardOverflow-margin': 'var(--CardOverflow-offset) var(--CardOverflow-offset) var(--CardOverflow-offset) 0px'
      },
      '&[data-last-child][data-first-child]': {
        '--AspectRatio-radius': childRadius,
        '--_CardOverflow-margin': 'var(--CardOverflow-offset)'
      },
      [`& > .${buttonClasses.root}:only-child`]: {
        height: 'calc(100% + -2 * var(--CardOverflow-offset))',
        '--Button-margin': 'var(--CardOverflow-offset) 0',
        '--Button-radius': '0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0'
      }
    },
    ...theme.variants[ownerState.variant]?.[ownerState.color]
  };
});
/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [CardOverflow API](https://mui.com/joy-ui/api/card-overflow/)
 */
const CardOverflow = /*#__PURE__*/React.forwardRef(function CardOverflow(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyCardOverflow'
  });
  const {
    className,
    component = 'div',
    children,
    color = 'neutral',
    variant = 'plain',
    slots = {},
    slotProps = {},
    ...other
  } = props;
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
  const [SlotRoot, rootProps] = useSlot('root', {
    ref,
    className: clsx(classes.root, className),
    elementType: CardOverflowRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? CardOverflow.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the CardOverflow if `src` is not set.
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), PropTypes.string]),
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
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'plain', 'soft', 'solid']), PropTypes.string])
} : void 0;

// @ts-ignore
CardOverflow.muiName = 'CardOverflow';
export default CardOverflow;