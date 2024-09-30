import * as React from 'react';
export interface AdGuestProps {
    /**
     * The querySelector use to target the element which will include the ad.
     */
    classSelector?: string;
    children?: React.ReactNode | undefined;
}
declare function AdGuest(props: AdGuestProps): React.JSX.Element | null;
export { AdGuest };
