import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { ListItemOwnerState, ListItemTypeMap } from './ListItemProps';
export declare const StyledListItem: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ListItemOwnerState;
}, React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
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
declare const ListItem: OverridableComponent<ListItemTypeMap>;
export default ListItem;
