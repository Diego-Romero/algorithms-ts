/*
Comparing Strings containing Backspaces (medium)#
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
*/

// solution O(N + M)
const backspace_compare = function (str1, str2) {
  // iterate the string from left to right, if we encounter a hash we delete the previous char and reduce index by 2
  let iterator = 0;
  console.log(str1);
  while (iterator < str1.length) {
    console.log(iterator);
    const char = str1[iterator];
    if (char === "#") {
      const first = str1.slice(0, iterator - 1);
      const second = str1.slice(iterator + 1);
      str1 = first + second;
      iterator -= 2;
      // console.log("FOUND", first, second, str1, iterator);
    }

    iterator++;
  }
  iterator = 0;
  while (iterator < str2.length) {
    console.log(iterator);
    const char = str2[iterator];
    if (char === "#") {
      const first = str2.slice(0, iterator - 1);
      const second = str2.slice(iterator + 1);
      str2 = first + second;
      iterator -= 2;
      // console.log("FOUND", first, second, str1, iterator);
    }

    iterator++;
  }
  console.log(str1, str2);

  return str1 === str2;
};

describe("backspace compare", () => {
  test("should work with an interesting string", () => {
    const a = "abcd##a";
    const b = "aba";
    expect(backspace_compare(a, b)).toBeTruthy();
  });
  test("should work with an interesting string", () => {
    const a = "abcd##a";
    const b = "abddd###a";
    expect(backspace_compare(a, b)).toBeTruthy();
  });
  test("should give false when not the same", () => {
    const a = "abcd###a#a";
    const b = "ab";
    expect(backspace_compare(a, b)).toBeFalsy();
  });
});
