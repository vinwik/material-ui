import * as React from 'react';
export interface SectionTitleProps<Hash extends string = string> {
    title: string;
    hash: Hash;
    level?: 'h2' | 'h3' | 'h4';
}
export declare function SectionTitle(props: SectionTitleProps): React.JSX.Element;
