import { deepmerge } from '@mui/utils';
import { createBreakpoints, createSpacing, colorChannel, unstable_prepareCssVars as prepareCssVars, unstable_createGetCssVar as systemCreateGetCssVar, unstable_styleFunctionSx as styleFunctionSx } from '@mui/system';
import cssContainerQueries from '@mui/system/cssContainerQueries';
import { unstable_applyStyles as applyStyles } from '@mui/system/createTheme';
import { prepareTypographyVars, createGetColorSchemeSelector } from '@mui/system/cssVars';
import { createUnarySpacing } from '@mui/system/spacing';
import defaultSxConfig from "./sxConfig.js";
import colors from "../colors/index.js";
import defaultShouldSkipGeneratingVar from "./shouldSkipGeneratingVar.js";
import { generateUtilityClass } from "../className/index.js";
import { createVariant } from "./variantUtils.js";
function getSpacingVal(spacingInput) {
  if (typeof spacingInput === 'number') {
    return `${spacingInput}px`;
  }
  if (typeof spacingInput === 'string') {
    return spacingInput;
  }
  if (typeof spacingInput === 'function') {
    return getSpacingVal(spacingInput(1));
  }
  if (Array.isArray(spacingInput)) {
    return spacingInput;
  }
  return '8px';
}

// Use Partial2Level instead of PartialDeep because nested value type is CSSObject which does not work with PartialDeep.

export const createGetCssVar = (cssVarPrefix = 'joy') => systemCreateGetCssVar(cssVarPrefix);
export default function extendTheme(themeOptions) {
  const {
    cssVarPrefix = 'joy',
    breakpoints,
    spacing,
    components: componentsInput,
    variants: variantsInput,
    shouldSkipGeneratingVar = defaultShouldSkipGeneratingVar,
    colorSchemeSelector = 'data-joy-color-scheme',
    ...scalesInput
  } = themeOptions || {};
  const getCssVar = createGetCssVar(cssVarPrefix);
  const defaultColors = {
    primary: colors.blue,
    neutral: colors.grey,
    danger: colors.red,
    success: colors.green,
    warning: colors.yellow,
    common: {
      white: '#FFF',
      black: '#000'
    }
  };
  const getCssVarColor = cssVar => {
    const tokens = cssVar.split('-');
    const color = tokens[1];
    const index = tokens[2];

    // @ts-ignore
    return getCssVar(cssVar, defaultColors[color]?.[index]);
  };
  const createLightModeVariantVariables = color => ({
    plainColor: getCssVarColor(`palette-${color}-500`),
    plainHoverBg: getCssVarColor(`palette-${color}-100`),
    plainActiveBg: getCssVarColor(`palette-${color}-200`),
    plainDisabledColor: getCssVarColor(`palette-neutral-400`),
    outlinedColor: getCssVarColor(`palette-${color}-500`),
    outlinedBorder: getCssVarColor(`palette-${color}-300`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-100`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-200`),
    outlinedDisabledColor: getCssVarColor(`palette-neutral-400`),
    outlinedDisabledBorder: getCssVarColor(`palette-neutral-200`),
    softColor: getCssVarColor(`palette-${color}-700`),
    softBg: getCssVarColor(`palette-${color}-100`),
    softHoverBg: getCssVarColor(`palette-${color}-200`),
    softActiveColor: getCssVarColor(`palette-${color}-800`),
    softActiveBg: getCssVarColor(`palette-${color}-300`),
    softDisabledColor: getCssVarColor(`palette-neutral-400`),
    softDisabledBg: getCssVarColor(`palette-neutral-50`),
    solidColor: getCssVarColor(`palette-common-white`),
    solidBg: getCssVarColor(`palette-${color}-500`),
    solidHoverBg: getCssVarColor(`palette-${color}-600`),
    solidActiveBg: getCssVarColor(`palette-${color}-700`),
    solidDisabledColor: getCssVarColor(`palette-neutral-400`),
    solidDisabledBg: getCssVarColor(`palette-neutral-100`)
  });
  const createDarkModeVariantVariables = color => ({
    plainColor: getCssVarColor(`palette-${color}-300`),
    plainHoverBg: getCssVarColor(`palette-${color}-800`),
    plainActiveBg: getCssVarColor(`palette-${color}-700`),
    plainDisabledColor: getCssVarColor(`palette-neutral-500`),
    outlinedColor: getCssVarColor(`palette-${color}-200`),
    outlinedBorder: getCssVarColor(`palette-${color}-700`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-800`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-700`),
    outlinedDisabledColor: getCssVarColor(`palette-neutral-500`),
    outlinedDisabledBorder: getCssVarColor(`palette-neutral-800`),
    softColor: getCssVarColor(`palette-${color}-200`),
    softBg: getCssVarColor(`palette-${color}-800`),
    softHoverBg: getCssVarColor(`palette-${color}-700`),
    softActiveColor: getCssVarColor(`palette-${color}-100`),
    softActiveBg: getCssVarColor(`palette-${color}-600`),
    softDisabledColor: getCssVarColor(`palette-neutral-500`),
    softDisabledBg: getCssVarColor(`palette-neutral-800`),
    solidColor: getCssVarColor(`palette-common-white`),
    solidBg: getCssVarColor(`palette-${color}-500`),
    solidHoverBg: getCssVarColor(`palette-${color}-600`),
    solidActiveBg: getCssVarColor(`palette-${color}-700`),
    solidDisabledColor: getCssVarColor(`palette-neutral-500`),
    solidDisabledBg: getCssVarColor(`palette-neutral-800`)
  });
  const lightColorSystem = {
    palette: {
      mode: 'light',
      primary: {
        ...defaultColors.primary,
        ...createLightModeVariantVariables('primary')
      },
      neutral: {
        ...defaultColors.neutral,
        ...createLightModeVariantVariables('neutral'),
        plainColor: getCssVarColor('palette-neutral-700'),
        plainHoverColor: getCssVarColor(`palette-neutral-900`),
        outlinedColor: getCssVarColor('palette-neutral-700')
      },
      danger: {
        ...defaultColors.danger,
        ...createLightModeVariantVariables('danger')
      },
      success: {
        ...defaultColors.success,
        ...createLightModeVariantVariables('success')
      },
      warning: {
        ...defaultColors.warning,
        ...createLightModeVariantVariables('warning')
      },
      common: {
        white: '#FFF',
        black: '#000'
      },
      text: {
        primary: getCssVarColor('palette-neutral-800'),
        secondary: getCssVarColor('palette-neutral-700'),
        tertiary: getCssVarColor('palette-neutral-600'),
        icon: getCssVarColor('palette-neutral-500')
      },
      background: {
        body: getCssVarColor('palette-common-white'),
        surface: getCssVarColor('palette-neutral-50'),
        popup: getCssVarColor('palette-common-white'),
        level1: getCssVarColor('palette-neutral-100'),
        level2: getCssVarColor('palette-neutral-200'),
        level3: getCssVarColor('palette-neutral-300'),
        tooltip: getCssVarColor('palette-neutral-500'),
        backdrop: `rgba(${getCssVar('palette-neutral-darkChannel', colorChannel(defaultColors.neutral[900]) // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${getCssVar('palette-neutral-mainChannel', colorChannel(defaultColors.neutral[500]) // should be the same index as in `attachColorChannels`
      )} / 0.2)`,
      focusVisible: getCssVarColor('palette-primary-500')
    },
    shadowRing: '0 0 #000',
    shadowChannel: '21 21 21',
    shadowOpacity: '0.08'
  };
  const darkColorSystem = {
    palette: {
      mode: 'dark',
      primary: {
        ...defaultColors.primary,
        ...createDarkModeVariantVariables('primary')
      },
      neutral: {
        ...defaultColors.neutral,
        ...createDarkModeVariantVariables('neutral'),
        plainColor: getCssVarColor('palette-neutral-300'),
        plainHoverColor: getCssVarColor(`palette-neutral-300`)
      },
      danger: {
        ...defaultColors.danger,
        ...createDarkModeVariantVariables('danger')
      },
      success: {
        ...defaultColors.success,
        ...createDarkModeVariantVariables('success')
      },
      warning: {
        ...defaultColors.warning,
        ...createDarkModeVariantVariables('warning')
      },
      common: {
        white: '#FFF',
        black: '#000'
      },
      text: {
        primary: getCssVarColor('palette-neutral-100'),
        secondary: getCssVarColor('palette-neutral-300'),
        tertiary: getCssVarColor('palette-neutral-400'),
        icon: getCssVarColor('palette-neutral-400')
      },
      background: {
        body: getCssVarColor('palette-common-black'),
        surface: getCssVarColor('palette-neutral-900'),
        popup: getCssVarColor('palette-common-black'),
        level1: getCssVarColor('palette-neutral-800'),
        level2: getCssVarColor('palette-neutral-700'),
        level3: getCssVarColor('palette-neutral-600'),
        tooltip: getCssVarColor('palette-neutral-600'),
        backdrop: `rgba(${getCssVar('palette-neutral-darkChannel', colorChannel(defaultColors.neutral[50]) // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${getCssVar('palette-neutral-mainChannel', colorChannel(defaultColors.neutral[500]) // should be the same index as in `attachColorChannels`
      )} / 0.16)`,
      focusVisible: getCssVarColor('palette-primary-500')
    },
    shadowRing: '0 0 #000',
    shadowChannel: '0 0 0',
    shadowOpacity: '0.6'
  };
  const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  const fontFamily = {
    body: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    display: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    code: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
    fallback: fontFamilyFallback,
    ...scalesInput.fontFamily
  };
  const fontWeight = {
    sm: 300,
    // regular
    md: 500,
    // medium
    lg: 600,
    // semi-bold
    xl: 700,
    // bold
    ...scalesInput.fontWeight
  };
  const fontSize = {
    xs: '0.75rem',
    // 12px
    sm: '0.875rem',
    // 14px
    md: '1rem',
    // 16px
    lg: '1.125rem',
    // 18px
    xl: '1.25rem',
    // 20px
    xl2: '1.5rem',
    // 24px
    xl3: '1.875rem',
    // 30px
    xl4: '2.25rem',
    // 36px
    ...scalesInput.fontSize
  };
  const lineHeight = {
    xs: '1.33334',
    // largest font sizes: h1, h2
    sm: '1.42858',
    // normal font sizes
    md: '1.5',
    // normal font sizes
    lg: '1.55556',
    // large font sizes for components
    xl: '1.66667',
    // smallest font sizes
    ...scalesInput.lineHeight
  };
  const defaultShadowRing = scalesInput.colorSchemes?.light?.shadowRing ?? lightColorSystem.shadowRing;
  const defaultShadowChannel = scalesInput.colorSchemes?.light?.shadowChannel ?? lightColorSystem.shadowChannel;
  const defaultShadowOpacity = scalesInput.colorSchemes?.light?.shadowOpacity ?? lightColorSystem.shadowOpacity;
  const defaultScales = {
    colorSchemes: {
      light: lightColorSystem,
      dark: darkColorSystem
    },
    font: {},
    fontSize,
    fontFamily,
    fontWeight,
    focus: {
      thickness: '2px',
      selector: `&.${generateUtilityClass('', 'focusVisible')}, &:focus-visible`,
      default: {
        outlineOffset: `var(--focus-outline-offset, ${getCssVar('focus-thickness', scalesInput.focus?.thickness ?? '2px')})`,
        outline: `${getCssVar('focus-thickness', scalesInput.focus?.thickness ?? '2px')} solid ${getCssVar('palette-focusVisible', defaultColors.primary[500])}`
      }
    },
    lineHeight,
    radius: {
      xs: '2px',
      sm: '6px',
      md: '8px',
      lg: '12px',
      xl: '16px'
    },
    shadow: {
      xs: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
      sm: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 2px 4px 0px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
      md: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 6px 12px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
      lg: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 12px 16px -4px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
      xl: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 20px 24px -4px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`
    },
    zIndex: {
      badge: 1,
      table: 10,
      popup: 1000,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    },
    typography: {
      h1: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl4, ${fontSize.xl4}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        letterSpacing: '-0.025em',
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h2: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl3, ${fontSize.xl3}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        letterSpacing: '-0.025em',
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h3: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl2, ${fontSize.xl2}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        letterSpacing: '-0.025em',
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h4: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl, ${fontSize.xl}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        letterSpacing: '-0.025em',
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      'title-lg': {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      'title-md': {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      'title-sm': {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      'body-lg': {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
      },
      'body-md': {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
      },
      'body-sm': {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
      },
      'body-xs': {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xs, ${fontSize.xs}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
      }
    }
  };
  const {
    colorSchemes,
    ...mergedScales
  } = scalesInput ? deepmerge(defaultScales, scalesInput) : defaultScales;
  let theme = {
    colorSchemeSelector,
    colorSchemes,
    defaultColorScheme: 'light',
    ...mergedScales,
    breakpoints: createBreakpoints(breakpoints ?? {}),
    components: deepmerge({
      // TODO: find a way to abstract SvgIcon out of @mui/material
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'xl2'
        },
        styleOverrides: {
          root: ({
            ownerState,
            theme: themeProp
          }) => {
            const instanceFontSize = ownerState.instanceFontSize;
            return {
              margin: 'var(--Icon-margin)',
              ...(ownerState.fontSize && ownerState.fontSize !== 'inherit' && {
                fontSize: `var(--Icon-fontSize, ${themeProp.vars.fontSize[ownerState.fontSize]})`
              }),
              ...(!ownerState.htmlColor && {
                color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
                ...(ownerState.color && ownerState.color !== 'inherit' && themeProp.vars.palette[ownerState.color] && {
                  color: `rgba(${themeProp.vars.palette[ownerState.color]?.mainChannel} / 1)`
                })
              }),
              ...(instanceFontSize && instanceFontSize !== 'inherit' && {
                '--Icon-fontSize': themeProp.vars.fontSize[instanceFontSize]
              })
            };
          }
        }
      }
    }, componentsInput),
    cssVarPrefix,
    getCssVar,
    spacing: getSpacingVal(spacing),
    font: {
      ...prepareTypographyVars(mergedScales.typography),
      ...mergedScales.font
    }
  }; // Need type casting due to module augmentation inside the repo
  theme = cssContainerQueries(theme);

  /**
   Color channels generation
  */
  function attachColorChannels(supportedColorScheme, palette) {
    Object.keys(palette).forEach(key => {
      const channelMapping = {
        main: '500',
        light: '200',
        dark: '700'
      };
      if (supportedColorScheme === 'dark') {
        // @ts-ignore internal
        channelMapping.main = 400;
      }
      if (!palette[key].mainChannel && palette[key][channelMapping.main]) {
        palette[key].mainChannel = colorChannel(palette[key][channelMapping.main]);
      }
      if (!palette[key].lightChannel && palette[key][channelMapping.light]) {
        palette[key].lightChannel = colorChannel(palette[key][channelMapping.light]);
      }
      if (!palette[key].darkChannel && palette[key][channelMapping.dark]) {
        palette[key].darkChannel = colorChannel(palette[key][channelMapping.dark]);
      }
    });
  }
  // Set the channels
  Object.entries(theme.colorSchemes).forEach(([supportedColorScheme, colorSystem]) => {
    attachColorChannels(supportedColorScheme, colorSystem.palette);
  });

  // ===============================================================
  // Create `theme.vars` that contain `var(--*)` as values
  // ===============================================================
  const parserConfig = {
    prefix: cssVarPrefix,
    colorSchemeSelector,
    disableCssColorScheme: true,
    shouldSkipGeneratingVar
  };
  const {
    vars,
    generateThemeVars,
    generateStyleSheets
  } = prepareCssVars(theme, parserConfig);
  theme.vars = vars;
  theme.generateThemeVars = generateThemeVars;
  theme.generateStyleSheets = generateStyleSheets;
  theme.generateSpacing = function generateSpacing() {
    return createSpacing(spacing, createUnarySpacing(this));
  };
  theme.spacing = theme.generateSpacing();
  theme.typography = mergedScales.typography; // cast to `any` to avoid internal module augmentation in the repo.
  theme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...themeOptions?.unstable_sxConfig
  };
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  theme.getColorSchemeSelector = createGetColorSchemeSelector(colorSchemeSelector);
  const createVariantInput = {
    getCssVar,
    palette: theme.colorSchemes.light.palette
  };
  theme.variants = deepmerge({
    plain: createVariant('plain', createVariantInput),
    plainHover: createVariant('plainHover', createVariantInput),
    plainActive: createVariant('plainActive', createVariantInput),
    plainDisabled: createVariant('plainDisabled', createVariantInput),
    outlined: createVariant('outlined', createVariantInput),
    outlinedHover: createVariant('outlinedHover', createVariantInput),
    outlinedActive: createVariant('outlinedActive', createVariantInput),
    outlinedDisabled: createVariant('outlinedDisabled', createVariantInput),
    soft: createVariant('soft', createVariantInput),
    softHover: createVariant('softHover', createVariantInput),
    softActive: createVariant('softActive', createVariantInput),
    softDisabled: createVariant('softDisabled', createVariantInput),
    solid: createVariant('solid', createVariantInput),
    solidHover: createVariant('solidHover', createVariantInput),
    solidActive: createVariant('solidActive', createVariantInput),
    solidDisabled: createVariant('solidDisabled', createVariantInput)
  }, variantsInput);
  Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
    // @ts-ignore
    theme[key] = value;
  });
  theme.palette = {
    ...theme.colorSchemes.light.palette,
    colorScheme: 'light'
  };
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar;
  theme.applyStyles = applyStyles;
  return theme;
}