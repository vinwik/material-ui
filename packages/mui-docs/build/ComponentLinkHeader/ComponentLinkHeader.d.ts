import * as React from 'react';
import { MarkdownHeaders } from '@mui/internal-markdown';
export interface ComponentLinkHeaderProps {
    design?: boolean;
    markdown: {
        headers: MarkdownHeaders;
    };
}
export declare function ComponentLinkHeader(props: ComponentLinkHeaderProps): React.JSX.Element;
