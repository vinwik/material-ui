"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModalOverflowRoot = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _base = require("@mui/base");
var _styles = require("../styles");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _modalOverflowClasses = require("./modalOverflowClasses");
var _CloseModalContext = _interopRequireDefault(require("../Modal/CloseModalContext"));
var _modalDialogClasses = _interopRequireDefault(require("../ModalDialog/modalDialogClasses"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _modalOverflowClasses.getModalOverflowUtilityClass, {});
};
const ModalOverflowRoot = exports.ModalOverflowRoot = (0, _styles.styled)('div', {
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
  [`& .${_modalDialogClasses.default.layoutCenter}`]: {
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
  [`& .${_modalDialogClasses.default.layoutFullscreen}`]: {
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
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyModalOverflow'
  });
  const {
    children,
    onClick,
    ...other
  } = props;
  const onClose = React.useContext(_CloseModalContext.default);
  const ownerState = props;
  const classes = useUtilityClasses();
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
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
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  onClick: _propTypes.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = exports.default = ModalOverflow;