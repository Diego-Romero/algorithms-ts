/*
Problem Statement#
Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30 
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
Example 2:

Input: [8, 2, 6, 5], target=50 
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
Explanation: There are seven contiguous subarrays whose product is less than the target.
*/
// O(N ^ 2)
const find_subarrays = function (arr, target) {
  result = [];
  for (let left = 0; left < arr.length; left++) {
    let product = 1;
    let current = []; // [2, 5, 3]
    for (let right = left; right < arr.length; right++) {
      const val = arr[right];
      product *= val;
      if (product < target) {
        current.push(val);
        result.push([...current]);
      } else break;
    }
    // keep iterating to the right, until our product is larger
  }
  return result;
};
