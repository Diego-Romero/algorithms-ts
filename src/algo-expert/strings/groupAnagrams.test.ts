/**
 * Write a function that groups anagrams together with the given array of strings.
 * Anagrams are words that contain the same amount of letters irrespectively of their orders, for example (yo, oy) or (tac, cat, act)
 * We should return an array of string arrays.
 *
 *
 * Clarifying questions:
 * - What do we do if a word doesnt has any other anagram we should also return it? Yes
 * - Can we receive an empty string? Yes
 * - Can the array of words be empty? Yes
 * - Can we assume that we are only dealing with ASCII characters?
 * - Anagrams need to have the same count of letters, correct? Yes
 *
 * Approach:
 * Brute force:
 * - we need to iterate through all the words that we have and have a way to count their char count or we need to create a sorted copy of the string. This would help us to do something like "yo" and "oy" to match equally.
 * - If we sorted every string in the array that would give us O(W * S log S) and O(W) memory, W being the amount of words that we have.
 * - We then would keep a map that would have the sorted version of each string and an array indicating all the anagrams that are present.
 *
 * Another Brute force approach:
 * - Would be to do an N^2 loop keeping track of the visited ones who match with this one, but even then we would need to sort or create a frequency map
 */

// answer in (W log S) time, where W are the words and S is the length of the longest string | O(W) space.
export function groupAnagrams(words: string[]): string[][] {
  const map: { [key: string]: string[] } = {}; // {yo: [yo], act: [act, tac], flop: [flop]}
  for (let word of words) {
    const sorted = word
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (!map[sorted]) map[sorted] = [word];
    else {
      map[sorted].push(word);
    }
  }

  const result = Object.values(map);

  return result;
}

describe("group anagrams", () => {
  test("should work for all sorts of Anagrams", () => {
    const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp", ""];
    const result = [
      ["yo", "oy"],
      ["act", "tac", "cat"],
      ["flop", "olfp"],
      ["foo"],
      [""],
    ];
    expect(groupAnagrams(words)).toEqual(result);
  });
  test("it should work when there are no words", () => {
    expect(groupAnagrams([])).toEqual([]);
  });
});
