const { add, subtract, multiply, divide } = require('../main.js');

describe('add(a, b)', () => {
    it('Возвращает 3 при аргументах -1.21 и "4.94"', () => {
        expect(add(-1.21, "4.94")).toBe(3);
    })
});

describe('subtrac(a, b)', () => {
    it('Возвращает NaN при аргументах "" и 5', () => {
        expect(subtract("", 5)).toBeNaN();
    })
});

describe('multiply(a, b)', () => {
    it('Возвращает 120 при аргументах 12 и 10.97', () => {
        expect(multiply(12, 10.97)).toBe(120);
    })
});

describe('divide(a, b)', () => {
    it('Возвращает NaN при аргументах 6 и 0', () => {
        expect(divide(6, 0)).toBeNaN();
    })
});