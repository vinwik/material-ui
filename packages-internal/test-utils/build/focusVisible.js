"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = focusVisible;
exports.simulatePointerDevice = simulatePointerDevice;
exports.simulateKeyboardDevice = simulateKeyboardDevice;
exports.programmaticFocusTriggersFocusVisible = programmaticFocusTriggersFocusVisible;
const createRenderer_1 = require("./createRenderer");
function focusVisible(element) {
    (0, createRenderer_1.act)(() => {
        element.blur();
        createRenderer_1.fireEvent.keyDown(document.body, { key: 'Tab' });
        element.focus();
    });
}
function simulatePointerDevice() {
    // first focus on a page triggers focus visible until a pointer event
    // has been dispatched
    createRenderer_1.fireEvent.pointerDown(document.body);
}
function simulateKeyboardDevice() {
    createRenderer_1.fireEvent.keyDown(document.body, { key: 'TAB' });
}
/**
 * See https://issues.chromium.org/issues/40719291 for more details.
 */
function programmaticFocusTriggersFocusVisible() {
    try {
        // So far this only applies to Chrome 86 beta which is the only tested browser supporting this pseudo class.
        document.createElement('button').matches(':focus-visible');
        return true;
    }
    catch (error) {
        return false;
    }
}
//# sourceMappingURL=focusVisible.js.map