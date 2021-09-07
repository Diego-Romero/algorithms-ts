/*
Problem Statement ##
Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.

Example 1: ##
Input: {1, 2, 3, 4}
Output: True
Explanation: The given set can be partitioned into two subsets with equal sum: {1, 4} & {2, 3}
Example 2: ##
Input: {1, 1, 3, 4, 7}
Output: True
Explanation: The given set can be partitioned into two subsets with equal sum: {1, 3, 4} & {1, 7}
Example 3: ##
Input: {2, 3, 4, 6}
Output: False
Explanation: The given set cannot be partitioned into two subsets with equal sum.

*/

/*
Brute force solution would be to generate all possible combinations of numbers
keeping track of the sum on each side.
Time complexity is O(2^N) as we are branching out twice for every number
space is O(N) as the max amount of recursive calls we will have is N
*/
// let canPartition = function (numbers) {
//   const totalSum = numbers.reduce((prev, curr) => prev + curr, 0);
//   console.log(`total sum ${totalSum}`);

//   // increase left sum by the current number and reduce rightSum by the same number
//   function recurse(index, leftSum, rightSum) {
//     // base case, once we have finished checking all the numbers
//     // console.log(numbers[index], leftSum, rightSum);
//     if (index >= numbers.length) {
//       if (leftSum === rightSum) return true;
//       return false;
//     }
//     const current = numbers[index];
//     const leftTree = recurse(index + 1, leftSum + current, rightSum - current);
//     const rightTree = recurse(index + 1, leftSum, rightSum);
//     if (leftTree || rightTree) return true;
//     return false;
//   }

//   return recurse(0, 0, totalSum);
// };

// solution with Memoization (top down) DP
// This solution would be in O(N * S) where N is the number of numbers we have and S is the max sum
// let canPartition = function (numbers) {
//   const totalSum = numbers.reduce((prev, curr) => prev + curr, 0);
//   if (totalSum % 2 !== 0) return false; // if the total sum is odd, is not even worth checking
//   const dp = [];

//   function recurse(sum, index) {
//     if (sum === 0) return true;
//     if (index >= numbers.length) return false;

//     dp[index] = dp[index] || [];

//     if (typeof dp[index][sum] === "undefined") {
//       const current = numbers[index];
//       if (numbers[index] <= sum) {
//         // try with this one as well
//         const tryPartition = recurse(sum - current, index + 1);
//         if (tryPartition) {
//           dp[index][sum] = true;
//           return true;
//         }
//       }
//       dp[index][sum] = recurse(sum, index + 1);
//     }

//     return dp[index][sum];
//   }
//   console.table(dp);

//   return recurse(totalSum / 2, 0);
// };

// solution with tabulation
// This solution would be in O(N * S) where N is the number of numbers we have and S is the max sum
let canPartition = function (numbers) {
  const totalSum = numbers.reduce((prev, curr) => prev + curr, 0);
  if (totalSum % 2 !== 0) return false;
  const halfLength = totalSum / 2 + 1;
  const dp = new Array(numbers.length).fill(new Array(halfLength).fill(false));
  // for the first row, we need to fill all but the first, with the right amounts
  const firstNumber = numbers[0];
  const firstRow = dp[0].map((v, i) => firstNumber >= i);
  dp[0] = firstRow;
  // we can always make the 0
  for (let i = 0; i < numbers.length; i++) dp[i][0] = true;

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    for (let sum = 1; sum <= halfLength; sum++) {
      // two options, we can either make with the one on top, or this number - the row above
      if (dp[i - 1][sum]) dp[i][sum] = true;
      else if (sum >= currentNumber) {
        // check if we can make it from the row above
        dp[i][sum] = dp[i - 1][sum - currentNumber];
      }
    }
  }

  console.table(dp);
  return dp[numbers.length - 1][halfLength];
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`); // true
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`); // true
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`); // false
