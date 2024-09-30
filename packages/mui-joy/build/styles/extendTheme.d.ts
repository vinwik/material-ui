import { BreakpointsOptions, SpacingOptions, SxConfig } from '@mui/system';
import { DefaultColorScheme, ExtendedColorScheme } from './types/colorScheme';
import { ColorSystem, PaletteOptions } from './types/colorSystem';
import { Focus } from './types/focus';
import { TypographySystemOptions } from './types/typography';
import { Variants } from './types/variants';
import { Theme, ThemeCssVar, ThemeScalesOptions } from './types';
import { Components } from './components';
import { MergeDefault } from './types/utils';
type Partial2Level<T> = {
    [K in keyof T]?: T[K] extends Record<any, any> ? {
        [J in keyof T[K]]?: T[K][J];
    } : T[K];
};
type Partial3Level<T> = {
    [K in keyof T]?: {
        [J in keyof T[K]]?: T[K][J] extends Record<any, any> ? {
            [P in keyof T[K][J]]?: T[K][J][P];
        } : T[K][J];
    };
};
export type ColorSystemOptions = Partial3Level<MergeDefault<ColorSystem, {
    palette: PaletteOptions;
}>> & {
    shadowRing?: string;
    shadowChannel?: string;
    shadowOpacity?: string;
};
export interface CssVarsThemeOptions extends Partial2Level<ThemeScalesOptions> {
    /**
     * Prefix of the generated CSS variables
     * @default 'joy'
     * @example extendTheme({ cssVarPrefix: 'foo-bar' })
     * // { ..., typography: { body1: { fontSize: 'var(--foo-bar-fontSize-md)' } }, ... }
     *
     * @example <caption>Provides empty string ('') to remove the prefix</caption>
     * extendTheme({ cssVarPrefix: '' })
     * // { ..., typography: { body1: { fontSize: 'var(--fontSize-md)' } }, ... }
     */
    cssVarPrefix?: string;
    /**
     * The strategy to generate CSS variables
     *
     * @example 'media'
     * Generate CSS variables using [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
     *
     * @example '.mode-%s'
     * Generate CSS variables within a class .mode-light, .mode-dark
     *
     * @example '[data-mode-%s]'
     * Generate CSS variables within a data attribute [data-mode-light], [data-mode-dark]
     */
    colorSchemeSelector?: 'media' | 'class' | 'data' | string;
    /**
     * @default 'light'
     */
    defaultColorScheme?: DefaultColorScheme | ExtendedColorScheme;
    direction?: 'ltr' | 'rtl';
    focus?: Partial<Focus>;
    typography?: Partial<TypographySystemOptions>;
    variants?: Partial2Level<Variants>;
    breakpoints?: BreakpointsOptions;
    spacing?: SpacingOptions;
    components?: Components<Theme>;
    colorSchemes?: Partial<Record<DefaultColorScheme | ExtendedColorScheme, ColorSystemOptions>>;
    unstable_sxConfig?: SxConfig;
    /**
     * A function to determine if the key, value should be attached as CSS Variable
     * `keys` is an array that represents the object path keys.
     *  Ex, if the theme is { foo: { bar: 'var(--test)' } }
     *  then, keys = ['foo', 'bar']
     *        value = 'var(--test)'
     */
    shouldSkipGeneratingVar?: (keys: string[], value: string | number) => boolean;
}
export declare const createGetCssVar: (cssVarPrefix?: string) => <AdditionalVars extends string = never>(field: ThemeCssVar | AdditionalVars, ...fallbacks: (ThemeCssVar | AdditionalVars)[]) => string;
export default function extendTheme(themeOptions?: CssVarsThemeOptions): Theme;
export {};
