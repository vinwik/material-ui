"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Grid = require("@mui/system/Grid");
var _styles = require("../styles");
/**
 *
 * Demos:
 *
 * - [Grid](https://mui.com/joy-ui/react-grid/)
 *
 * API:
 *
 * - [Grid API](https://mui.com/joy-ui/api/grid/)
 */
const Grid = (0, _Grid.createGrid)({
  createStyledComponent: (0, _styles.styled)('div', {
    name: 'JoyGrid',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: inProps => (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyGrid'
  })
});
process.env.NODE_ENV !== "production" ? Grid.propTypes /* remove-proptypes */ = {
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
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = exports.default = Grid;