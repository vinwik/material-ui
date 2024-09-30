import * as React from 'react';
type AdPortal = {
    placement: 'body-top';
    element: Element | null;
};
interface AdManagerProps {
    /**
     * The querySelector use to target the element which will include the ad.
     */
    classSelector?: string;
    children?: React.ReactNode | undefined;
}
export declare const AdContext: React.Context<AdPortal>;
export declare const adShape: string;
export declare function AdManager({ classSelector, children }: AdManagerProps): React.JSX.Element;
export {};
