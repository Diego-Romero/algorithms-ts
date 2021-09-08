/*
Problem Statement ##
Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

Example 1:

Input: [4, 6, 10], key = 10
Output: 2
Example 2:

Input: [1, 2, 3, 4, 5, 6, 7], key = 5
Output: 4
Example 3:

Input: [10, 6, 4], key = 10
Output: 0
Example 4:

Input: [10, 6, 4], key = 4
Output: 2
*/

// need to figure out if the array is in ascending or descending order
const binary_search = function (array, key) {
  const ascending = isAscending(array);
  console.log(key, array, ascending);
  // do binary search if is ascending
  let left = 0,
    right = array.length,
    mid = -1;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    const currentNumber = array[mid];
    if (ascending) {
      if (key > currentNumber) left = mid + 1;
      else if (key < currentNumber) right = mid - 1;
      else return mid;
    } else {
      // descending
      if (key > currentNumber) right = mid - 1;
      else if (key < currentNumber) left = mid + 1;
      else return mid;
    }
  }
  return mid;
};

function isAscending(array) {
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1],
      next = array[i];
    if (prev > next) return false;
  }
  return true;
}

console.log(binary_search([4, 6, 10], 10)); // 2
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5)); // 4
console.log(binary_search([10, 6, 4], 10)); // 0
console.log(binary_search([10, 6, 4], 4)); // 2
