import { calculator } from "./calculator";

// ADDITION
test("give the sum of two numbers", () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test("give the sum of two numbers", () => {
    expect(calculator.add(5, 6)).toBe(11);
});

test("error message", () => {
    expect(calculator.add("1", 1)).toBe("passed value is not number");
});

// SUBTRACTION
test("give the difference of two numbers", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test("give the difference of two numbers", () => {
    expect(calculator.subtract(5, 7)).toBe(-2);
});

test("give the difference of two numbers", () => {
    expect(calculator.subtract(5.5, 1)).toBe(4.5);
});

test("error message", () => {
    expect(calculator.subtract(4, "2")).toBe("passed value is not number");
});

// DIVISION
test("give quotient of two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test("give quotient of two numbers", () => {
    expect(calculator.divide(3, 6)).toBe(0.5);
});

test("undefined message", () => {
    expect(calculator.divide(2, 0)).toBe("undefined");
});

test("error message", () => {
    expect(calculator.divide("10", 5)).toBe("passed value is not number");
});

// MULTIPLICATION
test("give product of two numbers", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});

test("give product of two numbers", () => {
    expect(calculator.multiply(7, 0)).toBe(0);
});

test("error message", () => {
    expect(calculator.multiply("1", 2)).toBe("passed value is not number");
});