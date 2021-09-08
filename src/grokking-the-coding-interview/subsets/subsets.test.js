/*
Problem Statement#
Given a set with distinct elements, find all of its distinct subsets.

Example 1:

Input: [1, 3]
Output: [], [1], [3], [1,3]
Example 2:

Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
*/

// Recursive approach in O(2 ^ N) as we are splitting the calls into two every time
// O(2 ^ N) space, as we are saving every combination
// const find_subsets = function (array) {
//   subsets = [];
//   // this will go in two ways, one with the empty and one with the current number
//   function recurse(index, numbers) {
//     if (index === array.length) {
//       subsets.push(numbers);
//       return;
//     }

//     // one approach adding the current number
//     const current = array[index];
//     recurse(index + 1, [...numbers, current]);
//     recurse(index + 1, [...numbers]);
//   }
//   recurse(0, []);
//   return subsets;
// };

// Solving it using a BFS approach
// time will be O(N * 2 ^ N)
// space will be O(2 ^ N) as at every step the total subsets doubles
const find_subsets = function (array) {
  const subsets = [[]]; // use a queue to solve it
  // add every number to the current Q
  for (let n of array) {
    const size = subsets.length;
    for (let i = 0; i < size; i++) {
      const subset = subsets[i];
      subsets.push([...subset, n]);
    }
  }

  // this will go in two ways, one with the empty and one with the current number
  return subsets;
};

// console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`);
// console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`);
console.log(find_subsets([1, 2, 3]));
