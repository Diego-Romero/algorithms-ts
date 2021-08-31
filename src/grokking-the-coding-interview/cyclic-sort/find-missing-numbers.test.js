/*
Problem Statement#
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:

Input: [2, 3, 1, 8, 2, 3, 5, 1]
Input: [1, 2, 3, 1, 2, 3, 5, 7]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
Example 2:

Input: [2, 4, 1, 2]
Output: 3
Example 3:

Input: [2, 3, 2, 1]
Output: 4
*/

// O(N) time | space
const find_missing_numbers = function (array) {
  missingNumbers = [];
  let i = 0;

  while (i < array.length) {
    const j = array[i] - 1; // this is the index in the array
    if (j !== i && j !== array[j] - 1) {
      [array[i], array[j]] = [array[j], array[i]];
    } else {
      i++;
    }
  }
  // console.log(array);
  for (i = 0; i < array.length; i++) {
    if (array[i] - 1 !== i) missingNumbers.push(i + 1);
  }
  return missingNumbers;
};

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
