import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { CardOwnerState, CardTypeMap } from './CardProps';
export declare const StyledCardRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: CardOwnerState;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [Card API](https://mui.com/joy-ui/api/card/)
 */
declare const Card: OverridableComponent<CardTypeMap>;
export default Card;
