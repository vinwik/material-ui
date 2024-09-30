'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps, styled } from "../styles/index.js";
import useSlot from "../utils/useSlot.js";
import { getModalOverflowUtilityClass } from "./modalOverflowClasses.js";
import CloseModalContext from "../Modal/CloseModalContext.js";
import modalDialogClasses from "../ModalDialog/modalDialogClasses.js";
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getModalOverflowUtilityClass, {});
};
export const ModalOverflowRoot = styled('div', {
  name: 'JoyModalOverflow',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  '--ModalOverflow-paddingY': '1.5rem',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  height: '100%',
  overflow: 'hidden auto',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  // required for fullscreen ModalDialog, using `row` cannot be achieved.
  padding: 'var(--ModalOverflow-paddingY) 0',
  // let's not create `size` prop to only control the `padding`.
  [`& .${modalDialogClasses.layoutCenter}`]: {
    position: 'relative',
    margin: 'auto',
    // to make the dialog stay at center when content does not overflow the screen.
    height: 'max-content',
    // height is based on content, otherwise `margin: auto` will take place.
    maxHeight: 'unset',
    transform: 'none',
    top: 'unset',
    left: 'unset'
  },
  [`& .${modalDialogClasses.layoutFullscreen}`]: {
    position: 'relative',
    width: '100%',
    margin: 'calc(-1 * var(--ModalOverflow-paddingY)) 0',
    flex: 1
  }
});
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/joy-ui/react-modal/)
 *
 * API:
 *
 * - [ModalOverflow API](https://mui.com/joy-ui/api/modal-overflow/)
 */
const ModalOverflow = /*#__PURE__*/React.forwardRef(function ModalOverflow(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'JoyModalOverflow'
  });
  const {
    children,
    onClick,
    ...other
  } = props;
  const onClose = React.useContext(CloseModalContext);
  const ownerState = props;
  const classes = useUtilityClasses();
  const [SlotRoot, rootProps] = useSlot('root', {
    ref,
    className: classes.root,
    elementType: ModalOverflowRoot,
    externalForwardedProps: other,
    ownerState,
    additionalProps: {
      role: 'presentation',
      tabIndex: -1,
      onClick: event => {
        if (event.target === event.currentTarget) {
          onClose?.(event, 'backdropClick');
        }
        onClick?.(event);
      }
    }
  });
  return /*#__PURE__*/_jsx(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? ModalOverflow.propTypes /* remove-proptypes */ = {
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
  onClick: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export default ModalOverflow;