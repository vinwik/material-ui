import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { InputTypeMap, InputOwnerState } from './InputProps';
export declare const StyledInputRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: InputOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledInputHtml: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: InputOwnerState;
}, React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const StyledInputStartDecorator: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: InputOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledInputEndDecorator: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: InputOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/joy-ui/react-input/)
 *
 * API:
 *
 * - [Input API](https://mui.com/joy-ui/api/input/)
 */
declare const Input: OverridableComponent<InputTypeMap>;
export default Input;
