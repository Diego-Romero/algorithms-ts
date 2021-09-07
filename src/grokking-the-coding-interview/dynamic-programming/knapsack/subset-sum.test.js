/*
Problem Statement#
Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.

Example 1:#
Input: {1, 2, 3, 7}, S=6
Output: True
The given set has a subset whose sum is '6': {1, 2, 3}
Example 2:#
Input: {1, 2, 7, 1, 5}, S=10
Output: True
The given set has a subset whose sum is '10': {1, 2, 7}
Example 3:#
Input: {1, 3, 4, 8}, S=6
Output: False
The given set does not have any subset whose sum is equal to '6'.

*/

// solution in O(2^N) | N space
// const canPartition = function (numbers, targetSum) {
//   function recurse(index, sum) {
//     if (index === numbers.length) {
//       if (sum === targetSum) return true;
//       return false;
//     }

//     // create 2 recursion trees
//     const leftTree = recurse(index + 1, sum + numbers[index]);
//     const rightTree = recurse(index + 1, sum);
//     if (leftTree || rightTree) return true;
//     return false;
//   }

//   return recurse(0, 0);
// };

// solution using tabulation (bottom up) approach
// time & space O(N * S) S being the target sum
const canPartition = function (numbers, targetSum) {
  const dp = new Array(numbers.length).fill(
    new Array(targetSum + 1).fill(false)
  );

  for (let i = 0; i < numbers.length; i++) dp[i][0] = true;
  const firstRow = dp[0].map((n, i) => numbers[0] >= i);
  dp[0] = firstRow;
  console.table(dp);

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    for (let s = 1; s <= targetSum; s++) {
      // 2 options, either the one on top is true and we are good
      if (dp[i - 1][s]) dp[i][s] = dp[i - 1][s];
      else if (s >= numbers[i]) {
        // have to check for valid index
        const withNumber = dp[i - 1][s - currentNumber];
        dp[i][s] = withNumber;
      }
    }
  }

  console.table(dp);
  return dp[numbers.length - 1][targetSum];
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`); // true
console.log(
  `Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`
); // true
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`); // false

// describe("subset sum", () => {
//   test("should work with a simple example", () => {
//     const array = [1, 2, 3, 4];
//     const target = 10;
//     expect(canPartition(array, target)).toBeTruthy();
//   });
// });
