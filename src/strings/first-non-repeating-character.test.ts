/**
 * Write a function that takes a string and returns the index of the first non-repeating character
 * if the function doesn't has any repeating character just return -1
 */

export function firstNonRepeatingCharacter(string: string): number {
  const map = new Map<string, number>()
  for (let char of string.split('')) {
    if (map.has(char)) map.set(char, map.get(char)! + 1)
    else map.set(char, 1)
  }
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (map.get(char)! === 1) return i
  }
  return -1;
}

describe("first-non-repeating-character", () => {
  test('should return the index of the first non repeating character', () => {
    expect(firstNonRepeatingCharacter('abccad')).toBe(1)
    expect(firstNonRepeatingCharacter('aaccab')).toBe(5)
    expect(firstNonRepeatingCharacter('abcdefg')).toBe(0)
  })
  test('should return -1 when it can find any repeated characters', () => {
    expect(firstNonRepeatingCharacter('abccba')).toBe(-1)
  })
  
});
