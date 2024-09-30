import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { type MenuButtonOwnerState, type MenuButtonTypeMap } from './MenuButtonProps';
export declare const MenuButtonRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: MenuButtonOwnerState;
}, Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof React.ClassAttributes<HTMLButtonElement> | keyof React.ButtonHTMLAttributes<HTMLButtonElement>>, {}>;
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/joy-ui/react-menu/)
 *
 * API:
 *
 * - [MenuButton API](https://mui.com/joy-ui/api/menu-button/)
 */
declare const MenuButton: OverridableComponent<MenuButtonTypeMap>;
export default MenuButton;
