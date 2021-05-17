/**
 * Write a function that checks wether a string is a valid palindrome
 * A palindrome is a string that is written the same way frontwards and backwards, i.e. 'abcdcba' is a valid palindrome.
 * 
 * clarifying questions:
 * - what do we do on empty string
 * - would a string with a single letter be considered a valid palindrome? What about an empty string
 */
export function isPalindrome(string: string): boolean {
  let l = 0, r = string.length - 1;
  while (l < r) {
    if (string[l] !== string[r]) return false;
    l++;
    r--;
  }
  return true;
}

describe('palindrome check', () => {
  test('should return true if it is a valid palindrome', () => {
    expect(isPalindrome('abcdcba')).toBeTruthy()
    expect(isPalindrome('abcddcba')).toBeTruthy()
    expect(isPalindrome('aa')).toBeTruthy()
    expect(isPalindrome('aba')).toBeTruthy()
    expect(isPalindrome('a')).toBeTruthy()
  })
  
  test('should return false if it is an invalid palindrome', () => {
    expect(isPalindrome('abctxcba')).toBeFalsy()
    expect(isPalindrome('ab')).toBeFalsy()
  })
  
})
