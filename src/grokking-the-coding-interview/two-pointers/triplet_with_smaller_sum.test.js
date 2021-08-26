/*
Problem Statement#
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/

const triplet_with_smaller_sum = function (arr, target) {
  count = 0;
  arr.sort((a, b) => a - b);
  console.log(arr, target);
  for (let i = 0; i < arr.length - 2; i++) {
    const currVal = arr[i];
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const leftVal = arr[left];
      const rightVal = arr[right];
      const sum = currVal + leftVal + rightVal;
      console.log(currVal, leftVal, rightVal, sum);
      if (sum < target) {
        // all the numbers from right to left are also valid
        count += right - left;
        left++; // see if we can get another number  by making it bigger
      } else {
        // if sum >= 0
        right--;
      }
    }
  }

  return count;
};

// console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

// describe("triplet with smaller sum", () => {
//   test("should work with a solid example", () => {
//     const array = [-1, 4, 2, 1, , 3];
//     const target = 5;
//     expect(triplet_with_smaller_sum(array, target)).toEqual(4);
//   });
// });
