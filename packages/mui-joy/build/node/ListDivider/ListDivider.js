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
var _utils = require("@mui/utils");
var _composeClasses = require("@mui/base/composeClasses");
var _styles = require("../styles");
var _Divider = require("../Divider/Divider");
var _listDividerClasses = require("./listDividerClasses");
var _RowListContext = _interopRequireDefault(require("../List/RowListContext"));
var _ComponentListContext = _interopRequireDefault(require("../List/ComponentListContext"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    orientation,
    inset
  } = ownerState;
  const slots = {
    root: ['root', orientation,
    // `insetContext` class is already produced by Divider
    inset && inset !== 'context' && `inset${(0, _utils.unstable_capitalize)(inset)}`]
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _listDividerClasses.getListDividerUtilityClass, {});
};
const ListDividerRoot = (0, _styles.styled)(_Divider.DividerRoot, {
  name: 'JoyListDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => ({
  ...(ownerState.inset === 'context' && {
    '--Divider-inset': 'calc(-1 * var(--List-padding))'
  }),
  ...(ownerState.row && {
    marginInline: 'var(--ListDivider-gap)',
    ...(ownerState.inset === 'gutter' && {
      marginBlock: 'var(--ListItem-paddingY)'
    }),
    ...(ownerState['data-first-child'] === undefined && {
      // combine --List-gap and --ListDivider-gap to replicate flexbox gap behavior
      marginInlineStart: 'calc(var(--List-gap) + var(--ListDivider-gap))'
    })
  }),
  ...(!ownerState.row && {
    // by default, the divider line is stretched from edge-to-edge of the List
    // spacing between ListItem can be controlled by `--ListDivider-gap` on the List
    ...(ownerState['data-first-child'] === undefined && {
      // combine --List-gap and --ListDivider-gap to replicate flexbox gap behavior
      marginBlockStart: 'calc(var(--List-gap) + var(--ListDivider-gap))'
    }),
    marginBlockEnd: 'var(--ListDivider-gap)',
    ...(ownerState.inset === 'gutter' && {
      marginInlineStart: 'var(--ListItem-paddingLeft)',
      marginInlineEnd: 'var(--ListItem-paddingRight)'
    }),
    ...(ownerState.inset === 'startDecorator' && {
      marginInlineStart: 'var(--ListItem-paddingLeft)'
    }),
    ...(ownerState.inset === 'startContent' && {
      marginInlineStart: 'calc(var(--ListItem-paddingLeft) + var(--ListItemDecorator-size))'
    })
  })
}));
/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/joy-ui/react-list/)
 *
 * API:
 *
 * - [ListDivider API](https://mui.com/joy-ui/api/list-divider/)
 */
const ListDivider = /*#__PURE__*/React.forwardRef(function ListDivider(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyListDivider'
  });
  const row = React.useContext(_RowListContext.default);
  const listComponent = React.useContext(_ComponentListContext.default);
  const {
    component: componentProp,
    role: roleProp,
    className,
    children,
    inset = 'context',
    orientation: orientationProp,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [listElement] = listComponent?.split(':') || ['', ''];
  const component = componentProp || (listElement && !listElement.match(/^(ul|ol|menu)$/) ? 'div' : 'li');
  const role = roleProp || (component === 'li' ? 'separator' : undefined);
  const orientation = orientationProp || (row ? 'vertical' : 'horizontal');
  const ownerState = {
    ...props,
    inset,
    row,
    orientation,
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
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: ListDividerRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role,
      ...(role === 'separator' && orientation === 'vertical' && {
        // The implicit aria-orientation of separator is 'horizontal'
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
        'aria-orientation': 'vertical'
      })
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? ListDivider.propTypes /* remove-proptypes */ = {
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * The empty space on the side(s) of the divider in a vertical list.
   *
   * For horizontal list (the nearest parent List has `row` prop set to `true`), only `inset="gutter"` affects the list divider.
   * @default 'context'
   */
  inset: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['context', 'gutter', 'startDecorator', 'startContent']), _propTypes.default.string]),
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOf(['horizontal', 'vertical']),
  /**
   * @ignore
   */
  role: _propTypes.default /* @typescript-to-proptypes-ignore */.string,
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
var _default = exports.default = ListDivider;