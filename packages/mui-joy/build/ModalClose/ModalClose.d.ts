import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { ModalCloseOwnerState, ModalCloseTypeMap } from './ModalCloseProps';
export declare const ModalCloseRoot: import("@emotion/styled").StyledComponent<Pick<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: import("..").IconButtonOwnerState;
} & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>, keyof React.ClassAttributes<HTMLButtonElement> | keyof React.ButtonHTMLAttributes<HTMLButtonElement> | "ownerState" | keyof import("@mui/system").MUIStyledCommonProps<import("../styles").Theme>> & import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ModalCloseOwnerState;
}, {}, {}>;
/**
 *
 * Demos:
 *
 * - [Drawer](https://mui.com/joy-ui/react-drawer/)
 * - [Modal](https://mui.com/joy-ui/react-modal/)
 *
 * API:
 *
 * - [ModalClose API](https://mui.com/joy-ui/api/modal-close/)
 */
declare const ModalClose: OverridableComponent<ModalCloseTypeMap>;
export default ModalClose;
