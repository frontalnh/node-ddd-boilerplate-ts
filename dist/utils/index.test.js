"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
test('Test has value', () => {
    let r1 = _1.hasValue('1', ['1', '2', '3']);
    let r2 = _1.hasValue('6', ['1', '2', '3']);
    expect(r1).toBe(true);
    expect(r2).toBe(false);
});
//# sourceMappingURL=index.test.js.map