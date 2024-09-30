import { Interpolation } from '@mui/system';
import { Theme } from '../styles';
import { ButtonOwnerState, ButtonTypeMap, ExtendButton } from './ButtonProps';
export declare const getButtonStyles: ({ theme, ownerState, }: {
    theme: Theme;
    ownerState: Partial<Omit<ButtonOwnerState, "slots" | "slotProps">>;
}) => Interpolation<any>;
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
 * - [Button API](https://mui.com/joy-ui/api/button/)
 */
declare const Button: ExtendButton<ButtonTypeMap>;
export default Button;
