/*
Problem Statement#
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target

*/

const triplet_sum_close_to_target = function (arr, target_sum) {
  if (arr.length < 3) return -1;
  let closest = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    const currVal = arr[i];
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const leftVal = arr[left],
        rightVal = arr[right];
      const currentSum = currVal + leftVal + rightVal;
      const currentDistance = calculateDistance(currentSum);
      if (currentDistance < calculateDistance(closest)) closest = currentSum;
      if (currentDistance < target_sum) {
        left++;
      } else if (currentDistance > target_sum) {
        right--;
      } else {
        // found the exact sum
        return currentSum;
      }
    }
  }

  function calculateDistance(number) {
    // the number is larger than our current
    if (target_sum > 0) {
      if (number > target_sum) return target_sum - number;
      if (number < target_sum) {
        if (number >= 0) target_sum - number;
        // number is smaller than 0
        return target_sum + Math.abs(number);
      }
      return 0; // numbers are the same
    } else if (target_sum < 0) {
      if (number < target_sum) {
        return Math.abs(number) - Math.abs(target_sum);
      }
      if (number > target_sum) {
        if (number <= 0) {
          return Math.abs(target_sum) - Math.abs(number); // -2 -1 = 1
        } else {
          return Math.abs(target_sum) + number;
        }
      }
      return 0; // numbers are the same
    } else return Math.abs(number); // target sum is 0
  }

  return closestSumOfTriplets;
};

describe("closest sum to target", () => {
  test("testing it works", () => {
    const arr = [-2, 0, 1, 2];
    const target = 2;
    expect(triplet_sum_close_to_target(arr, target)).toEqual([1]);
  });
});
