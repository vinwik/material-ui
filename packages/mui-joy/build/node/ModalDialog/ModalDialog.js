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
var _clsx = _interopRequireDefault(require("clsx"));
var _base = require("@mui/base");
var _utils = require("@mui/utils");
var _styles = require("../styles");
var _modalDialogClasses = require("./modalDialogClasses");
var _ModalDialogSizeContext = _interopRequireDefault(require("./ModalDialogSizeContext"));
var _ModalDialogVariantColorContext = _interopRequireDefault(require("./ModalDialogVariantColorContext"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _Card = require("../Card/Card");
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    variant,
    color,
    size,
    layout
  } = ownerState;
  const slots = {
    root: ['root', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`, layout && `layout${(0, _utils.unstable_capitalize)(layout)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _modalDialogClasses.getModalDialogUtilityClass, {});
};
function getBreakpointValue(theme, breakpoint) {
  return breakpoint && theme.breakpoints?.values[breakpoint] ? `${theme.breakpoints?.values[breakpoint]}px` : breakpoint;
}
const ModalDialogRoot = (0, _styles.styled)(_Card.StyledCardRoot, {
  name: 'JoyModalDialog',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  '--ModalDialog-minWidth': typeof ownerState.minWidth === 'number' ? `${ownerState.minWidth}px` : getBreakpointValue(theme, ownerState.minWidth),
  '--ModalDialog-maxWidth': typeof ownerState.maxWidth === 'number' ? `${ownerState.maxWidth}px` : getBreakpointValue(theme, ownerState.maxWidth),
  '--ModalClose-radius': 'max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--ModalClose-inset), min(var(--ModalClose-inset) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))',
  ...(ownerState.variant === 'solid' && {
    '--DialogContent-color': 'currentColor'
  }),
  ...(ownerState.size === 'sm' && {
    '--Card-padding': '1rem',
    '--ModalDialog-titleOffset': theme.spacing(0.25),
    '--ModalDialog-descriptionOffset': theme.spacing(0.25),
    '--ModalClose-inset': '0.375rem'
  }),
  ...(ownerState.size === 'md' && {
    '--Card-padding': '1.25rem',
    '--ModalDialog-titleOffset': theme.spacing(0.25),
    '--ModalDialog-descriptionOffset': theme.spacing(0.75),
    '--ModalClose-inset': '0.5rem'
  }),
  ...(ownerState.size === 'lg' && {
    '--Card-padding': '1.5rem',
    '--ModalDialog-titleOffset': theme.spacing(0.5),
    '--ModalDialog-descriptionOffset': theme.spacing(1),
    '--ModalClose-inset': '0.625rem'
  }),
  boxSizing: 'border-box',
  boxShadow: theme.shadow.md,
  minWidth: 'min(calc(100vw - 2 * var(--Card-padding)), var(--ModalDialog-minWidth, 300px))',
  outline: 0,
  position: 'absolute',
  ...(ownerState.layout === 'fullscreen' && {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    borderRadius: 0
  }),
  ...(ownerState.layout === 'center' && {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'min(calc(100vw - 2 * var(--Card-padding)), var(--ModalDialog-maxWidth, 100vw))',
    maxHeight: 'calc(100% - 2 * var(--Card-padding))'
  }),
  [`& [id="${ownerState['aria-labelledby']}"]`]: {
    '--Typography-margin': 'calc(-1 * var(--ModalDialog-titleOffset)) 0 var(--ModalDialog-gap) 0',
    '--Typography-fontSize': '1.125em',
    [`& + [id="${ownerState['aria-describedby']}"]`]: {
      '--unstable_ModalDialog-descriptionOffset': 'calc(-1 * var(--ModalDialog-descriptionOffset))'
    }
  },
  [`& [id="${ownerState['aria-describedby']}"]`]: {
    '--Typography-fontSize': '1em',
    '--Typography-margin': 'var(--unstable_ModalDialog-descriptionOffset, var(--ModalDialog-gap)) 0 0 0',
    '&:not(:last-child)': {
      // create spacing between description and the next element.
      '--Typography-margin': 'var(--unstable_ModalDialog-descriptionOffset, var(--ModalDialog-gap)) 0 var(--ModalDialog-gap) 0'
    }
  }
}));
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/joy-ui/react-modal/)
 *
 * API:
 *
 * - [ModalDialog API](https://mui.com/joy-ui/api/modal-dialog/)
 */
const ModalDialog = /*#__PURE__*/React.forwardRef(function ModalDialog(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyModalDialog'
  });
  const {
    className,
    children,
    invertedColors = false,
    orientation = 'vertical',
    color = 'neutral',
    component = 'div',
    variant = 'outlined',
    size = 'md',
    layout = 'center',
    maxWidth,
    minWidth,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    maxWidth,
    minWidth,
    layout,
    size,
    variant,
    invertedColors
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const labelledBy = (0, _utils.unstable_useId)();
  const describedBy = (0, _utils.unstable_useId)();
  const contextValue = React.useMemo(() => ({
    variant,
    color,
    labelledBy,
    describedBy
  }), [color, variant, labelledBy, describedBy]);
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: ModalDialogRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': labelledBy,
      'aria-describedby': describedBy
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialogSizeContext.default.Provider, {
    value: size,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialogVariantColorContext.default.Provider, {
      value: contextValue,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
        ...rootProps,
        children: React.Children.map(children, (child, index) => {
          if (! /*#__PURE__*/React.isValidElement(child)) {
            return child;
          }
          const extraProps = {};
          if ((0, _utils.unstable_isMuiElement)(child, ['Divider'])) {
            const childProps = child.props;
            extraProps.inset = childProps?.inset ?? 'context';
            const dividerOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
            extraProps.orientation = childProps?.orientation ?? dividerOrientation;
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
process.env.NODE_ENV !== "production" ? ModalDialog.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: _propTypes.default.bool,
  /**
   * The layout of the dialog
   * @default 'center'
   */
  layout: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['center', 'fullscreen']), _propTypes.default.string]),
  /**
   * The maximum width of the component.
   * @example 'md' will use the theme's `md` breakpoint value
   * @example 360 is the number of pixels
   * @example '60ch' can be any valid CSS max-width unit
   */
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * The minimum width of the component.
   * @example 'md' will use the theme's `md` breakpoint value
   * @example 360 is the number of pixels
   * @example '60ch' can be any valid CSS min-width unit
   */
  minWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  /**
   * The size of the component.
   * @default 'md'
   */
  size: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['sm', 'md', 'lg']), _propTypes.default.string]),
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
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = ModalDialog;