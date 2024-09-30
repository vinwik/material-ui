import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { ButtonGroupOwnerState, ButtonGroupTypeMap } from './ButtonGroupProps';
export declare const StyledButtonGroup: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: ButtonGroupOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Button Group](https://mui.com/joy-ui/react-button-group/)
 *
 * API:
 *
 * - [ButtonGroup API](https://mui.com/joy-ui/api/button-group/)
 */
declare const ButtonGroup: OverridableComponent<ButtonGroupTypeMap>;
export default ButtonGroup;
