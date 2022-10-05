/*
Problem Statement#
Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

Example 1:

Input: [4, 6, 6, 6, 9], key = 6
Output: [1, 3]
Example 2:

Input: [1, 3, 8, 10, 15], key = 10
Output: [3, 3]
Example 3:

Input: [1, 3, 8, 10, 15], key = 12
Output: [-1, -1]

*/

// constrains: array can have dups, sorted in ascending order, if target is not present return -1.
const find_range = function (array, target) {
  // goal is to avoid O(N) and just do this doing binary search in O(Log N).
  // approach: do a binary search to find the start, then another binary search to find the end (each of them will be slightly different)
  const result = [-1, -1];
  const start = (result[0] = binarySearch(array, target, true));
  if (start === -1) return result;
  result[1] = binarySearch(array, target, false);
  return result;
};

// return the index of the smallest or the largest value in the array.
function binarySearch(array, target, findSmallest) {
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (target > array[mid]) left = mid + 1;
    else if (target < array[mid]) right = mid - 1;
    else {
      if (findSmallest) {
        if (mid === 0 || array[mid - 1] !== array[mid]) return mid;
        else right = mid - 1;
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== array[mid])
          return mid;
        else left = mid + 1;
      }
      // 2 options, either there is not a the same number behind, in which case we have found the smallest index
      // or there is the same number behind, in which case we would like to binary search again reducing the right index by mid - 1;
    }
  }

  return -1;
}

/**
 * Remember is possible to break down problems into really easy examples and then elaborate from there.
 */

describe("find range", () => {
  it("should work 1", () => {
    expect(find_range([4, 6, 6, 6, 6, 6, 9], 6)).toEqual([1, 5]);
    /**
     *                             l
     *                                   r
     *                           m
     */
  });

  it("should work 2", () => {
    expect(find_range([1, 3, 8, 10, 15], 10)).toEqual([3, 3]);
  });
  it("should work 3", () => {
    expect(find_range([1, 3, 8, 10, 15], 12)).toEqual([-1, -1]);
  });
});
