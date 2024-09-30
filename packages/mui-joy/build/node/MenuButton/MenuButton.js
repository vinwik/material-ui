"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuButtonRoot = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useMenuButton = require("@mui/base/useMenuButton");
var _composeClasses = require("@mui/base/composeClasses");
var _utils = require("@mui/utils");
var _menuButtonClasses = require("./menuButtonClasses");
var _useThemeProps = _interopRequireDefault(require("../styles/useThemeProps"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _CircularProgress = _interopRequireDefault(require("../CircularProgress"));
var _Button = require("../Button/Button");
var _styles = require("../styles");
var _ButtonGroupContext = _interopRequireDefault(require("../ButtonGroup/ButtonGroupContext"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    color,
    disabled,
    fullWidth,
    size,
    variant,
    loading
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', fullWidth && 'fullWidth', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`, loading && 'loading'],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator'],
    loadingIndicatorCenter: ['loadingIndicatorCenter']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _menuButtonClasses.getMenuButtonUtilityClass, {});
};
const MenuButtonRoot = exports.MenuButtonRoot = (0, _styles.styled)('button', {
  name: 'JoyMenuButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(_Button.getButtonStyles);
const MenuButtonStartDecorator = (0, _styles.styled)('span', {
  name: 'JoyMenuButton',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})({
  '--Icon-margin': '0 0 0 calc(var(--Button-gap) / -2)',
  '--CircularProgress-margin': '0 0 0 calc(var(--Button-gap) / -2)',
  display: 'inherit',
  marginRight: 'var(--Button-gap)'
});
const MenuButtonEndDecorator = (0, _styles.styled)('span', {
  name: 'JoyMenuButton',
  slot: 'EndDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})({
  '--Icon-margin': '0 calc(var(--Button-gap) / -2) 0 0',
  '--CircularProgress-margin': '0 calc(var(--Button-gap) / -2) 0 0',
  display: 'inherit',
  marginLeft: 'var(--Button-gap)'
});
const MenuButtonLoadingCenter = (0, _styles.styled)('span', {
  name: 'JoyMenuButton',
  slot: 'LoadingCenter',
  overridesResolver: (props, styles) => styles.loadingIndicatorCenter
})(({
  theme,
  ownerState
}) => ({
  display: 'inherit',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.variants[ownerState.variant]?.[ownerState.color]?.color,
  ...(ownerState.disabled && {
    color: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]?.color
  })
}));

/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/joy-ui/react-menu/)
 *
 * API:
 *
 * - [MenuButton API](https://mui.com/joy-ui/api/menu-button/)
 */
const MenuButton = /*#__PURE__*/React.forwardRef(function MenuButton(inProps, forwardedRef) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'JoyMenuButton'
  });
  const {
    children,
    color = 'neutral',
    component,
    disabled: disabledProp = false,
    endDecorator,
    loading = false,
    loadingPosition = 'center',
    loadingIndicator: loadingIndicatorProp,
    size: sizeProp = 'md',
    slotProps = {},
    slots = {},
    startDecorator,
    variant: variantProp = 'outlined',
    ...other
  } = props;
  const buttonGroup = React.useContext(_ButtonGroupContext.default);
  const variant = inProps.variant || buttonGroup.variant || variantProp;
  const size = inProps.size || buttonGroup.size || sizeProp;
  const disabled = inProps.disabled ?? (buttonGroup.disabled || disabledProp || loading);
  const {
    getRootProps,
    open,
    active
  } = (0, _useMenuButton.useMenuButton)({
    rootRef: forwardedRef,
    disabled
  });
  const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
    color: color,
    thickness: {
      sm: 2,
      md: 3,
      lg: 4
    }[size] || 3
  });
  const ownerState = {
    ...props,
    active,
    color,
    disabled,
    open,
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
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    elementType: MenuButtonRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ref: forwardedRef,
    ownerState,
    className: classes.root
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: MenuButtonStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: MenuButtonEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotLoadingIndicatorCenter, loadingIndicatorCenterProps] = (0, _useSlot.default)('loadingIndicatorCenter', {
    className: classes.loadingIndicatorCenter,
    elementType: MenuButtonLoadingCenter,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
    ...rootProps,
    children: [(startDecorator || loading && loadingPosition === 'start') && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, {
      ...startDecoratorProps,
      children: loading && loadingPosition === 'start' ? loadingIndicator : startDecorator
    }), children, loading && loadingPosition === 'center' && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotLoadingIndicatorCenter, {
      ...loadingIndicatorCenterProps,
      children: loadingIndicator
    }), (endDecorator || loading && loadingPosition === 'end') && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, {
      ...endDecoratorProps,
      children: loading && loadingPosition === 'end' ? loadingIndicator : endDecorator
    })]
  });
});
process.env.NODE_ENV !== "production" ? MenuButton.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: _propTypes.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'info', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: _propTypes.default.node,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: _propTypes.default.bool,
  /**
   * If `true`, the loading indicator is shown.
   * @default false
   */
  loading: _propTypes.default.bool,
  /**
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress />
   */
  loadingIndicator: _propTypes.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: _propTypes.default.oneOf(['center', 'end', 'start']),
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
    endDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    loadingIndicatorCenter: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    startDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    endDecorator: _propTypes.default.elementType,
    loadingIndicatorCenter: _propTypes.default.elementType,
    root: _propTypes.default.elementType,
    startDecorator: _propTypes.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: _propTypes.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * @default 0
   */
  tabIndex: _propTypes.default.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = MenuButton;