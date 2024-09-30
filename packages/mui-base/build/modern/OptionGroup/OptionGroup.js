'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from "../composeClasses/index.js";
import { getOptionGroupUtilityClass } from "./optionGroupClasses.js";
import { useSlotProps } from "../utils/index.js";
import { useClassNamesOverride } from "../utils/ClassNameConfigurator.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function useUtilityClasses(disabled) {
  const slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list']
  };
  return composeClasses(slots, useClassNamesOverride(getOptionGroupUtilityClass));
}

/**
 * An unstyled option group to be used within a Select.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base-ui/react-select/)
 *
 * API:
 *
 * - [OptionGroup API](https://mui.com/base-ui/react-select/components-api/#option-group)
 */
const OptionGroup = /*#__PURE__*/React.forwardRef(function OptionGroup(props, forwardedRef) {
  const {
    disabled = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const Root = slots?.root || 'li';
  const Label = slots?.label || 'span';
  const List = slots?.list || 'ul';
  const classes = useUtilityClasses(disabled);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = useSlotProps({
    elementType: Label,
    externalSlotProps: slotProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = useSlotProps({
    elementType: List,
    externalSlotProps: slotProps.list,
    ownerState: props,
    className: classes.list
  });
  return /*#__PURE__*/_jsxs(Root, {
    ...rootProps,
    children: [/*#__PURE__*/_jsx(Label, {
      ...labelProps,
      children: props.label
    }), /*#__PURE__*/_jsx(List, {
      ...listProps,
      children: props.children
    })]
  });
});
process.env.NODE_ENV !== "production" ? OptionGroup.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * The human-readable description of the group.
   */
  label: PropTypes.node,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    list: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the OptionGroup.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    label: PropTypes.elementType,
    list: PropTypes.elementType,
    root: PropTypes.elementType
  })
} : void 0;
export { OptionGroup };