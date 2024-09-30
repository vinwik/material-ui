import type { CSSObject } from '@mui/system';
import { ThemeOptions, Theme } from '@mui/material/styles';
interface ApplyDarkStyles {
    (scheme: CSSObject): CSSObject;
}
declare module '@mui/material/styles' {
    interface Theme {
        applyDarkStyles: ApplyDarkStyles;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface ColorRange {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }
    interface PaletteColor extends ColorRange {
    }
    interface Palette {
        primaryDark: PaletteColor;
        gradients: {
            radioSubtle: string;
            linearSubtle: string;
        };
    }
    interface TypeText {
        tertiary: string;
    }
}
declare module '@mui/material/styles/createTypography' {
    interface TypographyOptions {
        fontWeightSemiBold?: number;
        fontWeightExtraBold?: number;
        fontFamilyCode?: string;
        fontFamilySystem?: string;
    }
    interface Typography {
        fontWeightSemiBold: number;
        fontWeightExtraBold: number;
        fontFamilyCode: string;
        fontFamilySystem: string;
    }
}
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        grey: true;
    }
}
declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        danger: true;
    }
    interface SvgIconPropsSizeOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xl2: true;
        xl3: true;
        xl4: true;
    }
}
export declare const blue: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    main: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const blueDark: {
    50: string;
    100: string;
    200: string;
    300: string;
    main: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const grey: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const error: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    main: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const success: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const warning: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    main: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export declare const getMetaThemeColor: (mode: "light" | "dark") => string;
export declare const getDesignTokens: (mode: "light" | "dark") => ThemeOptions;
export declare function getThemedComponents(): ThemeOptions;
export declare const brandingDarkTheme: Theme;
export declare const brandingLightTheme: Theme;
export {};
