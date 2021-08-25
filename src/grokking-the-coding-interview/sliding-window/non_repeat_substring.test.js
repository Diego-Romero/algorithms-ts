/*
Problem Statement#
Given a string, find the length of the longest substring, which has no repeating characters.

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

  
    l
      r
aabccbb
{
	a: 1
	b: 5
	c: 3
}
- if b < left ignore and update

length = r - l + 1


Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".


Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".

  l
     r
abcbde

{a: 0, b: 1, c : 2} length = r - l + 1
- move left, to the previous found + 1
*/

/**
{a: 0, b: 1, c: 3, d: 4, e: 5}
   l
      r
abccdea
0123456

if last seen char < current start

l
   r
abccde
012345


{a: 0, b: 5, c: 3, }
      l
      r
aabccbb
0123456
 */

// approach in O(N) time | space, although if we are only expecting characters in the english language, we can expect O(26), which is O(1);
const non_repeat_substring = function (str) {
  const set = new Set();
  let max = 0,
    left = 0,
    right = 0;

  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      max = Math.max(max, set.size);
      // console.log("moving right", str[right], right, set);
      right++;
    } else {
      // move left, until is out of the set
      while (set.has(str[right])) {
        set.delete(str[left]);
        left++;
        // console.log("moving left", str[left], left, set);
      }
    }
  }

  return max;
};

describe("no repeat substring", () => {
  test("should work when there are 2 long strings", () => {
    const string = "xxabcdxxxabcdexx";
    //                    r
    //                l
    // [a, b, c, d]
    expect(non_repeat_substring(string)).toEqual(6);
  });
  test("should work with a basic example", () => {
    const string = "aabcdde";
    expect(non_repeat_substring(string)).toEqual(4);
  });
  test("should work when the longest string is at the end", () => {
    const string = "aaaabbcde";
    expect(non_repeat_substring(string)).toEqual(4);
  });
  test("should work when there is only one char", () => {
    const string = "a";
    expect(non_repeat_substring(string)).toEqual(1);
  });

  test("should work when there is only unique chars", () => {
    const string = "abc";
    expect(non_repeat_substring(string)).toEqual(3);
  });
  test("should work when the string is empty", () => {
    const string = "";
    expect(non_repeat_substring(string)).toEqual(0);
  });
});
