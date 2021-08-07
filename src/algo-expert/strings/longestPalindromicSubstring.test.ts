// approach in N ^ 2
export function longestPalindromicSubstring(string: string) {
  let result = "";
  // need to iterate from index 1 to one before last
  for (let i = 1; i < string.length - 1; i++) {
    // check when the strings starts the same
    if (string[i - 1] === string[i]) check(i - 1, i);
    if (string[i] === string[i + 1]) check(i, i + 1);
    // check when characters at both sides are equal
    if (string[i - 1] === string[i + 1]) check(i - 1, i + 1);
  }

  function check(left: number, right: number) {
    while (left >= 0 && right < string.length) {
      if (string[left] === string[right]) {
        let temp = string.substring(left, right + 1);
        if (temp.length > result.length) result = temp;
        left--;
        right++;
      } else {
        break;
      }
    }
  }

  return result;
}

describe("longest palindromic substring", () => {
  test("should work with palindrome at the start", () => {
    expect(longestPalindromicSubstring("abaxyz")).toEqual("aba");
  });
  test("should work with pair palindrome at the start", () => {
    expect(longestPalindromicSubstring("bbxyz")).toEqual("bb");
  });

  test("should work with pair palindrome at the end", () => {
    expect(longestPalindromicSubstring("xyzaa")).toEqual("aa");
  });
  test("should work when palindrome is in the middle", () => {
    expect(longestPalindromicSubstring("xyzabazxx")).toEqual("zabaz");
  });
});

/**
- find the point in the string where there is a palindrome
- it can either be 2 of the same letters or 2 of the same separated by one
- assume there will always be at least one longest
- perform a check from the indices where we encountered a palidnrome, going outwards, using 2 pointers

xxxxabaxx = xabax
abcd = a?

abaxxabaxt = xabax
abaxxx = check the one before and after, iterate until the prev to last
bbxyz check the one before
xyzbb = check the one after
*/
