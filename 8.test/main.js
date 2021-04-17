function convert(a) { return (a == null || a == "") ? NaN : Number.parseInt(a, 10); };

function add(a, b) {
    a = convert(a);
    b = convert(b);
    return a + b;
}

function subtract(a, b) {
    a = convert(a);
    b = convert(b);
    return a - b;
}

function multiply(a, b) {
    a = convert(a);
    b = convert(b);
    return a * b;
}

function divide(a, b) {
    a = convert(a);
    b = convert(b);
    return (b != 0) ? a / b : NaN;
}

module.exports = {
    add, subtract, multiply, divide
}