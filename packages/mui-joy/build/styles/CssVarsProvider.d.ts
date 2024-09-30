import * as React from 'react';
import type { SupportedColorScheme } from './types';
declare const CssVarsProvider: (props: React.PropsWithChildren<Partial<import("@mui/system").CssVarsProviderConfig<SupportedColorScheme>> & {
    theme?: {
        cssVariables?: false;
        cssVarPrefix?: string;
        colorSchemes: Partial<Record<SupportedColorScheme, any>>;
        colorSchemeSelector?: "media" | "class" | "data" | string;
    } | {
        $$joy: {
            cssVariables?: false;
            cssVarPrefix?: string;
            colorSchemes: Partial<Record<SupportedColorScheme, any>>;
            colorSchemeSelector?: "media" | "class" | "data" | string;
        };
    } | undefined;
    documentNode?: Document | null;
    colorSchemeNode?: Element | null;
    storageWindow?: Window | null;
    disableNestedContext?: boolean;
    disableStyleSheetGeneration?: boolean;
}>) => React.ReactElement<any>, useColorScheme: () => import("@mui/system").ColorSchemeContextValue<SupportedColorScheme>, deprecatedGetInitColorSchemeScript: typeof import("@mui/system/InitColorSchemeScript").default;
declare const getInitColorSchemeScript: typeof deprecatedGetInitColorSchemeScript;
export { CssVarsProvider, useColorScheme, getInitColorSchemeScript };
