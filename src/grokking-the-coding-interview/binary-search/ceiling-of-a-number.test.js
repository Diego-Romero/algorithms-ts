/*
Problem Statement#
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

Example 1:

Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.
Example 2:

Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.
Example 3:

Input: [4, 6, 10], key = 17
Output: -1
Explanation: There is no number greater than or equal to '17' in the given array.
Example 4:

Input: [4, 6, 10], key = -1
Output: 0
Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.
*/

const search_ceiling_of_a_number = function (array, key) {
  // need to find the number or the second largest
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const number = array[mid];
    // keep going right, until we can go left
    if (left === right && number >= key) return right;
    if (key > number) left = mid + 1;
    else if (key < number) right = mid - 1;
    else return mid; // return the index of the number we have found
  }

  return -1;
};

console.log(search_ceiling_of_a_number([4, 6, 10], 6)); // 1
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12)); // 15, as it is greater than or equal, index 4
console.log(search_ceiling_of_a_number([4, 6, 10], 17)); // -1, as there is no greater than or equal
console.log(search_ceiling_of_a_number([4, 6, 10], -1)); // 4, with index 0
