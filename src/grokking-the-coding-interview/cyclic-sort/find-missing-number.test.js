/*
Problem Statement ##
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
       [0, 1, 4, 3]
Output: 2
Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
*/

const find_missing_number = function (array) {
  // if we can swap the number swap it
  let i = 0;
  while (i < array.length) {
    let j = array[i];
    if (j < array.length && i !== j) {
      // swap
      [array[i], array[j]] = [array[j], array[i]];
    } else {
      i++;
    }
  }
  console.log(array);
  for (let j = 0; j < array.length; j++) {
    if (array[j] !== j) return j;
  }
  return -1;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
