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
const chai_1 = __importStar(require("chai"));
const chai_dom_1 = __importDefault(require("chai-dom"));
const lodash_1 = __importDefault(require("lodash"));
const dom_1 = require("@testing-library/dom");
const pure_1 = require("@testing-library/react/pure");
const dom_accessibility_api_1 = require("dom-accessibility-api");
const format_util_1 = __importDefault(require("format-util"));
chai_1.default.use(chai_dom_1.default);
const isKarma = Boolean(process.env.KARMA);
function isInJSDOM() {
    return /jsdom/.test(window.navigator.userAgent);
}
// chai#utils.elToString that looks like stringified elements in testing-library
function elementToString(element) {
    if (typeof element?.nodeType === 'number') {
        return (0, pure_1.prettyDOM)(element, undefined, { highlight: !isKarma, maxDepth: 1 });
    }
    return String(element);
}
chai_1.default.use((chaiAPI, utils) => {
    const blockElements = new Set([
        'html',
        'address',
        'blockquote',
        'body',
        'dd',
        'div',
        'dl',
        'dt',
        'fieldset',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'noframes',
        'ol',
        'p',
        'ul',
        'center',
        'dir',
        'hr',
        'menu',
        'pre',
    ]);
    function pretendVisibleGetComputedStyle(element) {
        // `CSSStyleDeclaration` is not constructable
        // https://stackoverflow.com/a/52732909/3406963
        // this is not equivalent to the declaration from `getComputedStyle`
        // for example `getComputedStyle` would return a readonly declaration
        // let's hope this doesn't get passed around until it's no longer clear where it comes from
        const declaration = document.createElement('span').style;
        // initial values
        declaration.content = '';
        // technically it's `inline`. We partially apply the default user agent sheet (chrome) here
        // we're only interested in elements that use block
        declaration.display = blockElements.has(element.tagName) ? 'block' : 'inline';
        declaration.visibility = 'visible';
        return declaration;
    }
    // better diff view for expect(element).to.equal(document.activeElement)
    chai_1.default.Assertion.addMethod('toHaveFocus', function elementIsFocused() {
        const element = utils.flag(this, 'object');
        this.assert(element === document.activeElement, 
        // karma does not show the diff like mocha does
        `expected element to have focus${isKarma ? '\nexpected #{exp}\nactual: #{act}' : ''}`, `expected element to NOT have focus \n${elementToString(element)}`, elementToString(element), elementToString(document.activeElement));
    });
    chai_1.default.Assertion.addMethod('toHaveVirtualFocus', function elementIsVirtuallyFocused() {
        const element = utils.flag(this, 'object');
        const id = element.getAttribute('id');
        const virtuallyFocusedElementId = document.activeElement.getAttribute('aria-activedescendant');
        this.assert(virtuallyFocusedElementId === id, `expected element to be virtually focused\nexpected id #{exp}\n${virtuallyFocusedElementId === null
            ? `activeElement: ${elementToString(document.activeElement)}`
            : 'actual id: #{act}'}`, 'expected element to NOT to be virtually focused', id, virtuallyFocusedElementId, virtuallyFocusedElementId !== null);
    });
    chai_1.default.Assertion.addMethod('toBeInaccessible', function elementIsAccessible() {
        const element = utils.flag(this, 'object');
        const inaccessible = (0, dom_1.isInaccessible)(element);
        this.assert(inaccessible === true, `expected \n${elementToString(element)} to be inaccessible but it was accessible`, `expected \n${elementToString(element)} to be accessible but it was inaccessible`, 
        // Not interested in a diff but the typings require the 4th parameter.
        undefined);
    });
    chai_1.default.Assertion.addMethod('toHaveAccessibleName', function hasAccessibleName(expectedName) {
        const root = utils.flag(this, 'object');
        // make sure it's an Element
        new chai_1.default.Assertion(root.nodeType, `Expected an Element but got '${String(root)}'`).to.equal(1);
        const actualName = (0, dom_accessibility_api_1.computeAccessibleName)(root, {
            computedStyleSupportsPseudoElements: !isInJSDOM(),
            // in local development we pretend to be visible. full getComputedStyle is
            // expensive and reserved for CI
            getComputedStyle: process.env.CI ? undefined : pretendVisibleGetComputedStyle,
        });
        this.assert(actualName === expectedName, `expected \n${elementToString(root)} to have accessible name #{exp} but got #{act} instead.`, `expected \n${elementToString(root)} not to have accessible name #{exp}.`, expectedName, actualName);
    });
    chai_1.default.Assertion.addMethod('toHaveAccessibleDescription', function hasAccessibleDescription(expectedDescription) {
        const root = utils.flag(this, 'object');
        // make sure it's an Element
        new chai_1.default.Assertion(root.nodeType, `Expected an Element but got '${String(root)}'`).to.equal(1);
        const actualDescription = (0, dom_accessibility_api_1.computeAccessibleDescription)(root, {
            // in local development we pretend to be visible. full getComputedStyle is
            // expensive and reserved for CI
            getComputedStyle: process.env.CI ? undefined : pretendVisibleGetComputedStyle,
        });
        const possibleDescriptionComputationMessage = root.hasAttribute('title')
            ? ' computeAccessibleDescription can be misleading when a `title` attribute is used. This might be a bug in `dom-accessibility-api`.'
            : '';
        this.assert(actualDescription === expectedDescription, `expected \n${elementToString(root)} to have accessible description #{exp} but got #{act} instead.${possibleDescriptionComputationMessage}`, `expected \n${elementToString(root)} not to have accessible description #{exp}.${possibleDescriptionComputationMessage}`, expectedDescription, actualDescription);
    });
    /**
     * Correct name for `to.be.visible`
     */
    chai_1.default.Assertion.addMethod('toBeVisible', function toBeVisible() {
        // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unused-expressions
        new chai_1.default.Assertion(this._obj).to.be.visible;
    });
    /**
     * Correct name for `not.to.be.visible`
     */
    chai_1.default.Assertion.addMethod('toBeHidden', function toBeHidden() {
        // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unused-expressions
        new chai_1.default.Assertion(this._obj).not.to.be.visible;
    });
    function assertMatchingStyles(actualStyleDeclaration, expectedStyleUnnormalized, options) {
        const { styleTypeHint } = options;
        // Compare objects using hyphen case.
        // This is closer to actual CSS and required for getPropertyValue anyway.
        const expectedStyle = {};
        Object.keys(expectedStyleUnnormalized).forEach((cssProperty) => {
            const hyphenCasedPropertyName = lodash_1.default.kebabCase(cssProperty);
            const isVendorPrefixed = /^(moz|ms|o|webkit)-/.test(hyphenCasedPropertyName);
            const propertyName = isVendorPrefixed
                ? `-${hyphenCasedPropertyName}`
                : hyphenCasedPropertyName;
            expectedStyle[propertyName] = expectedStyleUnnormalized[cssProperty];
        });
        const shorthandProperties = new Set([
            'all',
            'animation',
            'background',
            'border',
            'border-block-end',
            'border-block-start',
            'border-bottom',
            'border-color',
            'border-image',
            'border-inline-end',
            'border-inline-start',
            'border-left',
            'border-radius',
            'border-right',
            'border-style',
            'border-top',
            'border-width',
            'column-rule',
            'columns',
            'flex',
            'flex-flow',
            'font',
            'gap',
            'grid',
            'grid-area',
            'grid-column',
            'grid-row',
            'grid-template',
            'list-style',
            'margin',
            'mask',
            'offset',
            'outline',
            'overflow',
            'padding',
            'place-content',
            'place-items',
            'place-self',
            'scroll-margin',
            'scroll-padding',
            'text-decoration',
            'text-emphasis',
            'transition',
        ]);
        const usedShorthandProperties = Object.keys(expectedStyle).filter((cssProperty) => {
            return shorthandProperties.has(cssProperty);
        });
        if (usedShorthandProperties.length > 0) {
            throw new Error([
                `Shorthand properties are not supported in ${styleTypeHint} styles matchers since browsers can compute them differently. `,
                'Use longhand properties instead for the follow shorthand properties:\n',
                usedShorthandProperties
                    .map((cssProperty) => {
                    return `- https://developer.mozilla.org/en-US/docs/Web/CSS/${cssProperty}#constituent_properties`;
                })
                    .join('\n'),
            ].join(''));
        }
        const actualStyle = {};
        Object.keys(expectedStyle).forEach((cssProperty) => {
            actualStyle[cssProperty] = actualStyleDeclaration.getPropertyValue(cssProperty);
        });
        const jsdomHint = 'Styles in JSDOM e.g. from `test:unit` are often misleading since JSDOM does not implement the Cascade nor actual CSS property value computation. ' +
            'If results differ between real browsers and JSDOM, skip the test in JSDOM e.g. `if (/jsdom/.test(window.navigator.userAgent)) this.skip();`';
        const shorthandHint = 'Browsers can compute shorthand properties differently. Prefer longhand properties e.g. `borderTopColor`, `borderRightColor` etc. instead of `border` or `border-color`.';
        const messageHint = `${jsdomHint}\n${shorthandHint}`;
        if (isKarma) {
            // `#{exp}` and `#{act}` placeholders escape the newlines
            const expected = JSON.stringify(expectedStyle, null, 2);
            const actual = JSON.stringify(actualStyle, null, 2);
            // karma's `dots` reporter does not support diffs
            this.assert(
            // TODO Fix upstream docs/types
            utils.eql(actualStyle, expectedStyle), `expected ${styleTypeHint} style of #{this} did not match\nExpected:\n${expected}\nActual:\n${actual}\n\n\n${messageHint}`, `expected #{this} to not have ${styleTypeHint} style\n${expected}\n\n\n${messageHint}`, expectedStyle, actualStyle);
        }
        else {
            this.assert(
            // TODO Fix upstream docs/types
            utils.eql(actualStyle, expectedStyle), `expected #{this} to have ${styleTypeHint} style #{exp} \n\n${messageHint}`, `expected #{this} not to have ${styleTypeHint} style #{exp}${messageHint}`, expectedStyle, actualStyle, true);
        }
    }
    chai_1.default.Assertion.addMethod('toHaveInlineStyle', function toHaveInlineStyle(expectedStyleUnnormalized) {
        const element = utils.flag(this, 'object');
        if (element?.nodeType !== 1) {
            // Same pre-condition for negated and unnegated assertion
            throw new chai_1.AssertionError(`Expected an Element but got ${String(element)}`);
        }
        assertMatchingStyles.call(this, element.style, expectedStyleUnnormalized, {
            styleTypeHint: 'inline',
        });
    });
    chai_1.default.Assertion.addMethod('toHaveComputedStyle', function toHaveComputedStyle(expectedStyleUnnormalized) {
        const element = utils.flag(this, 'object');
        if (element?.nodeType !== 1) {
            // Same pre-condition for negated and unnegated  assertion
            throw new chai_1.AssertionError(`Expected an Element but got ${String(element)}`);
        }
        const computedStyle = element.ownerDocument.defaultView.getComputedStyle(element);
        assertMatchingStyles.call(this, computedStyle, expectedStyleUnnormalized, {
            styleTypeHint: 'computed',
        });
    });
    chai_1.default.Assertion.addMethod('toThrowMinified', function toThrowMinified(expectedDevMessage) {
        // TODO: Investigate if `as any` can be removed after https://github.com/DefinitelyTyped/DefinitelyTyped/issues/48634 is resolved.
        if (process.env.NODE_ENV !== 'production') {
            this.to.throw(expectedDevMessage);
        }
        else {
            utils.flag(this, 'message', "Looks like the error was not minified. This can happen if the error code hasn't been generated yet. Run `pnpm extract-error-codes` and try again.");
            // TODO: Investigate if `as any` can be removed after https://github.com/DefinitelyTyped/DefinitelyTyped/issues/48634 is resolved.
            this.to.throw('Minified MUI error', 'helper');
        }
    });
});
chai_1.default.use((chaiAPI, utils) => {
    function addConsoleMatcher(matcherName, methodName) {
        /**
         * @param {string[]} expectedMessages
         */
        function matcher(expectedMessagesInput = []) {
            // documented pattern to get the actual value of the assertion
            // eslint-disable-next-line no-underscore-dangle
            const callback = this._obj;
            if (process.env.NODE_ENV !== 'production') {
                const expectedMessages = typeof expectedMessagesInput === 'string'
                    ? [expectedMessagesInput]
                    : expectedMessagesInput.slice();
                const unexpectedMessages = [];
                // TODO Remove type once MUI X enables noImplicitAny
                let caughtError = null;
                this.assert(expectedMessages.length > 0, `Expected to call console.${methodName} but didn't provide messages. ` +
                    `If you don't expect any messages prefer \`expect().not.${matcherName}();\`.`, `Expected no call to console.${methodName} while also expecting messages.` +
                    'Expected no call to console.error but provided messages. ' +
                    "If you want to make sure a certain message isn't logged prefer the positive. " +
                    'By expecting certain messages you automatically expect that no other messages are logged', 
                // Not interested in a diff but the typings require the 4th parameter.
                undefined);
                // Ignore skipped messages in e.g. `[condition && 'foo']`
                const remainingMessages = expectedMessages.filter((messageOrFalse) => {
                    return messageOrFalse !== false;
                });
                // eslint-disable-next-line no-console
                const originalMethod = console[methodName];
                let messagesMatched = 0;
                const consoleMatcher = (format, ...args) => {
                    // Ignore legacy root deprecation warnings
                    // TODO: Remove once we no longer use legacy roots.
                    if (format.includes('Use createRoot instead.') ||
                        format.includes('Use hydrateRoot instead.')) {
                        return;
                    }
                    const actualMessage = (0, format_util_1.default)(format, ...args);
                    const expectedMessage = remainingMessages.shift();
                    messagesMatched += 1;
                    // TODO Remove type once MUI X enables noImplicitAny
                    let message = null;
                    if (expectedMessage === undefined) {
                        message = `Expected no more error messages but got:\n"${actualMessage}"`;
                    }
                    else if (!actualMessage.includes(expectedMessage)) {
                        message = `Expected #${messagesMatched} "${expectedMessage}" to be included in \n"${actualMessage}"`;
                    }
                    if (message !== null) {
                        const error = new Error(message);
                        const { stack: fullStack } = error;
                        const fullStacktrace = fullStack.replace(`Error: ${message}\n`, '').split('\n');
                        const usefulStacktrace = fullStacktrace
                            //
                            // first line points to this frame which is irrelevant for the tester
                            .slice(1);
                        const usefulStack = `${message}\n${usefulStacktrace.join('\n')}`;
                        error.stack = usefulStack;
                        unexpectedMessages.push(error);
                    }
                };
                // eslint-disable-next-line no-console
                console[methodName] = consoleMatcher;
                try {
                    callback();
                }
                catch (error) {
                    caughtError = error;
                }
                finally {
                    // eslint-disable-next-line no-console
                    console[methodName] = originalMethod;
                    // unexpected thrown error takes precedence over unexpected console call
                    if (caughtError !== null) {
                        // not the same pattern as described in the block because we don't rethrow in the catch
                        // eslint-disable-next-line no-unsafe-finally
                        throw caughtError;
                    }
                    const formatMessages = (messages) => {
                        const formattedMessages = messages.map((message) => {
                            if (typeof message === 'string') {
                                return `"${message}"`;
                            }
                            // full Error
                            return `${message.stack}`;
                        });
                        return `\n\n  - ${formattedMessages.join('\n\n-  ')}`;
                    };
                    const shouldHaveWarned = utils.flag(this, 'negate') !== true;
                    // unreachable from expect().not.toWarnDev(messages)
                    if (unexpectedMessages.length > 0) {
                        const unexpectedMessageRecordedMessage = `Recorded unexpected console.${methodName} calls: ${formatMessages(unexpectedMessages)}`;
                        // chai will duplicate the stack frames from the unexpected calls in their assertion error
                        // it's not ideal but the test failure is located the second to last stack frame
                        // and the origin of the call is the second stackframe in the stack
                        this.assert(
                        // force chai to always trigger an assertion error
                        !shouldHaveWarned, unexpectedMessageRecordedMessage, unexpectedMessageRecordedMessage, 
                        // Not interested in a diff but the typings require the 4th parameter.
                        undefined);
                    }
                    if (shouldHaveWarned) {
                        this.assert(remainingMessages.length === 0, `Could not match the following console.${methodName} calls. ` +
                            `Make sure previous actions didn't call console.${methodName} by wrapping them in expect(() => {}).not.${matcherName}(): ${formatMessages(remainingMessages)}`, `Impossible state reached in \`expect().${matcherName}()\`. ` +
                            `This is a bug in the matcher.`, 
                        // Not interested in a diff but the typings require the 4th parameter.
                        undefined);
                    }
                }
            }
            else {
                // nothing to do in prod
                // If there are still console calls than our test setup throws.
                callback();
            }
        }
        chai_1.default.Assertion.addMethod(matcherName, matcher);
    }
    /**
     * @example expect(() => render()).toWarnDev('single message')
     * @example expect(() => render()).toWarnDev(['first warning', 'then the second'])
     */
    addConsoleMatcher('toWarnDev', 'warn');
    addConsoleMatcher('toErrorDev', 'error');
});
//# sourceMappingURL=initMatchers.js.map