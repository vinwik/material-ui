import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { DividerOwnerState, DividerTypeMap } from './DividerProps';
export declare const DividerRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: DividerOwnerState;
}, Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, keyof React.ClassAttributes<HTMLHRElement> | keyof React.HTMLAttributes<HTMLHRElement>>, {}>;
/**
 *
 * Demos:
 *
 * - [Divider](https://mui.com/joy-ui/react-divider/)
 *
 * API:
 *
 * - [Divider API](https://mui.com/joy-ui/api/divider/)
 */
declare const Divider: OverridableComponent<DividerTypeMap>;
export default Divider;
