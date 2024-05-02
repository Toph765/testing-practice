import { caesarCipher, isUpperCase, isOutOfRange } from "./caesarCipher";

test("shift characters in string", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("shift characters in string", () => {
    expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test("shift characters in string", () => {
    expect(caesarCipher("abcde!", 2)).toBe("cdefg!");
});

test("shift characters in string", () => {
    expect(caesarCipher("abcde fgh!", 2)).toBe("cdefg hij!");
});

test("shift characters in string", () => {
    expect(caesarCipher("ab cd ef", 3)).toBe("de fg hi");
});

test("shift characters in string", () => {
    expect(caesarCipher("xyz", 1)).toBe("yza");
});

test("shift characters in string", () => {
    expect(caesarCipher("ABC", -1)).toBe("ZAB");
});

test("shift characters in string", () => {
    expect(caesarCipher("AbcD", 2)).toBe("CdeF");
});
test("shift characters in string", () => {
    expect(caesarCipher("Abc, Def. Ghi!", 3)).toBe("Def, Ghi. Jkl!");
});
