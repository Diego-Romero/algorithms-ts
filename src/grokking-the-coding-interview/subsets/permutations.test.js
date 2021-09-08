/*
Problem Statement#
Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

{1, 2, 3}
{1, 3, 2}
{2, 1, 3}
{2, 3, 1}
{3, 1, 2}
{3, 2, 1}
If a set has ‘n’ distinct elements it will have n!n! permutations.

Example 1:

Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
*/

// solution in O(N * N!) time | space, as we have 2 for loops, one calculating the factorial of the next number we are inserting
const find_permutations = function (numbers) {
  let permutations = [[numbers[0]]];

  // do it in BFS way
  for (let i = 1; i < numbers.length; i++) {
    const newPerms = [];
    const current = numbers[i];
    for (let permutation of permutations) {
      // need to create the new permutations with this number
      for (let j = 0; j <= permutation.length; j++) {
        const copy = [...permutation];
        copy.splice(j, 0, current);
        newPerms.push(copy);
      }
    }

    permutations = newPerms;
  }

  return permutations;
};

// console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`);
console.log(find_permutations([1, 2, 3]));
// console.log(find_permutations([1, 3, 5]));
