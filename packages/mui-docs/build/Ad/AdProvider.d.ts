import * as React from 'react';
export interface AdConfig {
    /**
     * The ratio of "ad display" event sent to Google Analytics.
     * Used to avoid an exceed on the Google Analytics quotas.
     * @default 0.1
     */
    GADisplayRatio: number;
}
export interface AdProviderProps {
    children: React.ReactNode;
    config?: Partial<AdConfig>;
}
export declare function AdProvider(props: AdProviderProps): React.JSX.Element;
export declare function useAdConfig(): AdConfig;
