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
var _composeClasses = require("@mui/base/composeClasses");
var _useMenu = require("@mui/base/useMenu");
var _useList = require("@mui/base/useList");
var _styles = require("../styles");
var _List = require("../List/List");
var _ListProvider = _interopRequireWildcard(require("../List/ListProvider"));
var _GroupListContext = _interopRequireDefault(require("../List/GroupListContext"));
var _menuListClasses = require("./menuListClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _menuListClasses.getMenuListUtilityClass, {});
};
const MenuListRoot = (0, _styles.styled)(_List.StyledList, {
  name: 'JoyMenuList',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[ownerState.variant]?.[ownerState.color];
  return {
    '--focus-outline-offset': `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    '--ListItem-stickyBackground': variantStyle?.backgroundColor || variantStyle?.background || theme.vars.palette.background.surface,
    '--ListItem-stickyTop': 'calc(var(--List-padding, var(--ListDivider-gap)) * -1)',
    // negative amount of the List's padding block
    ..._ListProvider.scopedVariables,
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
    overflow: 'auto',
    ...(!variantStyle?.backgroundColor && {
      backgroundColor: theme.vars.palette.background.surface
    })
  };
});
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/joy-ui/react-menu/)
 *
 * API:
 *
 * - [MenuList API](https://mui.com/joy-ui/api/menu-list/)
 */
const MenuList = /*#__PURE__*/React.forwardRef(function MenuList(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyMenuList'
  });
  const {
    actions,
    id: idProp,
    component,
    children,
    size = 'md',
    variant = 'outlined',
    color = 'neutral',
    onItemsChange,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    contextValue: menuContextValue,
    getListboxProps,
    dispatch
  } = (0, _useMenu.useMenu)({
    listboxRef: ref,
    id: idProp,
    onItemsChange
  });
  React.useImperativeHandle(actions, () => ({
    dispatch,
    resetHighlight: () => dispatch({
      type: _useList.ListActionTypes.resetHighlight,
      event: null
    })
  }), [dispatch]);
  const ownerState = {
    ...props,
    variant,
    color,
    size,
    nesting: false,
    row: false
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
    elementType: MenuListRoot,
    getSlotProps: getListboxProps,
    externalForwardedProps,
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_useMenu.MenuProvider, {
      value: menuContextValue,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupListContext.default.Provider, {
        value: "menu",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListProvider.default, {
          nested: true,
          children: children
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? MenuList.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: _utils.refType,
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
   * @ignore
   */
  id: _propTypes.default.string,
  /**
   * Function called when the items displayed in the menu change.
   */
  onItemsChange: _propTypes.default.func,
  /**
   * The size of the component (affect other nested list* components because the `Menu` inherits `List`).
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
var _default = exports.default = MenuList;