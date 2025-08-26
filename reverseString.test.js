const reverseString = require('./reverseString');

test('reverses hello', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('returns non-string values as they are', () => {
  expect(reverseString(1)).toBe(1);
});

test('returns empty string as it is', () => {
  expect(reverseString("")).toBe("");
});

test('returns one-character strings as they are', () => {
  expect(reverseString("h")).toBe("h");
});

test('reverses hell', () => {
  expect(reverseString("hell")).toBe("lleh");
});
