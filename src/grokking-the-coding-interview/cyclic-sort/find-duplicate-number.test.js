/*
Problem Statement#
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4
Example 2:

Input: [2, 1, 3, 3, 5, 4]
Output: 3
Example 3:

Input: [2, 4, 1, 4, 4]
Output: 4
*/

const find_duplicate = function (array) {
  // do cyclic sort, until we try to put the number in the same place twice
  let i = 0;
  while (i < array.length) {
    const j = array[i] - 1;
    if (j !== i) {
      if (array[j] === array[i]) return array[i];
      [array[i], array[j]] = [array[j], array[i]];
    } else {
      i++;
    }
  }
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
