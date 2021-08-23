/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].
*/

// length = 1, sum = 8
//             l
//                 r
// Input: [2,1,5,8], S=7
const smallest_subarray_with_given_sum = function (s, arr) {
  // sliding window problem
  // we can increase the right pointer until our number is larger, and have a left pointer decreasing
  let currentLength = 0,
    minLength = Number.MAX_SAFE_INTEGER,
    sum = 0;
  let left = -1,
    right = -1;

  while (right < arr.length) {
    console.log(sum, currentLength, left, right);
    if (sum < s) {
      right++;
      if (right >= arr.length) break;
      sum += arr[right];
      currentLength++;
    } else {
      // record and reduce left
      minLength = Math.min(currentLength, minLength);
      left++;
      sum -= arr[left];
      currentLength--;
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

// length = 1
// sum = 8
//                      l
//                         r
const array = [3, 4, 1, 1, 6];
const r2 = smallest_subarray_with_given_sum(8, array);
// const r1 = smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]);

console.log(r2);
