const capitalize = require('./capitalize');

test('capitalizes hello', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test('returns non-string values as they are', () => {
  expect(capitalize(1)).toBe(1);
});

test('returns empty string as it is', () => {
  expect(capitalize("")).toBe("");
});

test('capitalizes h', () => {
  expect(capitalize("h")).toBe("H");
});
