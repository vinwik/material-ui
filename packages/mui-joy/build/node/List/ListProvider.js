"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scopedVariables = exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _RowListContext = _interopRequireDefault(require("./RowListContext"));
var _WrapListContext = _interopRequireDefault(require("./WrapListContext"));
var _NestedListContext = _interopRequireDefault(require("./NestedListContext"));
var _jsxRuntime = require("react/jsx-runtime");
/**
 * This variables should be used in a List to create a scope
 * that will not inherit variables from the upper scope.
 *
 * Used in `Menu`, `MenuList`, `TabList`, `Select`, and `Autocomplete` to communicate with nested List.
 *
 * e.g. menu group:
 * <Menu>
 *   <List>...</List>
 *   <List>...</List>
 * </Menu>
 */
const scopedVariables = exports.scopedVariables = {
  '--NestedList-marginRight': '0px',
  '--NestedList-marginLeft': '0px',
  '--NestedListItem-paddingLeft': 'var(--ListItem-paddingX)',
  // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
  '--ListItemButton-marginBlock': '0px',
  '--ListItemButton-marginInline': '0px',
  '--ListItem-marginBlock': '0px',
  '--ListItem-marginInline': '0px'
};
/**
 * @ignore - internal component.
 */
function ListProvider(props) {
  const {
    children,
    nested,
    row = false,
    wrap = false
  } = props;
  const baseProviders = /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowListContext.default.Provider, {
    value: row,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapListContext.default.Provider, {
      value: wrap,
      children: React.Children.map(children, (child, index) => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
        // to let List(Item|ItemButton) knows when to apply margin(Inline|Block)Start
        ...(index === 0 && {
          'data-first-child': ''
        }),
        ...(index === React.Children.count(children) - 1 && {
          'data-last-child': ''
        })
      }) : child)
    })
  });
  if (nested === undefined) {
    return baseProviders;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_NestedListContext.default.Provider, {
    value: nested,
    children: baseProviders
  });
}
var _default = exports.default = ListProvider;