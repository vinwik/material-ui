"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.click = click;
exports.keyDown = keyDown;
exports.keyUp = keyUp;
exports.mouseDown = mouseDown;
exports.mouseUp = mouseUp;
const react_1 = require("@testing-library/react");
const reactMajor_1 = __importDefault(require("./reactMajor"));
const noWrapper = (callback) => callback();
/**
 * @param {() => void} callback
 * @returns {void}
 */
function withMissingActWarningsIgnored(callback) {
    if (reactMajor_1.default >= 18) {
        callback();
        return;
    }
    const originalConsoleError = console.error;
    console.error = function silenceMissingActWarnings(message, ...args) {
        const isMissingActWarning = /not wrapped in act\(...\)/.test(message);
        if (!isMissingActWarning) {
            originalConsoleError.call(console, message, ...args);
        }
    };
    const originalConfig = (0, react_1.getConfig)();
    (0, react_1.configure)({
        eventWrapper: noWrapper,
    });
    try {
        callback();
    }
    finally {
        (0, react_1.configure)(originalConfig);
        console.error = originalConsoleError;
    }
}
// -----------------------------------------
// WARNING ⚠️ WARNING ⚠️ WARNING ⚠️ WARNING
//
// Do not add events here because you want to ignore "missing act()" warnings.
// Only add events if you made sure that React actually considers these as "discrete".
// Be aware that "discrete events" are an implementation detail of React.
// To test discrete events we cannot use `fireEvent` from `@testing-library/react` because they are all wrapped in `act`.
// `act` overrides the "discrete event" semantics with "batching" semantics: https://github.com/facebook/react/blob/3fbd47b86285b6b7bdeab66d29c85951a84d4525/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1061-L1064
// Note that using `fireEvent` from `@testing-library/dom` would not work since /react configures both `fireEvent` to use `act` as a wrapper.
// -----------------------------------------
function click(...args) {
    return withMissingActWarningsIgnored(() => {
        react_1.fireEvent.click(...args);
    });
}
function keyDown(...args) {
    return withMissingActWarningsIgnored(() => {
        react_1.fireEvent.keyDown(...args);
    });
}
function keyUp(...args) {
    return withMissingActWarningsIgnored(() => {
        react_1.fireEvent.keyUp(...args);
    });
}
function mouseDown(...args) {
    return withMissingActWarningsIgnored(() => {
        react_1.fireEvent.mouseDown(...args);
    });
}
function mouseUp(...args) {
    return withMissingActWarningsIgnored(() => {
        react_1.fireEvent.mouseUp(...args);
    });
}
//# sourceMappingURL=fireDiscreteEvent.js.map