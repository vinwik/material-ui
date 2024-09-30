import * as React from 'react';
export declare const CodeTabList: import("@mui/styled-engine").StyledComponent<import("@mui/base/TabsList").TabsListOwnProps & Omit<any, keyof import("@mui/base/TabsList").TabsListOwnProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & {
    ownerState: {
        mounted: boolean;
        contained?: boolean;
    };
}, {}, {}>;
export declare const CodeTabPanel: import("@mui/styled-engine").StyledComponent<import("@mui/base/TabPanel").TabPanelOwnProps & Omit<any, keyof import("@mui/base/TabPanel").TabPanelOwnProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & {
    ownerState: {
        mounted: boolean;
        contained?: boolean;
    };
}, {}, {}>;
export declare const CodeTab: import("@mui/styled-engine").StyledComponent<import("@mui/base/Tab").TabOwnProps & Omit<any, keyof import("@mui/base/Tab").TabOwnProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & {
    ownerState: {
        mounted: boolean;
        contained?: boolean;
    };
}, {}, {}>;
type TabsConfig = {
    code: string | ((tab: string) => string);
    language: string;
    tab: string;
};
export declare function HighlightedCodeWithTabs(props: {
    tabs: Array<TabsConfig>;
    storageKey?: string;
} & Record<string, any>): React.JSX.Element;
export {};
