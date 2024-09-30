import * as React from 'react';
export interface BrandingProviderProps {
    children: React.ReactNode;
    /**
     * If not `undefined`, the provider is considered nesting and does not render NextNProgressBar & CssBaseline
     */
    mode?: 'light' | 'dark';
}
export declare function BrandingProvider(props: BrandingProviderProps): React.JSX.Element;
