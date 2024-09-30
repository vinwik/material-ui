"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = flushMicrotasks;
const createRenderer_1 = require("./createRenderer");
async function flushMicrotasks() {
    await (0, createRenderer_1.act)(async () => { });
}
//# sourceMappingURL=flushMicrotasks.js.map