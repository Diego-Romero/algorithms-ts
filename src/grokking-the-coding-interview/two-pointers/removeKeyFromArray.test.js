/*
Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Example 1:

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
Example 2:

Input: [2, 11, 2, 2, 1], Key=2
Output: 2
Explanation: The first two elements after removing every 'Key' will be [11, 1].


*/

function remove_element(arr, key) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    // swap current with j if is different than key
    if (arr[i] !== key) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  console.log(arr);
  return j;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
