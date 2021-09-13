/*
Problem Statement#
Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

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

// brute force solution in O(2 ^ N) time and O(N) space, because of the recursive calls
// const canPartition = function (array, targetSum) {
//   let able = false;
//   function recurse(index, sum) {
//     if (sum === targetSum) {
//       able = true;
//       return;
//     }
//     if (able || index === array.length) return;

//     recurse(index + 1, array[index] + sum);
//     recurse(index + 1, sum);
//   }
//   recurse(0, 0);
//   return able;
// };

// if we sort the list, we could apply tabulation to this problem
const canPartition = function (array, targetSum) {
  array.sort((a, b) => a - b);
  const dp = new Array(array.length).fill(new Array(targetSum + 1).fill(false));

  const row = dp[0].map((_, i) => i <= array[0]);
  dp[0] = row;

  for (let i = 1; i < array.length; i++) {
    const current = array[i];
		// console.log(current)
    for (let j = 0; j < dp[i].length; j++) {
			// console.log(j)
      if (dp[i - 1][j]) dp[i][j] = true;

      if (j >= current && dp[i - 1][j - current]) dp[i][j] = true;
    }
  }

  console.table(dp);

  return dp[array.length - 1][targetSum];
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`); // true
console.log(
  `Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`
); // true
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`); // false
