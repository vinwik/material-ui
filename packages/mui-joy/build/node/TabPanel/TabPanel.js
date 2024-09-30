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
var _useTabPanel = require("@mui/base/useTabPanel");
var _Tabs = require("@mui/base/Tabs");
var _styles = require("../styles");
var _SizeTabsContext = _interopRequireDefault(require("../Tabs/SizeTabsContext"));
var _tabPanelClasses = require("./tabPanelClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    hidden,
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', hidden && 'hidden', size && `size${(0, _utils.unstable_capitalize)(size)}`, orientation, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _tabPanelClasses.getTabPanelUtilityClass, {});
};
const TabPanelRoot = (0, _styles.styled)('div', {
  name: 'JoyTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  display: ownerState.hidden ? 'none' : 'block',
  padding: 'var(--Tabs-spacing)',
  flexGrow: 1,
  fontFamily: theme.vars.fontFamily.body,
  ...theme.typography[`body-${ownerState.size}`],
  ...theme.variants[ownerState.variant]?.[ownerState.color]
}));
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/joy-ui/react-tabs/)
 *
 * API:
 *
 * - [TabPanel API](https://mui.com/joy-ui/api/tab-panel/)
 */
const TabPanel = /*#__PURE__*/React.forwardRef(function TabPanel(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyTabPanel'
  });
  const {
    orientation
  } = (0, _Tabs.useTabsContext)() || {
    orientation: 'horizontal'
  };
  const tabsSize = React.useContext(_SizeTabsContext.default);
  const {
    children,
    value = 0,
    component,
    color = 'neutral',
    variant = 'plain',
    size: sizeProp,
    slots = {},
    slotProps = {},
    keepMounted = false,
    ...other
  } = props;
  const {
    hidden,
    getRootProps
  } = (0, _useTabPanel.useTabPanel)({
    ...props,
    value
  });
  const size = sizeProp ?? tabsSize;
  const ownerState = {
    ...props,
    orientation,
    hidden,
    size,
    color,
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
    ref,
    elementType: TabPanelRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    additionalProps: {
      role: 'tabpanel',
      ref,
      as: component
    },
    ownerState,
    className: classes.root
  });
  if (keepMounted) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
      ...rootProps,
      children: children
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: !hidden && children
  });
});
process.env.NODE_ENV !== "production" ? TabPanel.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
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
   * Always keep the children in the DOM.
   * @default false
   */
  keepMounted: _propTypes.default.bool,
  /**
   * The size of the component.
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
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   * @default 0
   */
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = TabPanel;