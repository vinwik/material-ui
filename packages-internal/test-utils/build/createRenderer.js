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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.screen = exports.fireEvent = void 0;
exports.createRenderer = createRenderer;
exports.fireTouchChangedEvent = fireTouchChangedEvent;
exports.act = act;
/* eslint-env mocha */
const React = __importStar(require("react"));
const ReactDOMServer = __importStar(require("react-dom/server"));
const cache_1 = __importDefault(require("@emotion/cache"));
const react_1 = require("@emotion/react");
const pure_1 = require("@testing-library/react/pure");
const user_event_1 = require("@testing-library/user-event");
const sinon_1 = require("sinon");
const reactMajor_1 = __importDefault(require("./reactMajor"));
const enableDispatchingProfiler = process.env.TEST_GATE === 'enable-dispatching-profiler';
function noTrace(interactionName, callback) {
    return callback();
}
/**
 * Path used in Error.prototype.stack.
 *
 * Computed in `before` hook.
 */
let workspaceRoot;
let interactionID = 0;
const interactionStack = [];
/**
 * interactionName - Human readable label for this particular interaction.
 */
function traceByStackSync(interactionName, callback) {
    const { stack } = new Error();
    const testLines = stack
        .split(/\r?\n/)
        .map((line) => {
        // anonymous functions create a "weird" stackframe like
        // "at path/to/actual.test.js (path/to/utility/file.js <- karma.test.js)"
        // and we just want "path/to/actual.test.js" not "karma.test.js"
        // TODO: Only supports chrome at the moment
        const fileMatch = line.match(/([^\s(]+\.test\.(js|ts|tsx)):(\d+):(\d+)/);
        if (fileMatch === null) {
            return null;
        }
        return { name: fileMatch[1], line: +fileMatch[3], column: +fileMatch[4] };
    })
        .filter((maybeTestFile) => {
        return maybeTestFile !== null;
    })
        .map((file) => {
        return `${file.name.replace(workspaceRoot, '')}:${file.line}:${file.column}`;
    });
    const originLine = testLines[testLines.length - 1] ?? 'unknown line';
    interactionID += 1;
    const interaction = {
        id: interactionID,
        name: `${originLine} (${interactionName})`,
        timestamp: performance.now(),
    };
    interactionStack.push(interaction);
    try {
        return callback();
    }
    finally {
        interactionStack.pop();
    }
}
class NoopProfiler {
    constructor() {
        this.id = 'noop';
    }
    // eslint-disable-next-line class-methods-use-this
    onRender() { }
    // eslint-disable-next-line class-methods-use-this
    report() { }
}
class DispatchingProfiler {
    constructor(test) {
        this.renders = [];
        this.onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
            // Do minimal work here to keep the render fast.
            // Though it's unclear whether work here affects the profiler results.
            // But even if it doesn't we'll keep the test feedback snappy.
            this.renders.push([
                id,
                phase,
                actualDuration,
                baseDuration,
                startTime,
                commitTime,
                interactionStack.slice(),
            ]);
        };
        this.id = test.fullTitle();
    }
    report() {
        const event = new window.CustomEvent('reactProfilerResults', {
            detail: {
                [this.id]: this.renders.map((entry) => {
                    return {
                        phase: entry[1],
                        actualDuration: entry[2],
                        baseDuration: entry[3],
                        startTime: entry[4],
                        commitTime: entry[5],
                        interactions: entry[6],
                    };
                }),
            },
        });
        window.dispatchEvent(event);
    }
}
const UsedProfiler = enableDispatchingProfiler ? DispatchingProfiler : NoopProfiler;
const traceSync = enableDispatchingProfiler ? traceByStackSync : noTrace;
function queryAllDescriptionsOf(baseElement, element) {
    const ariaDescribedBy = element.getAttribute('aria-describedby');
    if (ariaDescribedBy === null) {
        return [];
    }
    return ariaDescribedBy
        .split(' ')
        .map((id) => {
        return document.getElementById(id);
    })
        .filter((maybeElement) => {
        return maybeElement !== null && baseElement.contains(maybeElement);
    });
}
const [queryDescriptionOf, getAllDescriptionsOf, getDescriptionOf, findAllDescriptionsOf, findDescriptionOf,] = (0, pure_1.buildQueries)(queryAllDescriptionsOf, function getMultipleError() {
    return `Found multiple descriptions.`;
}, function getMissingError() {
    return `Found no describing element.`;
});
const queryAllByMuiTest = pure_1.queryHelpers.queryAllByAttribute.bind(null, 'data-mui-test');
const [queryByMuiTest, getAllByMuiTest, getByMuiTest, findAllByMuiTest, findByMuiTest] = (0, pure_1.buildQueries)(queryAllByMuiTest, function getMultipleError(container, dataMuiTest) {
    return `Found multiple elements with the data-mui-test attribute of: ${dataMuiTest}`;
}, function getMissingError(container, dataMuiTest) {
    return `Found no element with the data-mui-test attribute of: ${dataMuiTest}`;
});
const customQueries = {
    queryDescriptionOf,
    queryAllDescriptionsOf,
    getDescriptionOf,
    getAllDescriptionsOf,
    findDescriptionOf,
    findAllDescriptionsOf,
    /**
     * @deprecated Use `queryAllByTestId` instead
     */
    queryAllByMuiTest,
    /**
     * @deprecated Use `queryByTestId` instead
     */
    queryByMuiTest,
    /**
     * @deprecated Use `getAllByTestId` instead
     */
    getAllByMuiTest,
    /**
     * @deprecated Use `getByTestId` instead
     */
    getByMuiTest,
    /**
     * @deprecated Use `findAllByTestId` instead
     */
    findAllByMuiTest,
    /**
     * @deprecated Use `findByTestId` instead
     */
    findByMuiTest,
};
function render(element, configuration) {
    const { container, hydrate, wrapper } = configuration;
    const testingLibraryRenderResult = traceSync('render', () => (0, pure_1.render)(element, {
        container,
        hydrate,
        queries: { ...pure_1.queries, ...customQueries },
        wrapper,
    }));
    const result = {
        ...testingLibraryRenderResult,
        user: user_event_1.userEvent.setup(),
        forceUpdate() {
            traceSync('forceUpdate', () => testingLibraryRenderResult.rerender(React.cloneElement(element, {
                'data-force-update': String(Math.random()),
            })));
        },
        setProps(props) {
            traceSync('setProps', () => testingLibraryRenderResult.rerender(React.cloneElement(element, props)));
        },
    };
    return result;
}
function renderToString(element, configuration) {
    const { container, wrapper: Wrapper } = configuration;
    traceSync('renderToString', () => {
        container.innerHTML = ReactDOMServer.renderToString(React.createElement(Wrapper, null, element));
    });
    return {
        container,
        hydrate() {
            return render(element, { ...configuration, hydrate: true });
        },
    };
}
function createClock(defaultMode, config, options) {
    let clock = null;
    let mode = defaultMode;
    beforeEach(() => {
        if (mode === 'fake') {
            clock = (0, sinon_1.useFakeTimers)({
                now: config,
                // useIsFocusVisible schedules a global timer that needs to persist regardless of whether components are mounted or not.
                // Technically we'd want to reset all modules between tests but we don't have that technology.
                // In the meantime just continue to clear native timers like with did for the past years when using `sinon` < 8.
                shouldClearNativeTimers: true,
                ...options,
            });
        }
    });
    afterEach(() => {
        clock?.restore();
        clock = null;
    });
    return {
        tick(timeoutMS) {
            if (clock === null) {
                throw new Error(`Can't advance the real clock. Did you mean to call this on fake clock?`);
            }
            traceSync('tick', () => {
                (0, pure_1.act)(() => {
                    clock.tick(timeoutMS);
                });
            });
        },
        runAll() {
            if (clock === null) {
                throw new Error(`Can't advance the real clock. Did you mean to call this on fake clock?`);
            }
            traceSync('runAll', () => {
                (0, pure_1.act)(() => {
                    clock.runAll();
                });
            });
        },
        runToLast() {
            if (clock === null) {
                throw new Error(`Can't advance the real clock. Did you mean to call this on fake clock?`);
            }
            traceSync('runToLast', () => {
                (0, pure_1.act)(() => {
                    clock.runToLast();
                });
            });
        },
        isReal() {
            return setTimeout.hasOwnProperty('clock') === false;
        },
        withFakeTimers() {
            before(() => {
                mode = 'fake';
            });
            after(() => {
                mode = defaultMode;
            });
        },
        restore() {
            clock?.restore();
        },
    };
}
function createRenderer(globalOptions = {}) {
    const { clock: clockMode = 'real', clockConfig, strict: globalStrict = true, strictEffects: globalStrictEffects = globalStrict, clockOptions, } = globalOptions;
    // save stack to re-use in test-hooks
    const { stack: createClientRenderStack } = new Error();
    const clock = createClock(clockMode, clockConfig, clockOptions);
    /**
     * Flag whether `createRenderer` was called in a suite i.e. describe() block.
     * For legacy reasons `createRenderer` might accidentally be called in a before(Each) hook.
     */
    let wasCalledInSuite = false;
    before(function beforeHook() {
        wasCalledInSuite = true;
        if (enableDispatchingProfiler) {
            // TODO windows?
            const filename = new Error()
                .stack.split(/\r?\n/)
                .map((line) => {
                const fileMatch = 
                // chrome: "    at Context.beforeHook (webpack-internal:///./test/utils/createRenderer.tsx:257:24)""
                line.match(/\(([^)]+):\d+:\d+\)/) ??
                    // firefox: "beforeHook@webpack-internal:///./test/utils/createRenderer.tsx:257:24"
                    line.match(/@(.*?):\d+:\d+$/);
                if (fileMatch === null) {
                    return null;
                }
                return fileMatch[1];
            })
                .find((file) => {
                return file?.endsWith('createRenderer.tsx');
            });
            workspaceRoot = filename.replace('test/utils/createRenderer.tsx', '');
        }
    });
    let emotionCache = null;
    /**
     * target container for SSR
     */
    let serverContainer;
    /**
     * Flag whether all setup for `configuredClientRender` was completed.
     * For legacy reasons `configuredClientRender` might accidentally be called in a before(Each) hook.
     */
    let prepared = false;
    let profiler = null;
    beforeEach(function beforeEachHook() {
        if (!wasCalledInSuite) {
            const error = new Error('Unable to run `before` hook for `createRenderer`. This usually indicates that `createRenderer` was called in a `before` hook instead of in a `describe()` block.');
            error.stack = createClientRenderStack;
            throw error;
        }
        const test = this.currentTest;
        if (test === undefined) {
            throw new Error('Unable to find the currently running test. This is a bug with the client-renderer. Please report this issue to a maintainer.');
        }
        profiler = new UsedProfiler(test);
        emotionCache = (0, cache_1.default)({ key: 'emotion-client-render' });
        serverContainer = document.createElement('div');
        document.body.appendChild(serverContainer);
        prepared = true;
    });
    afterEach(() => {
        if (!clock.isReal()) {
            const error = Error("Can't cleanup before fake timers are restored.\n" +
                'Be sure to:\n' +
                '  1. Only use `clock` from `createRenderer`.\n' +
                '  2. Call `createRenderer` in a suite and not any test hook (for example `beforeEach`) or test itself (for example `it`).');
            // Use saved stack otherwise the stack trace will not include the test location.
            error.stack = createClientRenderStack;
            throw error;
        }
        (0, pure_1.cleanup)();
        profiler.report();
        profiler = null;
        emotionCache.sheet.tags.forEach((styleTag) => {
            styleTag.remove();
        });
        emotionCache = null;
        serverContainer.remove();
        serverContainer = null;
    });
    function createWrapper(options) {
        const { strict = globalStrict, strictEffects = globalStrictEffects, wrapper: InnerWrapper = React.Fragment, } = options;
        const usesLegacyRoot = reactMajor_1.default < 18;
        const Mode = strict && (strictEffects || usesLegacyRoot) ? React.StrictMode : React.Fragment;
        return function Wrapper({ children }) {
            return (React.createElement(Mode, null,
                React.createElement(react_1.CacheProvider, { value: emotionCache },
                    React.createElement(React.Profiler, { id: profiler.id, onRender: profiler.onRender },
                        React.createElement(InnerWrapper, null, children)))));
        };
    }
    return {
        clock,
        render(element, options = {}) {
            if (!prepared) {
                throw new Error('Unable to finish setup before `render()` was called. ' +
                    'This usually indicates that `render()` was called in a `before()` or `beforeEach` hook. ' +
                    'Move the call into each `it()`. Otherwise you cannot run a specific test and we cannot isolate each test.');
            }
            return render(element, {
                ...options,
                hydrate: false,
                wrapper: createWrapper(options),
            });
        },
        renderToString(element, options = {}) {
            if (!prepared) {
                throw new Error('Unable to finish setup before `render()` was called. ' +
                    'This usually indicates that `render()` was called in a `before()` or `beforeEach` hook. ' +
                    'Move the call into each `it()`. Otherwise you cannot run a specific test and we cannot isolate each test.');
            }
            const { container = serverContainer, ...localOptions } = options;
            return renderToString(element, {
                ...localOptions,
                container,
                wrapper: createWrapper(options),
            });
        },
    };
}
const fireEvent = ((target, event, ...args) => {
    return traceSync(`firEvent.${event.type}`, () => (0, pure_1.fireEvent)(target, event, ...args));
});
exports.fireEvent = fireEvent;
Object.keys(pure_1.fireEvent).forEach(
// @ts-expect-error
(eventType) => {
    fireEvent[eventType] = (...args) => traceSync(`firEvent.${eventType}`, () => pure_1.fireEvent[eventType](...args));
});
const originalFireEventKeyDown = pure_1.fireEvent.keyDown;
fireEvent.keyDown = (desiredTarget, options = {}) => {
    const element = desiredTarget;
    // `element` shouldn't be `document` but we catch this later anyway
    const document = element.ownerDocument || element;
    const target = document.activeElement || document.body || document.documentElement;
    if (target !== element) {
        // see https://www.w3.org/TR/uievents/#keydown
        const error = new Error(`\`keydown\` events can only be targeted at the active element which is ${(0, pure_1.prettyDOM)(target, undefined, { maxDepth: 1 })}`);
        // We're only interested in the callsite of fireEvent.keyDown
        error.stack = error
            .stack.split('\n')
            .filter((line) => !/at Function.key/.test(line))
            .join('\n');
        throw error;
    }
    return traceSync('fireEvent.keyDown', () => originalFireEventKeyDown(element, options));
};
const originalFireEventKeyUp = pure_1.fireEvent.keyUp;
fireEvent.keyUp = (desiredTarget, options = {}) => {
    const element = desiredTarget;
    // `element` shouldn't be `document` but we catch this later anyway
    const document = element.ownerDocument || element;
    const target = document.activeElement || document.body || document.documentElement;
    if (target !== element) {
        // see https://www.w3.org/TR/uievents/#keyup
        const error = new Error(`\`keyup\` events can only be targeted at the active element which is ${(0, pure_1.prettyDOM)(target, undefined, { maxDepth: 1 })}`);
        // We're only interested in the callsite of fireEvent.keyUp
        error.stack = error
            .stack.split('\n')
            .filter((line) => !/at Function.key/.test(line))
            .join('\n');
        throw error;
    }
    return traceSync('fireEvent.keyUp', () => originalFireEventKeyUp(element, options));
};
function fireTouchChangedEvent(target, type, options) {
    const { changedTouches } = options;
    const originalGetBoundingClientRect = target.getBoundingClientRect;
    target.getBoundingClientRect = () => ({
        x: 0,
        y: 0,
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        toJSON() {
            return {
                x: 0,
                y: 0,
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
            };
        },
    });
    const event = new window.TouchEvent(type, {
        bubbles: true,
        cancelable: true,
        composed: true,
        changedTouches: changedTouches.map((opts) => new window.Touch({
            target,
            identifier: 0,
            ...opts,
        })),
    });
    fireEvent(target, event);
    target.getBoundingClientRect = originalGetBoundingClientRect;
}
function act(callback) {
    return traceSync('act', () => (0, pure_1.act)(callback));
}
const bodyBoundQueries = (0, pure_1.within)(document.body, { ...pure_1.queries, ...customQueries });
__exportStar(require("@testing-library/react/pure"), exports);
exports.screen = { ...pure_1.screen, ...bodyBoundQueries };
//# sourceMappingURL=createRenderer.js.map