/*
Problem Statement#
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:

Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.
Example 2:

Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.
Example 3:

Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.
Example 4:

Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.
*/

/**
 * Constrains:
 * - Sorted by the smallest letter.
 * - All lowercase letters.
 * - Find the smallest letter in the given array greater than a given key
 * - Assume that the array is a circular list, meaning that the last letter is connected with the first
 */
const search_next_letter = function (letters, key) {
  // check for valid input, etc.
  let leftIdx = 0,
    rightIdx = letters.length - 1;
  const keyNumber = key.charCodeAt(0);
  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((rightIdx + leftIdx) / 2);
    const midChar = letters[midIdx];
    const midNumber = midChar.charCodeAt(0);
    if (keyNumber > midNumber) leftIdx = midIdx + 1;
    else if (keyNumber < midNumber) rightIdx = midIdx - 1;
    else {
      leftIdx = midIdx;
      rightIdx = midIdx;
      break;
    } // we have found the exact number
  }
  // 3 ways to deal with it, if left is smaller than right
  if (rightIdx < 0 || leftIdx >= letters.length - 1) return letters[0];
  return letters[leftIdx + 1];
};

// console.log(search_next_letter(["a", "c", "f", "h"], "f")); // h
// console.log(search_next_letter(["a", "c", "f", "h"], "b")); // c
// console.log(search_next_letter(["a", "c", "f", "h"], "m")); // a, as the list is circular

describe("next letter", () => {
  test("test 1", () => {
    expect(search_next_letter(["b", "c", "f", "h"], "f")).toEqual("h");
    //                          l
    //                       r
    //                          m
  });

  test("test 2", () => {
    expect(search_next_letter(["a", "c", "f", "h"], "h")).toEqual("a");
  });

  test("test 3", () => {
    expect(search_next_letter(["a", "c", "f", "h"], "b")).toEqual("c");
    /**
     *                               l
     *                          r
     *                               m
     */
  });

  test("test 4", () => {
    expect(search_next_letter(["a", "c", "f", "h"], "m")).toEqual("a");
  });
});
