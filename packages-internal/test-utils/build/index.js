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
exports.strictModeDoubleLoggingSuppressed = exports.reactMajor = exports.flushMicrotasks = exports.fireDiscreteEvent = exports.programmaticFocusTriggersFocusVisible = exports.simulateKeyboardDevice = exports.simulatePointerDevice = exports.focusVisible = exports.createDescribe = exports.describeConformance = void 0;
const React = __importStar(require("react"));
__exportStar(require("./components"), exports);
var describeConformance_1 = require("./describeConformance");
Object.defineProperty(exports, "describeConformance", { enumerable: true, get: function () { return __importDefault(describeConformance_1).default; } });
__exportStar(require("./describeConformance"), exports);
var createDescribe_1 = require("./createDescribe");
Object.defineProperty(exports, "createDescribe", { enumerable: true, get: function () { return __importDefault(createDescribe_1).default; } });
__exportStar(require("./createRenderer"), exports);
var focusVisible_1 = require("./focusVisible");
Object.defineProperty(exports, "focusVisible", { enumerable: true, get: function () { return __importDefault(focusVisible_1).default; } });
Object.defineProperty(exports, "simulatePointerDevice", { enumerable: true, get: function () { return focusVisible_1.simulatePointerDevice; } });
Object.defineProperty(exports, "simulateKeyboardDevice", { enumerable: true, get: function () { return focusVisible_1.simulateKeyboardDevice; } });
Object.defineProperty(exports, "programmaticFocusTriggersFocusVisible", { enumerable: true, get: function () { return focusVisible_1.programmaticFocusTriggersFocusVisible; } });
exports.fireDiscreteEvent = __importStar(require("./fireDiscreteEvent"));
var flushMicrotasks_1 = require("./flushMicrotasks");
Object.defineProperty(exports, "flushMicrotasks", { enumerable: true, get: function () { return __importDefault(flushMicrotasks_1).default; } });
var reactMajor_1 = require("./reactMajor");
Object.defineProperty(exports, "reactMajor", { enumerable: true, get: function () { return __importDefault(reactMajor_1).default; } });
/**
 * Set to true if console logs during [lifecycles that are invoked twice in `React.StrictMode`](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) are suppressed.
 * Useful for asserting on `console.warn` or `console.error` via `toErrorDev()`.
 * TODO: Refactor to use reactMajor when fixing the React 17 cron test.
 * https://github.com/mui/material-ui/issues/43153
 */
exports.strictModeDoubleLoggingSuppressed = React.version.startsWith('17');
//# sourceMappingURL=index.js.map