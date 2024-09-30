'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps } from "../styles/index.js";
import styled from "../styles/styled.js";
import { getDialogContentUtilityClass } from "./dialogContentClasses.js";
import useSlot from "../utils/useSlot.js";
import ModalDialogVariantColorContext from "../ModalDialog/ModalDialogVariantColorContext.js";
import { StyledCardContentRoot } from "../CardContent/CardContent.js";
import modalDialogClasses from "../ModalDialog/modalDialogClasses.js";
import dialogTitleClasses from "../DialogTitle/dialogTitleClasses.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getDialogContentUtilityClass, {});
};
const DialogContentRoot = styled(StyledCardContentRoot, {
  name: 'JoyDialogContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  color: `var(--DialogContent-color, ${theme.vars.palette.text.tertiary})`,
  overflow: 'auto',
  margin: 'var(--unstable_DialogContent-margin)',
  [`.${modalDialogClasses.root} > .${dialogTitleClasses.root} + &`]: {
    '--unstable_DialogContent-margin': '-0.375em 0 0 0'
  }
}));
/**
 *
 * Demos:
 *
 * - [Drawer](https://mui.com/joy-ui/react-drawer/)
 * - [Modal](https://mui.com/joy-ui/react-modal/)
 *
 * API:
 *
 * - [DialogContent API](https://mui.com/joy-ui/api/dialog-content/)
 */
const DialogContent = /*#__PURE__*/React.forwardRef(function DialogContent(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyDialogContent'
  });
  const context = React.useContext(ModalDialogVariantColorContext);
  const {
    component = 'div',
    children,
    orientation = 'vertical',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const ownerState = {
    ...props,
    component,
    orientation
  };
  const classes = useUtilityClasses();
  const [SlotRoot, rootProps] = useSlot('root', {
    ref,
    className: classes.root,
    elementType: DialogContentRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      id: context?.describedBy
    }
  });
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? DialogContent.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the CardContent if `src` is not set.
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
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
export default DialogContent;