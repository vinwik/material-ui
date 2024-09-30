export type MochaHook = (this: import("mocha").Context) => void;
export type MochaHooks = {
    beforeAll: MochaHook[];
    afterAll: MochaHook[];
    beforeEach: MochaHook[];
    afterEach: MochaHook[];
};
/**
 * -- custom definition for `const mocha = require('mocha')`
 */
export type Mocha = {
    utils: typeof Mocha.utils;
};
/**
 * @param {Mocha} Mocha
 * @returns MochaHooks
 */
export function createMochaHooks(Mocha: Mocha): {
    beforeAll: MochaHook[];
    afterAll: MochaHook[];
    beforeEach: MochaHook[];
    afterEach: MochaHook[];
};
//# sourceMappingURL=mochaHooks.d.ts.map