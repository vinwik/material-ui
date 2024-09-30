import * as React from 'react';
import PropTypes from 'prop-types';
export interface UserLanguageProviderProps {
    children: React.ReactNode;
    translations?: Translations;
    defaultUserLanguage: string;
}
export declare function UserLanguageProvider(props: UserLanguageProviderProps): React.JSX.Element;
export declare namespace UserLanguageProvider {
    var propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        defaultUserLanguage: PropTypes.Requireable<string>;
    };
}
export declare function useUserLanguage(): string;
export declare function useSetUserLanguage(): React.Dispatch<React.SetStateAction<string>>;
export interface TranslateOptions {
    ignoreWarning?: boolean;
}
export type Translate = (key: string, options?: TranslateOptions) => any;
export declare function useTranslate(): Translate;
export type Translations = {
    [key in string]?: string | Translations;
};
export interface RequireContext {
    (req: string): string;
    keys: () => string[];
}
export declare function mapTranslations(req: RequireContext): Translations;
