"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomStringValue = randomStringValue;
exports.testClassName = testClassName;
exports.testComponentProp = testComponentProp;
exports.testPropsSpread = testPropsSpread;
exports.describeRef = describeRef;
exports.testRootClass = testRootClass;
/* eslint-env mocha */
const React = __importStar(require("react"));
const chai_1 = require("chai");
const createDescribe_1 = __importDefault(require("./createDescribe"));
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
 * Glossary
 * - root component:
 *   - renders the outermost host component
 *   - has the `root` class if the component has one
 *   - excess props are spread to this component
 *   - has the type of `inheritComponent`
 */
function randomStringValue() {
    return `s${Math.random().toString(36).slice(2)}`;
}
function throwMissingPropError(field) {
    throw new Error(`missing "${field}" in options

  > describeConformance(element, () => options)
`);
}
/**
 * MUI components have a `className` prop. The `className` is applied to
 * the root component.
 */
function testClassName(element, getOptions) {
    it('applies the className to the root component', async () => {
        const { render } = getOptions();
        if (!render) {
            throwMissingPropError('render');
        }
        const className = randomStringValue();
        const testId = randomStringValue();
        const { getByTestId } = await render(React.cloneElement(element, { className, 'data-testid': testId }));
        (0, chai_1.expect)(getByTestId(testId)).to.have.class(className);
    });
}
/**
 * MUI components have a `component` prop that allows rendering a different
 * Component from @inheritComponent
 */
function testComponentProp(element, getOptions) {
    describe('prop: component', () => {
        it('can render another root component with the `component` prop', async () => {
            const { render, testComponentPropWith: component = 'em' } = getOptions();
            if (!render) {
                throwMissingPropError('render');
            }
            const testId = randomStringValue();
            if (typeof component === 'string') {
                const { getByTestId } = await render(React.cloneElement(element, { component, 'data-testid': testId }));
                (0, chai_1.expect)(getByTestId(testId)).not.to.equal(null);
                (0, chai_1.expect)(getByTestId(testId).nodeName.toLowerCase()).to.eq(component);
            }
            else {
                const componentWithTestId = (props) => React.createElement(component, { ...props, 'data-testid': testId });
                const { getByTestId } = await render(React.cloneElement(element, {
                    component: componentWithTestId,
                }));
                (0, chai_1.expect)(getByTestId(testId)).not.to.equal(null);
            }
        });
    });
}
/**
 * MUI components spread additional props to its root.
 */
function testPropsSpread(element, getOptions) {
    it(`spreads props to the root component`, async () => {
        // type def in ConformanceOptions
        const { render } = getOptions();
        if (!render) {
            throwMissingPropError('render');
        }
        const testProp = 'data-test-props-spread';
        const value = randomStringValue();
        const testId = randomStringValue();
        const { getByTestId } = await render(React.cloneElement(element, { [testProp]: value, 'data-testid': testId }));
        (0, chai_1.expect)(getByTestId(testId)).to.have.attribute(testProp, value);
    });
}
/**
 * Tests that the `ref` of a component will return the correct instance
 *
 * This is determined by a given constructor i.e. a React.Component or HTMLElement for
 * components that forward their ref and attach it to a host component.
 */
function describeRef(element, getOptions) {
    describe('ref', () => {
        it(`attaches the ref`, async () => {
            // type def in ConformanceOptions
            const { render, refInstanceof } = getOptions();
            if (!render) {
                throwMissingPropError('render');
            }
            const ref = React.createRef();
            await render(React.cloneElement(element, { ref }));
            (0, chai_1.expect)(ref.current).to.be.instanceof(refInstanceof);
        });
    });
}
/**
 * Tests that the root component has the root class
 */
function testRootClass(element, getOptions) {
    it('applies the root class to the root component if it has this class', async () => {
        const { classes, render, skip } = getOptions();
        if (classes.root == null) {
            return;
        }
        const className = randomStringValue();
        const classesRootClassname = randomStringValue();
        const { container } = await render(React.cloneElement(element, {
            className,
            classes: { ...classes, root: `${classes.root} ${classesRootClassname}` },
        }));
        // we established that the root component renders the outermost host previously. We immediately
        // jump to the host component because some components pass the `root` class
        // to the `classes` prop of the root component.
        // https://github.com/mui/material-ui/blob/f9896bcd129a1209153106296b3d2487547ba205/packages/material-ui/src/OutlinedInput/OutlinedInput.js#L101
        (0, chai_1.expect)(container.firstChild).to.have.class(className);
        (0, chai_1.expect)(container.firstChild).to.have.class(classes.root);
        (0, chai_1.expect)(document.querySelectorAll(`.${classes.root}`).length).to.equal(1);
        // classes test only for @mui/material
        if (!skip || !skip.includes('classesRoot')) {
            // Test that classes prop works
            (0, chai_1.expect)(container.firstChild).to.have.class(classesRootClassname);
            // Test that `classes` does not spread to DOM
            (0, chai_1.expect)(document.querySelectorAll('[classes]').length).to.equal(0);
        }
    });
}
function forEachSlot(slots, callback) {
    if (!slots) {
        return;
    }
    const slotNames = Object.keys(slots);
    slotNames.forEach((slotName) => {
        const slot = slots[slotName];
        callback(slotName, slot);
    });
}
function testSlotsProp(element, getOptions) {
    const { render, slots, testLegacyComponentsProp } = getOptions();
    const CustomComponent = React.forwardRef(({ className, children }, ref) => (React.createElement("i", { className: className, ref: ref, "data-testid": "custom" }, children)));
    forEachSlot(slots, (slotName, slotOptions) => {
        it(`allows overriding the ${slotName} slot with a component using the slots.${slotName} prop`, async () => {
            if (!render) {
                throwMissingPropError('render');
            }
            const slotComponent = slotOptions.testWithComponent ?? CustomComponent;
            const components = {
                [slotName]: slotComponent,
            };
            const { queryByTestId } = await render(React.cloneElement(element, { slots: components }));
            const renderedElement = queryByTestId('custom');
            (0, chai_1.expect)(renderedElement).not.to.equal(null);
            if (slotOptions.expectedClassName) {
                (0, chai_1.expect)(renderedElement).to.have.class(slotOptions.expectedClassName);
            }
        });
        if (slotOptions.testWithElement !== null) {
            it(`allows overriding the ${slotName} slot with an element using the slots.${slotName} prop`, async () => {
                if (!render) {
                    throwMissingPropError('render');
                }
                const slotElement = slotOptions.testWithElement ?? 'i';
                const components = {
                    [slotName]: slotElement,
                };
                const slotProps = {
                    [slotName]: {
                        'data-testid': 'customized',
                    },
                };
                const { queryByTestId } = await render(React.cloneElement(element, { slots: components, slotProps }));
                const renderedElement = queryByTestId('customized');
                (0, chai_1.expect)(renderedElement).not.to.equal(null);
                (0, chai_1.expect)(renderedElement.nodeName.toLowerCase()).to.equal(slotElement);
                if (slotOptions.expectedClassName) {
                    (0, chai_1.expect)(renderedElement).to.have.class(slotOptions.expectedClassName);
                }
            });
        }
        // For testing Material UI components v5, and v6. Likely to be removed in v7.
        if (testLegacyComponentsProp) {
            it(`allows overriding the ${slotName} slot with a component using the components.${capitalize(slotName)} prop`, async () => {
                if (!render) {
                    throwMissingPropError('render');
                }
                const slotComponent = slotOptions.testWithComponent ?? CustomComponent;
                const components = {
                    [capitalize(slotName)]: slotComponent,
                };
                const { queryByTestId } = await render(React.cloneElement(element, { components }));
                const renderedElement = queryByTestId('custom');
                (0, chai_1.expect)(renderedElement).not.to.equal(null);
                if (slotOptions.expectedClassName) {
                    (0, chai_1.expect)(renderedElement).to.have.class(slotOptions.expectedClassName);
                }
            });
            it(`prioritizes the 'slots.${slotName}' over components.${capitalize(slotName)} if both are defined`, async () => {
                if (!render) {
                    throwMissingPropError('render');
                }
                const ComponentForComponentsProp = React.forwardRef(({ children }, ref) => {
                    const SlotComponent = slotOptions.testWithComponent ?? 'div';
                    return (React.createElement(SlotComponent, { ref: ref, "data-testid": "from-components" }, children));
                });
                const ComponentForSlotsProp = React.forwardRef(({ children }, ref) => {
                    const SlotComponent = slotOptions.testWithComponent ?? 'div';
                    return (React.createElement(SlotComponent, { ref: ref, "data-testid": "from-slots" }, children));
                });
                const components = {
                    [capitalize(slotName)]: ComponentForComponentsProp,
                };
                const slotOverrides = {
                    [slotName]: ComponentForSlotsProp,
                };
                const { queryByTestId } = await render(React.cloneElement(element, { components, slots: slotOverrides }));
                (0, chai_1.expect)(queryByTestId('from-slots')).not.to.equal(null);
                (0, chai_1.expect)(queryByTestId('from-components')).to.equal(null);
            });
            if (slotOptions.testWithElement !== null) {
                it(`allows overriding the ${slotName} slot with an element using the components.${capitalize(slotName)} prop`, async () => {
                    if (!render) {
                        throwMissingPropError('render');
                    }
                    const slotElement = slotOptions.testWithElement ?? 'i';
                    const components = {
                        [capitalize(slotName)]: slotElement,
                    };
                    const componentsProps = {
                        [slotName]: {
                            'data-testid': 'customized',
                        },
                    };
                    const { queryByTestId } = await render(React.cloneElement(element, { components, componentsProps }));
                    const renderedElement = queryByTestId('customized');
                    (0, chai_1.expect)(renderedElement).not.to.equal(null);
                    (0, chai_1.expect)(renderedElement.nodeName.toLowerCase()).to.equal(slotElement);
                    if (slotOptions.expectedClassName) {
                        (0, chai_1.expect)(renderedElement).to.have.class(slotOptions.expectedClassName);
                    }
                });
            }
        }
    });
}
function testSlotPropsProp(element, getOptions) {
    const { render, slots, testLegacyComponentsProp } = getOptions();
    if (!render) {
        throwMissingPropError('render');
    }
    forEachSlot(slots, (slotName, slotOptions) => {
        it(`sets custom properties on the ${slotName} slot's element with the slotProps.${slotName} prop`, async () => {
            const slotProps = {
                [slotName]: {
                    'data-testid': 'custom',
                },
            };
            const { queryByTestId } = await render(React.cloneElement(element, { slotProps }));
            const slotComponent = queryByTestId('custom');
            (0, chai_1.expect)(slotComponent).not.to.equal(null);
            if (slotOptions.expectedClassName) {
                (0, chai_1.expect)(slotComponent).to.have.class(slotOptions.expectedClassName);
            }
        });
        if (slotOptions.expectedClassName) {
            it(`merges the class names provided in slotsProps.${slotName} with the built-in ones`, async () => {
                const slotProps = {
                    [slotName]: {
                        'data-testid': 'custom',
                        className: randomStringValue(),
                    },
                };
                const { getByTestId } = await render(React.cloneElement(element, { slotProps }));
                (0, chai_1.expect)(getByTestId('custom')).to.have.class(slotOptions.expectedClassName);
                (0, chai_1.expect)(getByTestId('custom')).to.have.class(slotProps[slotName].className);
            });
        }
        if (testLegacyComponentsProp) {
            it(`sets custom properties on the ${slotName} slot's element with the componentsProps.${slotName} prop`, async () => {
                const componentsProps = {
                    [slotName]: {
                        'data-testid': 'custom',
                    },
                };
                const { queryByTestId } = await render(React.cloneElement(element, { componentsProps }));
                const slotComponent = queryByTestId('custom');
                (0, chai_1.expect)(slotComponent).not.to.equal(null);
                if (slotOptions.expectedClassName) {
                    (0, chai_1.expect)(slotComponent).to.have.class(slotOptions.expectedClassName);
                }
            });
            it(`prioritizes the 'slotProps.${slotName}' over componentsProps.${slotName} if both are defined`, async () => {
                const componentsProps = {
                    [slotName]: {
                        'data-testid': 'custom',
                        'data-from-components-props': 'true',
                    },
                };
                const slotProps = {
                    [slotName]: {
                        'data-testid': 'custom',
                        'data-from-slot-props': 'true',
                    },
                };
                const { queryByTestId } = await render(React.cloneElement(element, { componentsProps, slotProps }));
                const slotComponent = queryByTestId('custom');
                (0, chai_1.expect)(slotComponent).to.have.attribute('data-from-slot-props', 'true');
                (0, chai_1.expect)(slotComponent).not.to.have.attribute('data-from-components-props');
            });
        }
    });
}
function testSlotPropsCallback(element, getOptions) {
    const { render, slots } = getOptions();
    if (!render) {
        throwMissingPropError('render');
    }
    forEachSlot(slots, (slotName) => {
        it(`sets custom properties on the ${slotName} slot's element with the slotProps.${slotName} callback`, async () => {
            const slotProps = {
                [slotName]: (ownerState) => ({
                    'data-testid': ownerState.className,
                }),
            };
            const { queryByTestId } = await render(React.cloneElement(element, { slotProps, className: 'custom' }));
            const slotComponent = queryByTestId('custom');
            (0, chai_1.expect)(slotComponent).not.to.equal(null);
        });
    });
}
/**
 * MUI components have a `components` prop that allows rendering a different
 * Components from @inheritComponent
 */
function testComponentsProp(element, getOptions) {
    describe('prop components:', () => {
        it('can render another root component with the `components` prop', async () => {
            const { render, testComponentsRootPropWith: component = 'em' } = getOptions();
            if (!render) {
                throwMissingPropError('render');
            }
            const testId = randomStringValue();
            const { getByTestId } = await render(React.cloneElement(element, { components: { Root: component }, 'data-testid': testId }));
            (0, chai_1.expect)(getByTestId(testId)).not.to.equal(null);
            (0, chai_1.expect)(getByTestId(testId).nodeName.toLowerCase()).to.eq(component);
        });
    });
}
/**
 * MUI theme has a components section that allows specifying default props.
 * Components from @inheritComponent
 */
function testThemeDefaultProps(element, getOptions) {
    describe('theme default components:', () => {
        it("respect theme's defaultProps", async () => {
            const testProp = 'data-id';
            const { muiName, render, ThemeProvider, createTheme } = getOptions();
            if (!muiName) {
                throwMissingPropError('muiName');
            }
            if (!render) {
                throwMissingPropError('render');
            }
            if (!ThemeProvider) {
                throwMissingPropError('ThemeProvider');
            }
            if (!createTheme) {
                throwMissingPropError('createTheme');
            }
            const theme = createTheme({
                components: {
                    [muiName]: {
                        defaultProps: {
                            [testProp]: 'testProp',
                        },
                    },
                },
            });
            const { container } = await render(React.createElement(ThemeProvider, { theme: theme }, element));
            (0, chai_1.expect)(container.firstChild).to.have.attribute(testProp, 'testProp');
        });
    });
}
/**
 * MUI theme has a components section that allows specifying style overrides.
 * Components from @inheritComponent
 */
function testThemeStyleOverrides(element, getOptions) {
    describe('theme style overrides:', () => {
        it("respect theme's styleOverrides custom state", async function test() {
            if (/jsdom/.test(window.navigator.userAgent)) {
                this.skip();
            }
            const { muiName, testStateOverrides, render, ThemeProvider, createTheme } = getOptions();
            if (!testStateOverrides) {
                return;
            }
            if (!muiName) {
                throwMissingPropError('muiName');
            }
            if (!render) {
                throwMissingPropError('render');
            }
            if (!ThemeProvider) {
                throwMissingPropError('ThemeProvider');
            }
            if (!createTheme) {
                throwMissingPropError('createTheme');
            }
            const testStyle = {
                marginTop: '13px',
            };
            const theme = createTheme({
                components: {
                    [muiName]: {
                        styleOverrides: {
                            [testStateOverrides.styleKey]: testStyle,
                        },
                    },
                },
            });
            if (!testStateOverrides.prop) {
                return;
            }
            const { container } = await render(React.createElement(ThemeProvider, { theme: theme }, React.cloneElement(element, {
                [testStateOverrides.prop]: testStateOverrides.value,
            })));
            (0, chai_1.expect)(container.firstChild).to.toHaveComputedStyle(testStyle);
        });
        it("respect theme's styleOverrides slots", async function test() {
            if (/jsdom/.test(window.navigator.userAgent)) {
                this.skip();
            }
            const { muiName, testDeepOverrides, testRootOverrides = { slotName: 'root' }, render, ThemeProvider, createTheme, } = getOptions();
            if (!ThemeProvider) {
                throwMissingPropError('ThemeProvider');
            }
            if (!createTheme) {
                throwMissingPropError('createTheme');
            }
            const testStyle = {
                mixBlendMode: 'darken',
            };
            function resolveDeepOverrides(callback) {
                if (!testDeepOverrides) {
                    return {};
                }
                const styles = {};
                if (Array.isArray(testDeepOverrides)) {
                    testDeepOverrides.forEach((slot) => {
                        callback(styles, slot);
                    });
                }
                else {
                    callback(styles, testDeepOverrides);
                }
                return styles;
            }
            const theme = createTheme({
                components: {
                    [muiName]: {
                        styleOverrides: {
                            [testRootOverrides.slotName]: {
                                ...testStyle,
                                ...resolveDeepOverrides((styles, slot) => {
                                    styles[`& .${slot.slotClassName}`] = {
                                        fontVariantCaps: 'all-petite-caps',
                                    };
                                }),
                            },
                            ...resolveDeepOverrides((styles, slot) => {
                                styles[slot.slotName] = {
                                    mixBlendMode: 'darken',
                                };
                            }),
                        },
                    },
                },
            });
            const { container, setProps } = await render(React.createElement(ThemeProvider, { theme: theme }, element));
            if (testRootOverrides.slotClassName) {
                (0, chai_1.expect)(document.querySelector(`.${testRootOverrides.slotClassName}`)).to.toHaveComputedStyle(testStyle);
            }
            else {
                (0, chai_1.expect)(container.firstChild).to.toHaveComputedStyle(testStyle);
            }
            if (testDeepOverrides) {
                (Array.isArray(testDeepOverrides) ? testDeepOverrides : [testDeepOverrides]).forEach((slot) => {
                    (0, chai_1.expect)(document.querySelector(`.${slot.slotClassName}`)).to.toHaveComputedStyle({
                        fontVariantCaps: 'all-petite-caps',
                        mixBlendMode: 'darken',
                    });
                });
                const themeWithoutRootOverrides = createTheme({
                    components: {
                        [muiName]: {
                            styleOverrides: {
                                ...resolveDeepOverrides((styles, slot) => {
                                    styles[slot.slotName] = testStyle;
                                }),
                            },
                        },
                    },
                });
                setProps({ theme: themeWithoutRootOverrides });
                (Array.isArray(testDeepOverrides) ? testDeepOverrides : [testDeepOverrides]).forEach((slot) => {
                    (0, chai_1.expect)(document.querySelector(`.${slot.slotClassName}`)).to.toHaveComputedStyle(testStyle);
                });
            }
        });
        it('overrideStyles does not replace each other in slots', async function test() {
            if (/jsdom/.test(window.navigator.userAgent)) {
                this.skip();
            }
            const { muiName, classes, testStateOverrides, render, ThemeProvider, createTheme } = getOptions();
            if (!ThemeProvider) {
                throwMissingPropError('ThemeProvider');
            }
            if (!createTheme) {
                throwMissingPropError('createTheme');
            }
            const classKeys = Object.keys(classes);
            // only test the component that has `root` and other classKey
            if (!testStateOverrides || !classKeys.includes('root') || classKeys.length === 1) {
                return;
            }
            // `styleKey` in some tests is `foo` or `bar`, so need to check if it is a valid classKey.
            const isStyleKeyExists = classKeys.includes(testStateOverrides.styleKey);
            if (!isStyleKeyExists) {
                return;
            }
            const theme = createTheme({
                components: {
                    [muiName]: {
                        styleOverrides: {
                            root: {
                                [`&.${classes.root}`]: {
                                    filter: 'blur(1px)',
                                    mixBlendMode: 'darken',
                                },
                            },
                            ...(testStateOverrides && {
                                [testStateOverrides.styleKey]: {
                                    [`&.${classes.root}`]: {
                                        mixBlendMode: 'color',
                                    },
                                },
                            }),
                        },
                    },
                },
            });
            if (!testStateOverrides.prop) {
                return;
            }
            await render(React.createElement(ThemeProvider, { theme: theme }, React.cloneElement(element, {
                [testStateOverrides.prop]: testStateOverrides.value,
            })));
            (0, chai_1.expect)(document.querySelector(`.${classes.root}`)).toHaveComputedStyle({
                filter: 'blur(1px)', // still valid in root
                mixBlendMode: 'color', // overridden by `styleKey`
            });
        });
    });
}
/**
 * MUI theme has a components section that allows specifying custom variants.
 * Components from @inheritComponent
 */
function testThemeVariants(element, getOptions) {
    describe('theme variants:', () => {
        it("respect theme's variants", async function test() {
            if (/jsdom/.test(window.navigator.userAgent)) {
                this.skip();
            }
            const { muiName, testVariantProps, render, ThemeProvider, createTheme } = getOptions();
            if (!testVariantProps) {
                throw new Error('missing testVariantProps');
            }
            if (!muiName) {
                throwMissingPropError('muiName');
            }
            if (!render) {
                throwMissingPropError('render');
            }
            if (!ThemeProvider) {
                throwMissingPropError('ThemeProvider');
            }
            if (!createTheme) {
                throwMissingPropError('createTheme');
            }
            const testStyle = {
                mixBlendMode: 'darken',
            };
            const theme = createTheme({
                components: {
                    [muiName]: {
                        variants: [
                            {
                                props: testVariantProps,
                                style: testStyle,
                            },
                        ],
                    },
                },
            });
            const { getByTestId } = await render(React.createElement(ThemeProvider, { theme: theme },
                React.cloneElement(element, { ...testVariantProps, 'data-testid': 'with-props' }),
                React.cloneElement(element, { 'data-testid': 'without-props' })));
            (0, chai_1.expect)(getByTestId('with-props')).to.toHaveComputedStyle(testStyle);
            (0, chai_1.expect)(getByTestId('without-props')).not.to.toHaveComputedStyle(testStyle);
        });
        it('supports custom variant', async function test() {
            if (/jsdom/.test(window.navigator.userAgent)) {
                this.skip();
            }
            const { muiName, testCustomVariant, render, ThemeProvider, createTheme } = getOptions();
            if (!ThemeProvider) {
                throwMissingPropError('ThemeProvider');
            }
            if (!createTheme) {
                throwMissingPropError('createTheme');
            }
            if (!testCustomVariant) {
                return;
            }
            const theme = createTheme({
                components: {
                    [muiName]: {
                        styleOverrides: {
                            root: ({ ownerState }) => ({
                                ...(ownerState.variant === 'unknown' && {
                                    mixBlendMode: 'darken',
                                }),
                            }),
                        },
                    },
                },
            });
            const { getByTestId } = await render(React.createElement(ThemeProvider, { theme: theme }, React.cloneElement(element, { variant: 'unknown', 'data-testid': 'custom-variant' })));
            (0, chai_1.expect)(getByTestId('custom-variant')).toHaveComputedStyle({ mixBlendMode: 'darken' });
        });
    });
}
/**
 * MUI theme supports custom palettes.
 * The components that iterate over the palette via `variants` should be able to render with or without applying the custom palette styles.
 */
function testThemeCustomPalette(element, getOptions) {
    describe('theme extended palette:', () => {
        it('should render without errors', function test() {
            const { render, ThemeProvider, createTheme } = getOptions();
            if (!/jsdom/.test(window.navigator.userAgent) || !render || !ThemeProvider || !createTheme) {
                this.skip();
            }
            const theme = createTheme({
                palette: {
                    custom: {
                        main: '#ff5252',
                    },
                    unknown: null,
                    custom2: {
                        main: {
                            blue: {
                                dark: '#FFCC00',
                            },
                        },
                    },
                },
            });
            (0, chai_1.expect)(() => render(React.createElement(ThemeProvider, { theme: theme }, element))).not.to.throw();
        });
    });
}
const fullSuite = {
    componentProp: testComponentProp,
    componentsProp: testComponentsProp,
    mergeClassName: testClassName,
    propsSpread: testPropsSpread,
    refForwarding: describeRef,
    rootClass: testRootClass,
    slotPropsProp: testSlotPropsProp,
    slotPropsCallback: testSlotPropsCallback,
    slotsProp: testSlotsProp,
    themeDefaultProps: testThemeDefaultProps,
    themeStyleOverrides: testThemeStyleOverrides,
    themeVariants: testThemeVariants,
    themeCustomPalette: testThemeCustomPalette,
};
/**
 * Tests various aspects of a component that should be equal across MUI
 * components.
 */
function describeConformance(minimalElement, getOptions) {
    let originalMatchmedia;
    const storage = {};
    beforeEach(() => {
        originalMatchmedia = window.matchMedia;
        // Create mocks of localStorage getItem and setItem functions
        Object.defineProperty(global, 'localStorage', {
            value: {
                getItem: (key) => storage[key],
                setItem: (key, value) => {
                    storage[key] = value;
                },
            },
            configurable: true,
        });
        window.matchMedia = () => ({
            // Keep mocking legacy methods because @mui/material v5 still uses them
            addListener: () => { },
            addEventListener: () => { },
            removeListener: () => { },
            removeEventListener: () => { },
        });
    });
    afterEach(() => {
        window.matchMedia = originalMatchmedia;
    });
    const { after: runAfterHook = () => { }, only = Object.keys(fullSuite), slots, skip = [], } = getOptions();
    let filteredTests = Object.keys(fullSuite).filter((testKey) => only.includes(testKey) && !skip.includes(testKey));
    const slotBasedTests = ['slotsProp', 'slotPropsProp', 'slotPropsCallback'];
    if (!slots) {
        // if `slots` are not defined, do not run tests that depend on them
        filteredTests = filteredTests.filter((testKey) => !slotBasedTests.includes(testKey));
    }
    after(runAfterHook);
    filteredTests.forEach((testKey) => {
        const test = fullSuite[testKey];
        test(minimalElement, getOptions);
    });
}
exports.default = (0, createDescribe_1.default)('MUI component API', describeConformance);
//# sourceMappingURL=describeConformance.js.map