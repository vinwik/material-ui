import * as React from 'react';
import { MuiRenderResult } from './createRenderer';
export interface SlotTestingOptions {
    /**
     * A custom React component to test if the receiving props are correct.
     *
     * It must:
     * - contains at least one DOM which has `data-testid="custom"`
     * - spread `className` to the DOM
     *
     * If not provided, the default custom component tests if the class name is spread.
     */
    testWithComponent?: React.ComponentType;
    /**
     * A custom HTML tag to use for the `slots` prop.
     */
    testWithElement?: keyof React.JSX.IntrinsicElements | null;
    /**
     * To ensure that the slot has this class name when `slotProps` is provided.
     */
    expectedClassName: string;
    isOptional?: boolean;
}
interface SlotTestOverride {
    slotName: string;
    slotClassName?: string;
}
export interface ConformanceOptions {
    muiName: string;
    classes: {
        root: string;
    };
    refInstanceof: any;
    after?: () => void;
    inheritComponent?: React.ElementType;
    render: (node: React.ReactElement<any>) => MuiRenderResult | Promise<MuiRenderResult>;
    only?: Array<keyof typeof fullSuite>;
    skip?: Array<keyof typeof fullSuite | 'classesRoot'>;
    testComponentsRootPropWith?: string;
    /**
     * A custom React component to test if the component prop is implemented correctly.
     *
     * It must either:
     * - Be a string that is a valid HTML tag, or
     * - A component that spread props to the underlying rendered element.
     *
     * If not provided, the default 'em' element is used.
     */
    testComponentPropWith?: string | React.ElementType;
    testDeepOverrides?: SlotTestOverride | SlotTestOverride[];
    testRootOverrides?: SlotTestOverride;
    testStateOverrides?: {
        prop?: string;
        value?: any;
        styleKey: string;
    };
    testCustomVariant?: boolean;
    testVariantProps?: object;
    testLegacyComponentsProp?: boolean;
    slots?: Record<string, SlotTestingOptions>;
    ThemeProvider?: React.ElementType;
    createTheme?: (arg: any) => any;
}
/**
 * Glossary
 * - root component:
 *   - renders the outermost host component
 *   - has the `root` class if the component has one
 *   - excess props are spread to this component
 *   - has the type of `inheritComponent`
 */
export declare function randomStringValue(): string;
/**
 * MUI components have a `className` prop. The `className` is applied to
 * the root component.
 */
export declare function testClassName(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * MUI components have a `component` prop that allows rendering a different
 * Component from @inheritComponent
 */
export declare function testComponentProp(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * MUI components spread additional props to its root.
 */
export declare function testPropsSpread(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * Tests that the `ref` of a component will return the correct instance
 *
 * This is determined by a given constructor i.e. a React.Component or HTMLElement for
 * components that forward their ref and attach it to a host component.
 */
export declare function describeRef(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * Tests that the root component has the root class
 */
export declare function testRootClass(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
declare function testSlotsProp(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
declare function testSlotPropsProp(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
declare function testSlotPropsCallback(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * MUI components have a `components` prop that allows rendering a different
 * Components from @inheritComponent
 */
declare function testComponentsProp(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * MUI theme has a components section that allows specifying default props.
 * Components from @inheritComponent
 */
declare function testThemeDefaultProps(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * MUI theme has a components section that allows specifying style overrides.
 * Components from @inheritComponent
 */
declare function testThemeStyleOverrides(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * MUI theme has a components section that allows specifying custom variants.
 * Components from @inheritComponent
 */
declare function testThemeVariants(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
/**
 * MUI theme supports custom palettes.
 * The components that iterate over the palette via `variants` should be able to render with or without applying the custom palette styles.
 */
declare function testThemeCustomPalette(element: React.ReactElement<any>, getOptions: () => ConformanceOptions): void;
declare const fullSuite: {
    componentProp: typeof testComponentProp;
    componentsProp: typeof testComponentsProp;
    mergeClassName: typeof testClassName;
    propsSpread: typeof testPropsSpread;
    refForwarding: typeof describeRef;
    rootClass: typeof testRootClass;
    slotPropsProp: typeof testSlotPropsProp;
    slotPropsCallback: typeof testSlotPropsCallback;
    slotsProp: typeof testSlotsProp;
    themeDefaultProps: typeof testThemeDefaultProps;
    themeStyleOverrides: typeof testThemeStyleOverrides;
    themeVariants: typeof testThemeVariants;
    themeCustomPalette: typeof testThemeCustomPalette;
};
declare const _default: {
    (minimalElement: React.ReactElement<any, string | React.JSXElementConstructor<any>>, getOptions: () => ConformanceOptions): void;
    skip: (minimalElement: React.ReactElement<any, string | React.JSXElementConstructor<any>>, getOptions: () => ConformanceOptions) => void;
    only: (minimalElement: React.ReactElement<any, string | React.JSXElementConstructor<any>>, getOptions: () => ConformanceOptions) => void;
};
export default _default;
//# sourceMappingURL=describeConformance.d.ts.map