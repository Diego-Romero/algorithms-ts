/**
Problem Statement#
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1:

Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]
Example 2:

Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]
 
 */

// time O(N) | O(1) space
const dutch_flag_sort = function (arr) {
  // put all the zeroes first
  let available = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      swap(i, available);
      available++;
    }
  }

  available = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 2) {
      swap(i, available);
      available--;
    }
  }

  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }

  return arr;
};

describe("dutch flag sort", () => {
  test("should sort them", () => {
    const array = [0, 1, 2, 2, 0, 1, 1];
    const result = [0, 0, 1, 1, 1, 2, 2];
    expect(dutch_flag_sort(array)).toEqual(result);
  });
});
