import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { SheetOwnerState, SheetTypeMap } from './SheetProps';
export declare const SheetRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: SheetOwnerState;
}, Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React.ClassAttributes<HTMLDivElement> | keyof React.HTMLAttributes<HTMLDivElement>>, {}>;
/**
 *
 * Demos:
 *
 * - [Sheet](https://mui.com/joy-ui/react-sheet/)
 *
 * API:
 *
 * - [Sheet API](https://mui.com/joy-ui/api/sheet/)
 */
declare const Sheet: OverridableComponent<SheetTypeMap>;
export default Sheet;
