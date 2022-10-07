/*
Write a function that takes an array of words and returns the smallest array of characters needed to form all of the words. They don't need to be in any particular order.


Clarifiying questions:
- Do we need to handle spaces?
- Can the strings contain special characters and do we need to account for them?
- Can we receive an empty array? yes
- Can we receive an empty string? yes


Approach:
Brute force:
- for every word we need to draw a frequency map of the chars that exist, {t: 1, h: 1, i: 1, s: 1}
- We also need to keep track of the overall chars that we have collected thus far.
- Whenever our local frequency map collects a number that is bigger than the one in our global map then we have to increase that number by one
- At the end we have to iterate through our global map adding the count of chars to the result array.
*/

// O(W * C) time, where W are the words and C is the length of the longest word.
// O(W * C) space
export function minimumCharactersForWords(words: string[]): string[] {
  type FrequencyMap = { [key: string]: number };
  const global: FrequencyMap = {};
  for (let word of words) {
    const local: FrequencyMap = {};
    for (let char of word.split("")) {
      if (!local[char]) local[char] = 0;
      if (!global[char]) global[char] = 0;
      local[char] += 1;
      global[char] = Math.max(global[char], local[char]);
    }
  }

  const result: string[] = [];
  for (let [key, count] of Object.entries(global)) {
    for (let i = 0; i < count; i++) result.push(key);
  }

  return result;


describe("minimum characters for words", () => {
  test("should work with an empty array", () => {
    expect(minimumCharactersForWords([])).toEqual([]);
  });
  // test("should work with an empty word", () => {
  //   expect(minimumCharactersForWords([""])).toEqual([""]);
  // });

  /**
   * {t: 2, h: 1, i: 1, s: 1, a: 1}
   * {t: 2, h: 1, a: 1}
   */
  test("should work with a few words", () => {
    const input = "this that did deed them! a".split(" ");
    const result = "t t h i s a d d e e m !".split(" ");
    expect(minimumCharactersForWords(input)).toEqual(result);
  });
});
