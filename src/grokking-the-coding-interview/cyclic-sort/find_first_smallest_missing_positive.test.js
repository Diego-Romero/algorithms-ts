/*
Find the Smallest Missing Positive Number (medium)#
Given an unsorted array containing numbers, find the smallest missing positive number in it.

Example 1:
Input: [-3, 1, 5, 4, 2]  [1, 2, -3, 4, 5]
Output: 3
Explanation: The smallest missing positive number is '3'

Example 2:
Input: [3, -2, 0, 1, 2]
Output: 4

Example 3:
Input: [3, 2, 5, 1]
Output: 4
*/

// O(N) time | constant space
const find_first_smallest_missing_positive = function (array) {
  // 0 counts as non positive
  // we could detect if we are counting from 0 or 1
  // cyclic sort, don't move the negative numbers
  let countingFromZero = false;
  for (let n of array) {
    if (n === 0) countingFromZero = true;
  }

  let i = 0;
  while (i < array.length) {
    let j = array[i];
    if (!countingFromZero) j -= 1;
    if (j >= 0 && j !== i) {
      [array[i], array[j]] = [array[j], array[i]];
    } else {
      i++;
    }
  }
  console.log(array);
  for (i = 0; i < array.length; i++) {
    if (countingFromZero && array[i] !== i) return i;
    if (!countingFromZero && array[i] - 1 !== i) return i + 1;
  }

  return -1;
};

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2])); // 3
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2])); // 4
console.log(find_first_smallest_missing_positive([3, 2, 5, 1])); // 4
