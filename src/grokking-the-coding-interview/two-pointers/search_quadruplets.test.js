/*
Quadruple Sum to Target (medium)#
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.
*/

// O(N^3) time | O(1) space
const search_quadruplets = function (arr, target) {
  quadruplets = [];
  arr.sort((a, b) => a - b);

  for (let first = 0; first < arr.length - 3; first++) {
    for (let second = first + 1; second < arr.length - 2; second++) {
      let left = second + 1,
        right = arr.length - 1;
      while (left < right) {
        const v1 = arr[first],
          v2 = arr[second],
          v3 = arr[left],
          v4 = arr[right];
        const sum = v1 + v2 + v3 + v4;
        if (sum > target) right--;
        else if (sum < target) left++;
        else {
          // sum is 0
          quadruplets.push([v1, v2, v3, v4]);
          right--;
          left++;
        }
      }
    }
  }

  return quadruplets;
};
