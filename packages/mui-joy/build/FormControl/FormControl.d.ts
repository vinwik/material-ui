import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { FormControlOwnerState, FormControlTypeMap } from './FormControlProps';
export declare const FormControlRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: FormControlOwnerState;
}, Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof React.ClassAttributes<HTMLDivElement> | keyof React.HTMLAttributes<HTMLDivElement>>, {}>;
/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/joy-ui/react-input/)
 *
 * API:
 *
 * - [FormControl API](https://mui.com/joy-ui/api/form-control/)
 */
declare const FormControl: OverridableComponent<FormControlTypeMap>;
export default FormControl;
