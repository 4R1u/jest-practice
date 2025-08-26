const caesarCipher = require('./caesarCipher');

test('wraps around', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('preserves punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('returns non-strings as they are', () => {
  expect(caesarCipher(1, 3)).toBe(1);
});

test('returns string if number nonsensical', () => {
    expect(caesarCipher("xyz", null)).toBe("xyz");
});

test('returns string if number zero', () => {
    expect(caesarCipher("xyz", 0)).toBe("xyz");
});
