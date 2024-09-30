import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { TypographyTypeMap } from './TypographyProps';
/**
 * @internal
 * For creating nested Typography to have inherit level (unless an explicit `level` prop is provided)
 * and change the HTML tag to `span` (unless an explicit `component` prop is provided).
 */
export declare const TypographyNestedContext: React.Context<boolean>;
/**
 * @internal
 * Typography's level will be inherit within this context unless an explicit `level` prop is provided.
 *
 * This is used in components, for example Table, to inherit the parent's size by default.
 */
export declare const TypographyInheritContext: React.Context<boolean>;
/**
 *
 * Demos:
 *
 * - [Skeleton](https://mui.com/joy-ui/react-skeleton/)
 * - [Typography](https://mui.com/joy-ui/react-typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/joy-ui/api/typography/)
 */
declare const Typography: OverridableComponent<TypographyTypeMap>;
export default Typography;
