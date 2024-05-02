import { analyzeArray } from "./analyzeArray";

// AVERAGE
test("show average", () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test("show average", () => {
    expect(analyzeArray([1, 7, 2, 5, 6]).average).toBe(4.2);
});

// MIN
test("show min", () => {
    expect(analyzeArray([1, 7, 2, 5, 6]).min).toBe(1);
});

// MAX
test("show max", () => {
    expect(analyzeArray([1, 7, 2, 5, 6]).max).toBe(7);
});

// LENGTH
test("show length", () => {
    expect(analyzeArray([1, 7, 2, 5, 6]).length).toBe(5);
});

// OBJECT
test("show object", () => {
    expect(analyzeArray([1, 7, 2, 5, 6])).toEqual({
        average: 4.2,
        min: 1,
        max: 7,
        length: 5
    });
});

// ERROR MESSAGE
test("show error message", () => {
    expect(analyzeArray([1, 7, 2, "a", 6])).toBe("array should contain numbers");
});

