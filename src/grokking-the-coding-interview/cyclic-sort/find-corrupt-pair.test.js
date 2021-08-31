/*
Find the Corrupt Pair (easy)#
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

Example 1:

Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.
Example 2:

Input: [3, 1, 2, 3, 6, 4]
Output: [3, 5]
Explanation: '3' is duplicated and '5' is missing.
*/

const find_corrupt_numbers = function (nums) {
  // cyclic sort first
  let i = 0;
  const result = [-1, -1];
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (j !== i) {
      if (nums[j] === nums[i]) {
        result[0] = nums[i];
        i++;
      }
      // found duplicate
      else {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    } else {
      i++;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) result[1] = i + 1;
  }
  return result;
};

console.log(find_corrupt_numbers([3, 1, 2, 5, 2])); // [2, 4]
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4])); // [3, 5]
