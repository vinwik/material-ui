"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _base = require("@mui/base");
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _dialogContentClasses = require("./dialogContentClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _ModalDialogVariantColorContext = _interopRequireDefault(require("../ModalDialog/ModalDialogVariantColorContext"));
var _CardContent = require("../CardContent/CardContent");
var _modalDialogClasses = _interopRequireDefault(require("../ModalDialog/modalDialogClasses"));
var _dialogTitleClasses = _interopRequireDefault(require("../DialogTitle/dialogTitleClasses"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _dialogContentClasses.getDialogContentUtilityClass, {});
};
const DialogContentRoot = (0, _styled.default)(_CardContent.StyledCardContentRoot, {
  name: 'JoyDialogContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  color: `var(--DialogContent-color, ${theme.vars.palette.text.tertiary})`,
  overflow: 'auto',
  margin: 'var(--unstable_DialogContent-margin)',
  [`.${_modalDialogClasses.default.root} > .${_dialogTitleClasses.default.root} + &`]: {
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
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyDialogContent'
  });
  const context = React.useContext(_ModalDialogVariantColorContext.default);
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
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: classes.root,
    elementType: DialogContentRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      id: context?.describedBy
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
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
  children: _propTypes.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    root: _propTypes.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = exports.default = DialogContent;