import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { ModalOwnerState, ModalTypeMap } from './ModalProps';
export declare const StyledModalRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ModalOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledModalBackdrop: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ModalOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ModalBackdrop: import("@emotion/styled").StyledComponent<Pick<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ModalOwnerState;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, keyof React.ClassAttributes<HTMLDivElement> | keyof React.HTMLAttributes<HTMLDivElement> | "ownerState" | keyof import("@mui/system").MUIStyledCommonProps<import("../styles").Theme>> & import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ModalOwnerState;
}, {}, {}>;
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/joy-ui/react-modal/)
 *
 * API:
 *
 * - [Modal API](https://mui.com/joy-ui/api/modal/)
 */
declare const Modal: OverridableComponent<ModalTypeMap>;
export default Modal;
