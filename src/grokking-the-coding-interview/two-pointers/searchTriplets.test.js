/*
Problem Statement ##
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
*/

// 2 pointer approach in N^2 time as we are iterating inside of a loop
const search_triplets = function (arr) {
  triplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    const currVal = arr[i];
    while (left < right) {
      const leftVal = arr[left];
      const rightVal = arr[right];
      const sum = currVal + leftVal + rightVal;
      if (sum === 0) {
        triplets.push([currVal, leftVal, rightVal]);
        right--;
        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
};

describe("search triplets", () => {
  test("should work with many triplets", () => {
    // brute force approach in N^3
    // sort it we can do N log N time
    // sorted= [-3, -2, -1, 0, 1, 1, 2]
    // .         i .           l     r
    const input = [-3, 0, 1, 2, -1, 1, -2],
      output = [
        [-3, 1, 2],
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, 0, 1],
      ];
    expect(search_triplets(input)).toEqual(output);
  });
});
