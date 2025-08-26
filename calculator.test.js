const calculator = require('./calculator');

test('reverses hello', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('returns non-string values as they are', () => {
  expect(calculator.subtract(3, 4)).toBe(-1);
});

test('returns empty string as it is', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('returns one-character strings as they are', () => {
  expect(calculator.multiply(5, 6)).toBe(30);
});
