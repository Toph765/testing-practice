import { capitalize } from "./capitalize";

// capitalize string
test('capitalize letters', () => {
  expect(capitalize("abc")).toBe("ABC");
});

test('capitalize letters', () => {
  expect(capitalize("potato")).toBe("POTATO");
});

// capitalize string iwth punctuation
test('capitalize letters', () => {
  expect(capitalize("scream!")).toBe("SCREAM!");
});

// ignore string with numbers
test('capitalize letters', () => {
  expect(capitalize("123")).toBe("123");
});

// capitalize string with space
test('capitalize letters', () => {
  expect(capitalize("my name")).toBe("MY NAME");
});

// return error message if argument is not string
test('capitalize letters', () => {
  expect(capitalize(123)).toBe("passed argument is not string");
});