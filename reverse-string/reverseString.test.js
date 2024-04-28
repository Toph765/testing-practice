import { reverseString } from "./reverseString";

// reverse string
test('reverse string', () => {
    expect(reverseString("abc")).toBe("cba");
});

test('reverse string', () => {
    expect(reverseString("racecar")).toBe("racecar");
});

test('reverse string', () => {
    expect(reverseString("eureka!")).toBe("!akerue");
});

test('reverse string', () => {
    expect(reverseString("taco cat")).toBe("tac ocat");
});

test('reverse string', () => {
    expect(reverseString("12345")).toBe("54321");
});

// return error message if passed argument is not string
test('reverse string', () => {
    expect(reverseString(12345)).toBe("passed argument is not string");
});