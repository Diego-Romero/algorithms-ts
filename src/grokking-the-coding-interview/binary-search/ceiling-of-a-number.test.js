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

/**
 * Numbers are sorted in ascending order.
 * find the ceiling, the number equal or closest but larger than the key
 *  It can have duplicates
 * It can have 0
 * It can have negative values
 * 
 * 
Examples:
Input: [4, 6, 10], key = 17, is -1, because there is no number great or equal to 17
Input: [4, 6, 10], key = 6, is 1 because the index of 6 is 1, but if the key was 7, then the result would 10
Input: [1, 3, 8, 10, 15], key = 12, the result is 15, but we return the index of the number
Input: [4, 6, 10], key = -1, return 4, because the greatest number after -1 in the array is 4, but we return the index of this number
 */
const search_ceiling_of_a_number = function (array, key) {
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midNumber = array[midIndex];
    if (midNumber === key) return midIndex;
    else if (key > midNumber) left = midIndex + 1;
    else right = midIndex - 1;
  }
  if (left >= array.length) return -1;
  if (right < 0) return 0;
  return left; // we return the next consecutive biggest number.
};

// console.log(search_ceiling_of_a_number([4, 6, 10], 6)); // 1
// console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12)); // 15, as it is greater than or equal, index 4
// console.log(search_ceiling_of_a_number([4, 6, 10], 17)); // -1, as there is no greater than or equal
// console.log(search_ceiling_of_a_number([4, 6, 10], -1)); // 4, with index 0

describe("ceiling of a number", () => {
  test("it should work 1", () => {
    expect(search_ceiling_of_a_number([4, 6, 10], 6)).toEqual(1);
  });

  test("it should work 2", () => {
    //                                 0, 1, 2, 3,  4
    expect(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12)).toEqual(4);
  });

  test("it should work 3", () => {
    expect(search_ceiling_of_a_number([4, 6, 10], 17)).toEqual(-1);
  });

  test("it should work 3", () => {
    expect(search_ceiling_of_a_number([4, 6, 10], -1)).toEqual(0);
  });
});
