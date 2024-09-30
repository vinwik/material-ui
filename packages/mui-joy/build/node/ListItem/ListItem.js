"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledListItem = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _utils = require("@mui/utils");
var _composeClasses = require("@mui/base/composeClasses");
var _styles = require("../styles");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _listItemClasses = _interopRequireWildcard(require("./listItemClasses"));
var _NestedListContext = _interopRequireDefault(require("../List/NestedListContext"));
var _RowListContext = _interopRequireDefault(require("../List/RowListContext"));
var _WrapListContext = _interopRequireDefault(require("../List/WrapListContext"));
var _ComponentListContext = _interopRequireDefault(require("../List/ComponentListContext"));
var _ListSubheaderContext = _interopRequireDefault(require("../ListSubheader/ListSubheaderContext"));
var _GroupListContext = _interopRequireDefault(require("../List/GroupListContext"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    sticky,
    nested,
    nesting,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', nested && 'nested', nesting && 'nesting', sticky && 'sticky', color && `color${(0, _utils.unstable_capitalize)(color)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`],
    startAction: ['startAction'],
    endAction: ['endAction']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _listItemClasses.getListItemUtilityClass, {});
};
const StyledListItem = exports.StyledListItem = (0, _styles.styled)('li')(({
  theme,
  ownerState
}) => [!ownerState.nested && {
  // add negative margin to ListItemButton equal to this ListItem padding
  '--ListItemButton-marginInline': `calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))`,
  '--ListItemButton-marginBlock': 'calc(-1 * var(--ListItem-paddingY))',
  alignItems: 'center',
  gap: 'var(--ListItem-gap)',
  marginInline: 'var(--ListItem-marginInline)'
}, ownerState.nested && {
  // add negative margin to NestedList equal to this ListItem padding
  '--NestedList-marginRight': 'calc(-1 * var(--ListItem-paddingRight))',
  '--NestedList-marginLeft': 'calc(-1 * var(--ListItem-paddingLeft))',
  '--NestedListItem-paddingLeft': `calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))`,
  // add negative margin to ListItem, ListItemButton to make them start from the edge.
  '--ListItemButton-marginBlock': '0px',
  '--ListItemButton-marginInline': 'calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))',
  '--ListItem-marginInline': 'calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))',
  flexDirection: 'column'
},
// Base styles
{
  // Integration with control elements, for example Checkbox, Radio.
  '--unstable_actionRadius': 'calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))',
  ...(ownerState.startAction && {
    '--unstable_startActionWidth': '2rem' // to add sufficient padding-left on ListItemButton
  }),
  ...(ownerState.endAction && {
    '--unstable_endActionWidth': '2.5rem' // to add sufficient padding-right on ListItemButton
  }),
  boxSizing: 'border-box',
  borderRadius: 'var(--ListItem-radius)',
  display: 'var(--_ListItem-display)',
  '&:not([hidden])': {
    '--_ListItem-display': 'var(--_List-markerDisplay, flex)'
  },
  flex: 'none',
  // prevent children from shrinking when the List's height is limited.
  listStyleType: 'var(--_List-markerType, disc)',
  position: 'relative',
  paddingBlockStart: ownerState.nested ? 0 : 'var(--ListItem-paddingY)',
  paddingBlockEnd: ownerState.nested ? 0 : 'var(--ListItem-paddingY)',
  paddingInlineStart: 'var(--ListItem-paddingLeft)',
  paddingInlineEnd: 'var(--ListItem-paddingRight)',
  ...(ownerState['data-first-child'] === undefined && {
    ...(ownerState.row ? {
      marginInlineStart: 'var(--List-gap)'
    } : {
      marginBlockStart: 'var(--List-gap)'
    })
  }),
  ...(ownerState.row && ownerState.wrap && {
    marginInlineStart: 'var(--List-gap)',
    marginBlockStart: 'var(--List-gap)'
  }),
  minBlockSize: 'var(--ListItem-minHeight)',
  ...(ownerState.sticky && {
    // sticky in list item can be found in grouped options
    position: 'sticky',
    top: 'var(--ListItem-stickyTop, 0px)',
    // integration with Menu and Select.
    zIndex: 1,
    background: `var(--ListItem-stickyBackground, ${theme.vars.palette.background.body})`
  }),
  [`.${_listItemClasses.default.nested} > &`]: {
    '--_ListItem-display': 'flex'
  }
}, theme.variants[ownerState.variant]?.[ownerState.color]]);
const ListItemRoot = (0, _styles.styled)(StyledListItem, {
  name: 'JoyListItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const ListItemStartAction = (0, _styles.styled)('div', {
  name: 'JoyListItem',
  slot: 'StartAction',
  overridesResolver: (props, styles) => styles.startAction
})(({
  ownerState
}) => ({
  display: 'inherit',
  position: 'absolute',
  top: ownerState.nested ? 'calc(var(--ListItem-minHeight) / 2)' : '50%',
  left: 0,
  transform: 'translate(var(--ListItem-startActionTranslateX), -50%)',
  zIndex: 1 // to stay on top of ListItemButton (default `position: relative`).
}));
const ListItemEndAction = (0, _styles.styled)('div', {
  name: 'JoyListItem',
  slot: 'StartAction',
  overridesResolver: (props, styles) => styles.startAction
})(({
  ownerState
}) => ({
  display: 'inherit',
  position: 'absolute',
  top: ownerState.nested ? 'calc(var(--ListItem-minHeight) / 2)' : '50%',
  right: 0,
  transform: 'translate(var(--ListItem-endActionTranslateX), -50%)'
}));
/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/joy-ui/react-list/)
 *
 * API:
 *
 * - [ListItem API](https://mui.com/joy-ui/api/list-item/)
 */
const ListItem = /*#__PURE__*/React.forwardRef(function ListItem(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyListItem'
  });
  const group = React.useContext(_GroupListContext.default);
  const listComponent = React.useContext(_ComponentListContext.default);
  const row = React.useContext(_RowListContext.default);
  const wrap = React.useContext(_WrapListContext.default);
  const nesting = React.useContext(_NestedListContext.default);
  const {
    component: componentProp,
    className,
    children,
    nested = false,
    sticky = false,
    variant = 'plain',
    color = 'neutral',
    startAction,
    endAction,
    role: roleProp,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [subheaderId, setSubheaderId] = React.useState('');
  const [listElement, listRole] = listComponent?.split(':') || ['', ''];
  const component = componentProp || (listElement && !listElement.match(/^(ul|ol|menu)$/) ? 'div' : undefined);
  let role = group === 'menu' ? 'none' : undefined;
  if (listComponent) {
    // ListItem can be used inside Menu to create nested menus, so it should have role="none"
    // https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/
    role = {
      menu: 'none',
      menubar: 'none',
      group: 'presentation'
    }[listRole];
  }
  if (roleProp) {
    role = roleProp;
  }
  const ownerState = {
    ...props,
    sticky,
    startAction,
    endAction,
    row,
    wrap,
    variant,
    color,
    nesting,
    nested,
    component,
    role
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    additionalProps: {
      role
    },
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: ListItemRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartAction, startActionProps] = (0, _useSlot.default)('startAction', {
    className: classes.startAction,
    elementType: ListItemStartAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndAction, endActionProps] = (0, _useSlot.default)('endAction', {
    className: classes.endAction,
    elementType: ListItemEndAction,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListSubheaderContext.default.Provider, {
    value: setSubheaderId,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_NestedListContext.default.Provider, {
      value: nested ? subheaderId || true : false,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
        ...rootProps,
        children: [startAction && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartAction, {
          ...startActionProps,
          children: startAction
        }), React.Children.map(children, (child, index) => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
          // to let ListItem knows when to apply margin(Inline|Block)Start
          ...(index === 0 && {
            'data-first-child': ''
          }),
          ...((0, _utils.unstable_isMuiElement)(child, ['ListItem']) && {
            // The ListItem of ListItem should not be 'li'
            component: child.props?.component || 'div'
          })
        }) : child), endAction && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndAction, {
          ...endActionProps,
          children: endAction
        })]
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? ListItem.propTypes /* remove-proptypes */ = {
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
   * The element to display at the end of ListItem.
   */
  endAction: _propTypes.default.node,
  /**
   * If `true`, the component can contain NestedList.
   * @default false
   */
  nested: _propTypes.default.bool,
  /**
   * @ignore
   */
  role: _propTypes.default /* @typescript-to-proptypes-ignore */.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    endAction: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    startAction: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    endAction: _propTypes.default.elementType,
    root: _propTypes.default.elementType,
    startAction: _propTypes.default.elementType
  }),
  /**
   * The element to display at the start of ListItem.
   */
  startAction: _propTypes.default.node,
  /**
   * If `true`, the component has sticky position (with top = 0).
   * @default false
   */
  sticky: _propTypes.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;

// @ts-ignore internal logic to prevent <li> in <li>
ListItem.muiName = 'ListItem';
var _default = exports.default = ListItem;