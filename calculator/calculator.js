const isNumber = (n) => {
    return typeof n === "number" ? true : false;
}

const calculator = {
    add(a, b) {
        return !isNumber(a) || !isNumber(b) ?  "passed value is not number" : a + b;
    },
    subtract(a, b) {
        return !isNumber(a) || !isNumber(b) ?  "passed value is not number" : a - b;
    },
    divide(a, b) {
        if (b === 0) return "undefined";
        if (!isNumber(a) || !isNumber(b)) return "passed value is not number";
        return a / b;
    },
    multiply(a, b) {
        return !isNumber(a) || !isNumber(b) ?  "passed value is not number" : a * b;
    }
}

export { calculator };