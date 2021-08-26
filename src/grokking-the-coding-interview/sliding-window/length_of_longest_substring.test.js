/**
 * approach in O(N) time | space
 * @param {string} str
 * @param {number} k
 * @returns {number}
 */
const length_of_longest_substring = function (str, k) {
  let start = 0,
    maxRepeatLetter = 0,
    longest = 0;
  const frequency = {};

  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    if (!(endChar in frequency)) frequency[endChar] = 0;
    frequency[endChar] += 1;

    maxRepeatLetter = Math.max(maxRepeatLetter, frequency[endChar]);

    while (end - start + 1 - maxRepeatLetter > k) {
      const startChar = str[start];
      frequency[startChar] -= 1;
      start++;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
};

describe("length of longest substring", () => {
  test("should work with just one char", () => {
    expect(length_of_longest_substring("aaaa", 0)).toEqual(4);
  });

  test("should work with a basic example", () => {
    const string = "aabccbb";
    //                    e
    //                s
    // {a: 1, b: 3, c: 2 } maxCharCount = 2, currentStringLength = e - s + 1, longest = 4
    // shrink the window when (currentStringLength - maxCharCount >= k)  if leftCharCount === maxCount reduce maxCount
    const k = 2;
    const result = 5;
    expect(length_of_longest_substring(string, k)).toEqual(result);
  });

  test("should work with k being 1", () => {
    const string = "abbcb";
    //                  e
    // .               s
    // record as we move our end
    const k = 1;
    const result = 4;
    expect(length_of_longest_substring(string, k)).toEqual(result);
  });

  test("should work with k being 1 in a more complex string", () => {
    const string = "abccxe";
    //                   e
    //                 s
    // { a: 0, b: 1, c : 2, x: 0}, maxCount = 1, longest = 2
    // while (currentString - maxCount > k) {  ...move left  }
    // record at the end, after we have moved start
    const k = 1;
    const result = 3;
    expect(length_of_longest_substring(string, k)).toEqual(result);
  });
});
