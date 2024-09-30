import * as React from 'react';
export interface MarkdownElementProps {
    className?: string;
    renderedMarkdown?: string;
    children?: React.ReactNode;
}
export declare const MarkdownElement: React.ForwardRefExoticComponent<MarkdownElementProps & React.RefAttributes<HTMLDivElement>>;
