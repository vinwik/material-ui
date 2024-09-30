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
Object.defineProperty(exports, "__esModule", { value: true });
const Mocha = __importStar(require("mocha"));
const chai_1 = require("chai");
const React = __importStar(require("react"));
const sinon_1 = require("sinon");
const mochaHooks_1 = require("./mochaHooks");
const createRenderer_1 = require("./createRenderer");
describe('mochaHooks', () => {
    // one block per hook.
    describe('afterEach', () => {
        describe('on unexpected console.(warn|error) in afterEach', function suite() {
            const mochaHooks = (0, mochaHooks_1.createMochaHooks)(Mocha);
            beforeEach(function beforeEachHook() {
                mochaHooks.beforeAll.forEach((beforeAllMochaHook) => {
                    beforeAllMochaHook.call(this);
                });
                mochaHooks.beforeEach.forEach((beforeEachMochaHook) => {
                    beforeEachMochaHook.call(this);
                });
            });
            it('throws an error', () => {
                console.warn('unexpected warning');
                console.error('unexpected error');
            });
            afterEach(function afterEachHook() {
                const errorStub = (0, sinon_1.stub)(this.test, 'error');
                mochaHooks.afterEach.forEach((afterEachMochaHook) => {
                    afterEachMochaHook.call(this);
                });
                mochaHooks.afterAll.forEach((afterAllMochaHook) => {
                    afterAllMochaHook.call(this);
                });
                (0, chai_1.expect)(errorStub.callCount).to.equal(2);
                (0, chai_1.expect)(String(errorStub.firstCall.args[0])).to.include('console.warn message #1:\n  unexpected warning\n\nStack:');
                (0, chai_1.expect)(String(errorStub.secondCall.args[0])).to.include('console.error message #1:\n  unexpected error\n\nStack:');
            });
        });
        // TODO: May not be relevant in React 18
        describe('when having missing act() warnings by component', () => {
            const mochaHooks = (0, mochaHooks_1.createMochaHooks)(Mocha);
            // missing act warnings only happen in StrictMode
            const { render } = (0, createRenderer_1.createRenderer)({ strict: true });
            beforeEach(function beforeEachHook() {
                mochaHooks.beforeAll.forEach((beforeAllMochaHook) => {
                    beforeAllMochaHook.call(this);
                });
                mochaHooks.beforeEach.forEach((beforeEachMochaHook) => {
                    beforeEachMochaHook.call(this);
                });
            });
            it('dedupes them', () => {
                const Child = React.forwardRef(function Child() {
                    React.useEffect(() => { });
                    React.useEffect(() => { });
                    return null;
                });
                let unsafeSetState;
                function Parent() {
                    const [state, setState] = React.useState(0);
                    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- unsafeSetState is required outside the component
                    unsafeSetState = setState;
                    React.useEffect(() => { });
                    React.useEffect(() => { });
                    return React.createElement(Child, { rerender: state });
                }
                render(React.createElement(Parent, null));
                // not wrapped in act()
                unsafeSetState(1);
                // make sure effects are flushed
                (0, createRenderer_1.act)(() => { });
            });
            afterEach(function afterEachHook() {
                const errorStub = (0, sinon_1.stub)(this.test, 'error');
                mochaHooks.afterEach.forEach((afterEachMochaHook) => {
                    afterEachMochaHook.call(this);
                });
                mochaHooks.afterAll.forEach((afterAllMochaHook) => {
                    afterAllMochaHook.call(this);
                });
                (0, chai_1.expect)(errorStub.callCount).to.equal(1);
                const error = String(errorStub.firstCall.args[0]);
                (0, chai_1.expect)(error.match(/An update to Parent inside a test was not wrapped in act/g)).to.have.lengthOf(1);
                (0, chai_1.expect)(error.match(/An update to Parent ran an effect, but was not wrapped in act/g) ?? []).to.have.lengthOf(React.startTransition !== undefined ? 0 : 1);
                (0, chai_1.expect)(error.match(/An update to ForwardRef\(Child\) ran an effect, but was not wrapped in act/g) ?? []).to.have.lengthOf(React.startTransition !== undefined ? 0 : 1);
            });
        });
    });
});
//# sourceMappingURL=mochaHooks.test.js.map