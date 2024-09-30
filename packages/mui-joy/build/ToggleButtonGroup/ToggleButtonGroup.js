'use client';

import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { unstable_capitalize as capitalize, unstable_isMuiElement as isMuiElement } from '@mui/utils';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps } from "../styles/index.js";
import styled from "../styles/styled.js";
import { getToggleButtonGroupUtilityClass } from "./toggleButtonGroupClasses.js";
import useSlot from "../utils/useSlot.js";
import { StyledButtonGroup } from "../ButtonGroup/ButtonGroup.js";
import ButtonGroupContext from "../ButtonGroup/ButtonGroupContext.js";
import ToggleButtonGroupContext from "./ToggleButtonGroupContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getToggleButtonGroupUtilityClass, {});
};
const ToggleButtonGroupRoot = styled(StyledButtonGroup, {
  name: 'JoyToggleButtonGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
/**
 * ⚠️ ToggleButtonGroup must have Button and/or IconButton as direct children.
 *
 * Demos:
 *
 * - [Toggle Button Group](https://mui.com/joy-ui/react-toggle-button-group/)
 *
 * API:
 *
 * - [ToggleButtonGroup API](https://mui.com/joy-ui/api/toggle-button-group/)
 */
const ToggleButtonGroup = /*#__PURE__*/React.forwardRef(function ToggleButtonGroup(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyToggleButtonGroup'
  });
  const {
    buttonFlex,
    className,
    component = 'div',
    disabled = false,
    size = 'md',
    color = 'neutral',
    variant = 'outlined',
    children,
    onChange,
    orientation = 'horizontal',
    slots = {},
    slotProps = {},
    spacing = 0,
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    buttonFlex,
    color,
    component,
    orientation,
    spacing,
    size,
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
    elementType: ToggleButtonGroupRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      role: 'group'
    }
  });
  const buttonGroupContext = React.useMemo(() => ({
    variant,
    color,
    size,
    disabled
  }), [variant, color, size, disabled]);
  const handleChange = React.useCallback((event, buttonValue) => {
    if (!onChange || buttonValue === undefined) {
      return;
    }
    if (Array.isArray(value)) {
      const set = new Set(value);
      if (set.has(buttonValue)) {
        set.delete(buttonValue);
      } else {
        set.add(buttonValue);
      }
      onChange(event, Array.from(set));
    } else {
      onChange(event, value === buttonValue ? null : buttonValue);
    }
  }, [value, onChange]);
  const toggleButtonGroupContext = React.useMemo(() => ({
    onClick: (event, childValue) => {
      if (!event.defaultPrevented) {
        handleChange(event, childValue);
      }
    },
    value
  }), [handleChange, value]);
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: /*#__PURE__*/_jsx(ToggleButtonGroupContext.Provider, {
      value: toggleButtonGroupContext,
      children: /*#__PURE__*/_jsx(ButtonGroupContext.Provider, {
        value: buttonGroupContext,
        children: React.Children.map(children, (child, index) => {
          if (! /*#__PURE__*/React.isValidElement(child)) {
            return child;
          }
          const extraProps = {};
          if (isMuiElement(child, ['Divider'])) {
            const childProps = child.props;
            extraProps.inset = childProps?.inset ?? 'context';
            const dividerOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
            extraProps.orientation = childProps?.orientation ?? dividerOrientation;
            extraProps.role = 'presentation';
            extraProps.component = 'span';
          }
          if (index === 0) {
            extraProps['data-first-child'] = '';
          }
          if (index === React.Children.count(children) - 1) {
            extraProps['data-last-child'] = '';
          }
          return /*#__PURE__*/React.cloneElement(child, extraProps);
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? ToggleButtonGroup.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The flex value of the button.
   * @example buttonFlex={1} will set flex: '1 1 auto' on each button (stretch the button to equally fill the available space).
   */
  buttonFlex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Used to render icon or text elements inside the ButtonGroup if `src` is not set.
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
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['danger', 'info', 'neutral', 'primary', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, all the buttons will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange: PropTypes.func,
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
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
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
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.shape({
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The currently selected value within the group or an array of selected values.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'plain', 'soft', 'solid']), PropTypes.string])
} : void 0;
export default ToggleButtonGroup;