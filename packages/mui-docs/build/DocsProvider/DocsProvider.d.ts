import * as React from 'react';
import { Translations } from '../i18n';
import { AdConfig } from '../Ad';
export interface DocsConfig {
    LANGUAGES: string[];
    LANGUAGES_SSR: string[];
    LANGUAGES_IN_PROGRESS: string[];
    LANGUAGES_IGNORE_PAGES: (pathname: string) => boolean;
}
export interface DocsProviderProps {
    config: DocsConfig;
    adConfig?: Partial<AdConfig>;
    defaultUserLanguage: string;
    children?: React.ReactNode;
    translations?: Translations;
}
export declare function DocsProvider({ config, adConfig, defaultUserLanguage, translations, children, }: DocsProviderProps): React.JSX.Element;
export declare function useDocsConfig(): DocsConfig;
