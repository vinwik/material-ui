'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/base/composeClasses';
import { useOption, useOptionContextStabilizer } from '@mui/base/useOption';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import { ListContext } from '@mui/base/useList';
import useSlot from "../utils/useSlot.js";
import { StyledListItemButton } from "../ListItemButton/ListItemButton.js";
import { styled, useThemeProps } from "../styles/index.js";
import { useVariantColor } from "../styles/variantColorInheritance.js";
import optionClasses, { getOptionUtilityClass } from "./optionClasses.js";
import RowListContext from "../List/RowListContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', highlighted && 'highlighted', selected && 'selected']
  };
  return composeClasses(slots, getOptionUtilityClass, {});
};
const OptionRoot = styled(StyledListItemButton, {
  name: 'JoyOption',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color];
  return {
    [`&.${optionClasses.highlighted}:not([aria-selected="true"])`]: {
      backgroundColor: variantStyle?.backgroundColor
    }
  };
});
const Option = /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(function Option(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyOption'
  });
  const {
    component = 'li',
    children,
    disabled = false,
    value,
    label,
    variant: variantProp = 'plain',
    color: colorProp = 'neutral',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const row = React.useContext(RowListContext);
  const {
    variant = variantProp,
    color = colorProp
  } = useVariantColor(inProps.variant, inProps.color);
  const optionRef = React.useRef(null);
  const combinedRef = useForkRef(optionRef, ref);
  const computedLabel = label ?? (typeof children === 'string' ? children : optionRef.current?.innerText);
  const {
    getRootProps,
    selected,
    highlighted,
    index
  } = useOption({
    disabled,
    label: computedLabel,
    value,
    rootRef: combinedRef
  });
  const ownerState = {
    ...props,
    disabled,
    selected,
    highlighted,
    index,
    component,
    variant,
    color,
    row
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
    getSlotProps: getRootProps,
    elementType: OptionRoot,
    externalForwardedProps,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: children
  });
}));

/**
 *
 * Demos:
 *
 * - [Select](https://mui.com/joy-ui/react-select/)
 *
 * API:
 *
 * - [Option API](https://mui.com/joy-ui/api/option/)
 */
const StableOption = /*#__PURE__*/React.forwardRef(function StableOption(props, ref) {
  // This wrapper component is used as a performance optimization.
  // `useOptionContextStabilizer` ensures that the context value
  // is stable across renders, so that the actual Option re-renders
  // only when it needs to.
  const {
    contextValue
  } = useOptionContextStabilizer(props.value);
  return /*#__PURE__*/_jsx(ListContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(Option, {
      ...props,
      ref: ref
    })
  });
});
process.env.NODE_ENV !== "production" ? StableOption.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The option value.
   */
  value: PropTypes.any.isRequired,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'plain', 'soft', 'solid']), PropTypes.string])
} : void 0;
export default StableOption;