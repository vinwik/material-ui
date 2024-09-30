import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { CardContentProps, CardContentTypeMap } from './CardContentProps';
export declare const StyledCardContentRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: CardContentProps;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [CardContent API](https://mui.com/joy-ui/api/card-content/)
 */
declare const CardContent: OverridableComponent<CardContentTypeMap>;
export default CardContent;
