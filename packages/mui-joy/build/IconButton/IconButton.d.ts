import * as React from 'react';
import { IconButtonOwnerState, IconButtonTypeMap, ExtendIconButton } from './IconButtonProps';
export declare const StyledIconButton: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: IconButtonOwnerState;
}, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const IconButtonRoot: import("@emotion/styled").StyledComponent<Pick<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: IconButtonOwnerState;
} & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>, keyof React.ClassAttributes<HTMLButtonElement> | keyof React.ButtonHTMLAttributes<HTMLButtonElement> | "ownerState" | keyof import("@mui/system").MUIStyledCommonProps<import("../styles").Theme>> & import("@mui/system").MUIStyledCommonProps<import("../styles").Theme>, {}, {}>;
/**
 *
 * Demos:
 *
 * - [Button](https://mui.com/joy-ui/react-button/)
 * - [Button Group](https://mui.com/joy-ui/react-button-group/)
 * - [Toggle Button Group](https://mui.com/joy-ui/react-toggle-button-group/)
 *
 * API:
 *
 * - [IconButton API](https://mui.com/joy-ui/api/icon-button/)
 */
declare const IconButton: ExtendIconButton<IconButtonTypeMap>;
export default IconButton;
