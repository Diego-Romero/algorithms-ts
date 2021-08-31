/*
Problem Statement#
We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]
Example 2:

Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]
Example 3:

Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]
*/
// because the numbers are unique and they occupy the length of the array

// O(N) time | constant space
const cyclic_sort = function (array) {
  let i = 0;
  while (i < array.length) {
    let j = array[i] - 1;
    if (j !== i) {
      swap(array, i, j);
    } else {
      i++;
    }
  }
  return array;
};

// const cyclic_sort = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[i] - 1 !== i) swap(nums, nums[i] - 1, i);
//   }
//   return nums;
// };

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
