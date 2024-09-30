import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { CardActionsOwnerState, CardActionsTypeMap } from './CardActionsProps';
export declare const StyledCardActionsRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: CardActionsOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [CardActions API](https://mui.com/joy-ui/api/card-actions/)
 */
declare const CardActions: OverridableComponent<CardActionsTypeMap>;
export default CardActions;
