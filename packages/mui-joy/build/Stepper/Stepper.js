'use client';

import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { unstable_capitalize as capitalize } from '@mui/utils';
import { useThemeProps } from "../styles/index.js";
import styled from "../styles/styled.js";
import { getStepperUtilityClass } from "./stepperClasses.js";
import useSlot from "../utils/useSlot.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    size,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getStepperUtilityClass, {});
};
const StepperRoot = styled('ol', {
  name: 'JoyStepper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  return {
    '--Stepper-indicatorColumn': 'auto',
    // For vertical stepper, to control the column width of the indicator.
    '--Step-connectorThickness': '1px',
    '--Step-indicatorDotSize': '0.375rem',
    boxSizing: 'border-box',
    display: 'flex',
    margin: 0,
    // Reset browser default style.
    padding: 0,
    // Reset browser default style.
    variants: [{
      props: {
        size: 'sm'
      },
      style: {
        '--Stepper-verticalGap': '0.5rem',
        '--Step-gap': '0.375rem',
        '--Step-connectorInset': '0.25rem',
        '--StepIndicator-size': '1.25rem',
        ...theme.typography['title-sm']
      }
    }, {
      props: {
        size: 'md'
      },
      style: {
        '--Stepper-verticalGap': '0.75rem',
        '--Step-gap': '0.5rem',
        '--Step-connectorInset': '0.375rem',
        '--StepIndicator-size': '1.5rem',
        ...theme.typography['title-md']
      }
    }, {
      props: {
        size: 'lg'
      },
      style: {
        '--Stepper-verticalGap': '0.75rem',
        '--Step-gap': '0.5rem',
        '--Step-connectorInset': '0.5rem',
        '--StepIndicator-size': '1.75rem',
        ...theme.typography['title-lg']
      }
    }, {
      props: {
        orientation: 'vertical'
      },
      style: {
        flexDirection: 'column',
        gap: 'var(--Stepper-verticalGap)'
      }
    }]
  };
});

/**
 *
 * Demos:
 *
 * - [Stepper](https://mui.com/joy-ui/react-stepper/)
 *
 * API:
 *
 * - [Stepper API](https://mui.com/joy-ui/api/stepper/)
 */
const Stepper = /*#__PURE__*/React.forwardRef(function Stepper(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyStepper'
  });
  const {
    className,
    component = 'ol',
    size = 'md',
    children,
    orientation = 'horizontal',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    orientation,
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
    elementType: StepperRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: React.Children.map(children, (child, index) => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return child;
      }
      const extraProps = {};
      if (index === 0) {
        extraProps['data-first-child'] = '';
      }
      if (index === React.Children.count(children) - 1) {
        extraProps['data-last-child'] = '';
      }
      return /*#__PURE__*/React.cloneElement(child, extraProps);
    })
  });
});
process.env.NODE_ENV !== "production" ? Stepper.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the Stepper if `src` is not set.
   * This can be an element, or just a string.
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
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['lg', 'md', 'sm']), PropTypes.string]),
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
export default Stepper;