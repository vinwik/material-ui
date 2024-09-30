'use client';

import PropTypes from 'prop-types';
import { createGrid } from '@mui/system/Grid';
import { styled, useThemeProps } from "../styles/index.js";
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
const Grid = createGrid({
  createStyledComponent: styled('div', {
    name: 'JoyGrid',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: inProps => useThemeProps({
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
  children: PropTypes.node,
  /**
   * @ignore
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export default Grid;