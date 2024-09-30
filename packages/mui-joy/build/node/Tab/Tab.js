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
var _utils = require("@mui/utils");
var _base = require("@mui/base");
var _useTab = require("@mui/base/useTab");
var _ListItemButton = require("../ListItemButton/ListItemButton");
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _tabClasses = require("./tabClasses");
var _RowListContext = _interopRequireDefault(require("../List/RowListContext"));
var _ListItemButtonOrientationContext = _interopRequireDefault(require("../ListItemButton/ListItemButtonOrientationContext"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    selected,
    disabled,
    focusVisible,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, disabled && 'disabled', focusVisible && 'focusVisible', selected && 'selected', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _tabClasses.getTabUtilityClass, {});
};
const TabRoot = (0, _styled.default)(_ListItemButton.StyledListItemButton, {
  name: 'JoyTab',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => [{
  flex: 'initial',
  justifyContent: ownerState.row ? 'center' : 'initial',
  '--unstable_ListItemDecorator-alignItems': 'center',
  '--unstable_offset': 'min(calc(-1 * var(--variant-borderWidth, 0px)), -1px)'
}, !ownerState.disableIndicator && {
  '&[aria-selected="true"]': {
    '--Tab-indicatorColor': 'currentColor',
    zIndex: 1 // to stay above other tab elements
  },
  // using pseudo element for showing active indicator is best for controlling the size and customization.
  // for example, developers can customize the radius, width or background.
  // (border and box-shadow are not flexible when it comes to customization).
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    margin: 'auto',
    background: 'var(--Tab-indicatorColor)',
    borderRadius: 'var(--Tab-indicatorRadius)'
  }
},
// the padding is to account for the indicator's thickness to make the text proportional.
!ownerState.disableIndicator && ownerState.indicatorPlacement === 'bottom' && {
  paddingBottom: 'calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px) + var(--Tab-indicatorThickness) - 1px)',
  '&::after': {
    height: 'var(--Tab-indicatorThickness)',
    width: 'var(--Tab-indicatorSize)',
    left: ownerState.indicatorInset ? 'var(--ListItem-paddingLeft)' : 'var(--unstable_offset)',
    right: ownerState.indicatorInset ? 'var(--ListItem-paddingRight)' : 'var(--unstable_offset)',
    bottom: 'calc(-1px - var(--unstable_TabList-underlineBottom, 0px))'
  }
}, !ownerState.disableIndicator && ownerState.indicatorPlacement === 'top' && {
  paddingTop: 'calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px) + var(--Tab-indicatorThickness) - 1px)',
  '&::after': {
    height: 'var(--Tab-indicatorThickness)',
    width: 'var(--Tab-indicatorSize)',
    left: ownerState.indicatorInset ? 'var(--ListItem-paddingLeft)' : 'var(--unstable_offset)',
    right: ownerState.indicatorInset ? 'var(--ListItem-paddingRight)' : 'var(--unstable_offset)',
    top: 'calc(-1px - var(--unstable_TabList-underlineTop, 0px))'
  }
}, !ownerState.disableIndicator && ownerState.indicatorPlacement === 'right' && {
  paddingRight: 'calc(var(--ListItem-paddingRight) + var(--Tab-indicatorThickness) - 1px)',
  '&::after': {
    height: 'var(--Tab-indicatorSize)',
    width: 'var(--Tab-indicatorThickness)',
    top: ownerState.indicatorInset ? 'var(--ListItem-paddingY)' : 'var(--unstable_offset)',
    bottom: ownerState.indicatorInset ? 'var(--ListItem-paddingY)' : 'var(--unstable_offset)',
    right: 'calc(-1px - var(--unstable_TabList-underlineRight, 0px))'
  }
}, !ownerState.disableIndicator && ownerState.indicatorPlacement === 'left' && {
  paddingLeft: 'calc(var(--ListItem-paddingLeft) + var(--Tab-indicatorThickness) - 1px)',
  '&::after': {
    height: 'var(--Tab-indicatorSize)',
    width: 'var(--Tab-indicatorThickness)',
    top: ownerState.indicatorInset ? 'var(--ListItem-paddingY)' : 'var(--unstable_offset)',
    bottom: ownerState.indicatorInset ? 'var(--ListItem-paddingY)' : 'var(--unstable_offset)',
    left: 'calc(-1px - var(--unstable_TabList-underlineLeft, 0px))'
  }
}]);
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/joy-ui/react-tabs/)
 *
 * API:
 *
 * - [Tab API](https://mui.com/joy-ui/api/tab/)
 */
const Tab = /*#__PURE__*/React.forwardRef(function Tab(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyTab'
  });
  const row = React.useContext(_RowListContext.default);
  const {
    action,
    children,
    value: valueProp,
    disabled = false,
    onChange,
    onClick,
    onFocus,
    component = 'button',
    orientation = 'horizontal',
    variant = 'plain',
    color = 'neutral',
    disableIndicator = false,
    indicatorPlacement = row ? 'bottom' : 'right',
    indicatorInset = false,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const tabRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(tabRef, ref);
  const {
    active,
    focusVisible,
    setFocusVisible,
    selected,
    getRootProps
  } = (0, _useTab.useTab)({
    ...props,
    rootRef: handleRef
  });
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      tabRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = {
    ...props,
    disableIndicator,
    indicatorPlacement,
    indicatorInset,
    orientation,
    row,
    active,
    focusVisible,
    disabled,
    selected,
    variant,
    color
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemButtonOrientationContext.default.Provider, {
    value: orientation,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
      ...rootProps,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? Tab.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.shape({
      focusVisible: _propTypes.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: _propTypes.default.node,
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
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * If `true`, the pseudo element indicator is hidden.
   * @default false
   */
  disableIndicator: _propTypes.default.bool,
  /**
   * If `true`, the indicator stay within the padding based on the `Tabs` orientation.
   * @default false
   */
  indicatorInset: _propTypes.default.bool,
  /**
   * The indicator's position when the Tab is selected.
   * @default row ? 'bottom' : 'right'
   */
  indicatorPlacement: _propTypes.default.oneOf(['bottom', 'left', 'right', 'top']),
  /**
   * Callback invoked when new value is being set.
   */
  onChange: _propTypes.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes.default.func,
  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,
  /**
   * The content direction flow.
   * @default 'horizontal'
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
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * You can provide your own value. Otherwise, it falls back to the child position index.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = Tab;