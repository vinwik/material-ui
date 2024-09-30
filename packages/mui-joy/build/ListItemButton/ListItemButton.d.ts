import * as React from 'react';
import { ListItemButtonOwnerState, ExtendListItemButton, ListItemButtonTypeMap } from './ListItemButtonProps';
export declare const StyledListItemButton: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ListItemButtonOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/joy-ui/react-list/)
 *
 * API:
 *
 * - [ListItemButton API](https://mui.com/joy-ui/api/list-item-button/)
 */
declare const ListItemButton: ExtendListItemButton<ListItemButtonTypeMap>;
export default ListItemButton;
