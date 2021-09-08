/*
Problem Statement#
Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:

Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]
Example 2:

Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 
*/

// recursive solution, this works in O(2 ^ N) time | space
// numbers would have to be sorted in order for this approach to work
const find_subsets = function (numbers) {
  const subsets = [];
  // we could use a set to keep track of the unique numbers
  function recurse(index, array) {
    if (index === numbers.length) {
      subsets.push(array);
      return;
    }

    // skip the next one if is the same
    if (index + 1 < numbers.length) {
      if (numbers[index] !== numbers[index + 1]) {
        recurse(index + 1, [...array, numbers[index]]);
      }
    }
    if (index + 1 === numbers.length)
      recurse(index + 1, [...array, numbers[index]]);
    recurse(index + 1, [...array]);
  }
  recurse(0, []);
  return subsets;
};

const find_subsets = function (numbers) {
	const result = []



	return result;
};

// console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`);
// console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`);

console.log(find_subsets([1, 1, 2, 3]));
console.log(find_subsets([1, 1, 1, 1]));
console.log(find_subsets([1, 1, 1, 2]));
