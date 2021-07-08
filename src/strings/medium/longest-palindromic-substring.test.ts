/**
 * Write a function that given a string, returns the longest valid palindromic substring
 */

export function longestPalindromicSubstring(string: string): string {
  let maxLength = 0,
    longestPalindrome = "";

  for (let i = 1; i < string.length; i++) {
    if (i + 1 < string.length - 1 && string[i - 1] === string[i + 1])
      record(i - 1, i + 1); // check before and after
    if (string[i - 1] === string[i]) record(i - 1, i);
  }

  function record(left: number, right: number): void {
    // a valid palindrome is present in the current indices
    while (left >= 0 && right < string.length) {
      if (string[left] === string[right]) {
        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
          maxLength = currentLength;
          longestPalindrome = string.substring(left, right + 1);
          // console.log("longest palindrome", longestPalindrome);
        }
      } else break;
      left--;
      right++;
    }
  }
  return longestPalindrome;
}

describe("longest palindromic substring", () => {
  test("should return the longest valid string", () => {
    const string = "abaxyzzyxf";
    const result = "xyzzyx";
    expect(longestPalindromicSubstring(string)).toEqual(result);
  });
});
