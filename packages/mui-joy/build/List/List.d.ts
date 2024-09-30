import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { ListOwnerState, ListTypeMap } from './ListProps';
export declare const StyledList: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ListOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/joy-ui/react-list/)
 *
 * API:
 *
 * - [List API](https://mui.com/joy-ui/api/list/)
 */
declare const List: OverridableComponent<ListTypeMap>;
export default List;
