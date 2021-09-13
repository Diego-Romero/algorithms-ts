/*
Problem Statement#
Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both subsets is equal.

Example 1:

Input: {1, 2, 3, 4}
Output: True
Explanation: The given set can be partitioned into two subsets with equal sum: {1, 4} & {2, 3}
Example 2:

Input: {1, 1, 3, 4, 7}
Output: True
Explanation: The given set can be partitioned into two subsets with equal sum: {1, 3, 4} & {1, 7}
Example 3:

Input: {2, 3, 4, 6}
Output: False
Explanation: The given set cannot be partitioned into two subsets with equal sum.
*/

/*
generate all possible sums of both subsets
start by generating the total sum, and going to the left side generating the other possible
O(2 ^ N) time & space O(N) space for storing the recursion stack
*/
// const can_partition = function (array) {
//   const totalSum = array.reduce((prev, cur) => prev + cur, 0);
//   let found = false;
//   function recurse(index, leftSum, rightSum) {
//     // console.log(leftSum, rightSum);
//     if (leftSum === rightSum) {
//       found = true;
//       return;
//     }
//     if (found || index === array.length) return;
//     const current = array[index];
//     recurse(index + 1, leftSum + current, rightSum - current);
//     recurse(index + 1, leftSum, rightSum);
//   }
//   recurse(0, 0, totalSum);

//   return found;
// };

// DP approach is in O(N * S) where S is the total sum, this is for time and space
const can_partition = function (array) {
  const totalSum = array.reduce((prev, cur) => prev + cur, 0);
  if (totalSum % 2 !== 0) return false; // it needs to be an even number
  const length = totalSum / 2 + 1;
  const dp = new Array(array.length).fill(new Array(length).fill(false));
  const firstRow = dp[0].map((val, i) => i <= array[0]);
  dp[0] = firstRow;
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    // console.log(current);
    for (let j = 0; j < dp[i].length; j++) {
      let first = dp[i - 1][j],
        second = true;

      if (j >= current && dp[i - 1][j - current]) {
        second = true;
      }
      if (first || second) dp[i][j] = true;
    }
  }

  console.table(dp);

  return dp[array.length - 1][totalSum / 2];
};

// console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`); // true
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`); // true
// console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`); // false
