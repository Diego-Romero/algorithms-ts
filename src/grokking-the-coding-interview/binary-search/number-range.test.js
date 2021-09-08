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

const find_range = function (array, target) {
  // do a binary search to see if we can find the start
  const index = binarySearch(array, target, 0, array.length - 1);
  // console.log("initial index", index);
  if (index === -1) return [-1, -1];
  let startIndex = index;
  while (true) {
    const result = binarySearch(array, target, 0, startIndex - 1);
    if (result === -1) break;
    startIndex = result;
  }
  // console.log("start index", startIndex);
  let endIndex = index;
  while (true) {
    const result = binarySearch(array, target, endIndex + 1, array.length - 1);
    console.log(result);
    if (result === -1) break;
    endIndex = result;
  }
  // console.log("end index", endIndex);
  return [startIndex, endIndex];
};

// returns the index of the found number
function binarySearch(array, target, start, end) {
  let left = start;
  right = end;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midN = array[mid];
    if (midN == target) return mid;

    if (target < midN) right = mid - 1;
    else if (target > midN) left = mid + 1;
  }

  return -1;
}

console.log(find_range([4, 6, 6, 6, 6, 6, 9], 6)); // [1, 5]
console.log(find_range([1, 3, 8, 10, 15], 10)); // [3, 3]
console.log(find_range([1, 3, 8, 10, 15], 12)); // [-1, -1]
