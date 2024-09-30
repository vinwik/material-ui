'use client';

var _Cancel;
import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_capitalize as capitalize, unstable_useForkRef as useForkRef } from '@mui/utils';
import { unstable_composeClasses as composeClasses } from '@mui/base/composeClasses';
import { useButton } from '@mui/base/useButton';
import { useThemeProps } from "../styles/index.js";
import styled from "../styles/styled.js";
import { useVariantColor } from "../styles/variantColorInheritance.js";
import Cancel from "../internal/svg-icons/Cancel.js";
import { getChipDeleteUtilityClass } from "./chipDeleteClasses.js";
import ChipContext from "../Chip/ChipContext.js";
import useSlot from "../utils/useSlot.js";
import { StyledIconButton } from "../IconButton/IconButton.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    focusVisible,
    variant,
    color,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getChipDeleteUtilityClass, {});
};
const ChipDeleteRoot = styled(StyledIconButton, {
  name: 'JoyChipDelete',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  '--IconButton-size': 'var(--Chip-deleteSize, 2rem)',
  '--Icon-fontSize': 'calc(var(--IconButton-size, 2rem) / 1.3)',
  minWidth: 'var(--IconButton-size, 2rem)',
  // use min-width instead of height to make the button resilient to its content
  minHeight: 'var(--IconButton-size, 2rem)',
  // use min-height instead of height to make the button resilient to its content
  fontSize: theme.vars.fontSize.sm,
  paddingInline: '2px',
  // add a gap, in case the content is long, for example multiple icons
  pointerEvents: 'visible',
  // force the ChipDelete to be hoverable because the decorator can have pointerEvents 'none'
  borderRadius: 'var(--Chip-deleteRadius, 50%)',
  zIndex: 1,
  // overflow above sibling button or anchor
  padding: 0 // reset user agent stylesheet
}));

/**
 *
 * Demos:
 *
 * - [Chip](https://mui.com/joy-ui/react-chip/)
 *
 * API:
 *
 * - [ChipDelete API](https://mui.com/joy-ui/api/chip-delete/)
 */
const ChipDelete = /*#__PURE__*/React.forwardRef(function ChipDelete(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyChipDelete'
  });
  const {
    children,
    variant: variantProp = 'plain',
    color: colorProp = 'neutral',
    disabled: disabledProp,
    onKeyDown,
    onDelete,
    onClick,
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const chipContext = React.useContext(ChipContext);
  const {
    variant = variantProp,
    color: inheritedColor = colorProp
  } = useVariantColor(inProps.variant, inProps.color, true);
  const color = inProps.color || inheritedColor;
  const disabled = disabledProp ?? chipContext.disabled;
  const buttonRef = React.useRef(null);
  const handleRef = useForkRef(buttonRef, ref);
  const {
    focusVisible,
    getRootProps
  } = useButton({
    ...props,
    disabled,
    rootRef: handleRef
  });
  const ownerState = {
    ...props,
    disabled,
    variant,
    color,
    focusVisible
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const handleClickDelete = event => {
    if (!disabled && onDelete) {
      onDelete(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleKeyDelete = event => {
    if (['Backspace', 'Enter', 'Delete'].includes(event.key)) {
      event.preventDefault();
      if (!disabled && onDelete) {
        onDelete(event);
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const [SlotRoot, rootProps] = useSlot('root', {
    ref,
    elementType: ChipDeleteRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      onKeyDown: handleKeyDelete,
      onClick: handleClickDelete
    },
    className: classes.root
  });
  const {
    onDelete: excludeOnDelete,
    ...restOfRootProps
  } = rootProps;
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...restOfRootProps,
    children: children ?? (_Cancel || (_Cancel = /*#__PURE__*/_jsx(Cancel, {})))
  });
});
process.env.NODE_ENV !== "production" ? ChipDelete.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If provided, it will replace the default icon.
   */
  children: PropTypes.node,
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
   * If `true`, the component is disabled.
   * If `undefined`, the value inherits from the parent chip via a React context.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * Callback fired when the component is not disabled and either:
   * - `Backspace`, `Enter` or `Delete` is pressed.
   * - The component is clicked.
   */
  onDelete: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
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
export default ChipDelete;