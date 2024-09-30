import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { ModalOverflowOwnerState, ModalOverflowTypeMap } from './ModalOverflowProps';
export declare const ModalOverflowRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ModalOverflowOwnerState;
}, Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React.ClassAttributes<HTMLDivElement> | keyof React.HTMLAttributes<HTMLDivElement>>, {}>;
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/joy-ui/react-modal/)
 *
 * API:
 *
 * - [ModalOverflow API](https://mui.com/joy-ui/api/modal-overflow/)
 */
declare const ModalOverflow: OverridableComponent<ModalOverflowTypeMap>;
export default ModalOverflow;
