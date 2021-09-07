/*
Problem Statement#
Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

Example 1:#
Input: {1, 1, 2, 3}, S=4
Output: 3
The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
Note that we have two similar sets {1, 3}, because we have two '1' in our input.
Example 2:#
Input: {1, 2, 7, 1, 5}, S=9
Output: 3
The given set has '3' subsets whose sum is '9': {2, 7}, {1, 7, 1}, {1, 2, 1, 5}
*/

// Solution in O(N * S), where S is the targetSum, time | space
// const countSubsets = function (numbers, targetSum) {
//   const dp = new Array(numbers.length).fill(new Array(targetSum + 1).fill(0));
//   // set the first indices to one, as we can always make 0
//   for (let i = 0; i < numbers.length; i++) dp[i][0] = 1;
//   const firstNumber = numbers[0];
//   const firstRow = dp[0].map((v, i) => (firstNumber >= i ? 1 : 0));
//   dp[0] = firstRow;

//   for (let i = 1; i < numbers.length; i++) {
// 		const currentNumber = numbers[i];
//     for (let sum = 1; sum <= targetSum; sum++) {
// 			// first copy the one above to this one
//       dp[i][sum] = dp[i - 1][sum];
//       // increment it if we can
//       if (sum >= currentNumber) {
// 				dp[i][sum] += dp[i - 1][sum - currentNumber];
//       }
//     }
//   }

// 	console.table(dp);
//   return dp[numbers.length - 1][targetSum];
// };

let countSubsets = function (num, sum) {
  const n = num.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));

  // populate the sum=0 columns, as we will always have an empty set for zero sum
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = num[0] == s ? 1 : 0;
  }
  console.table(dp);

  // process all subsets for all sums
  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= sum; s++) {
      // exclude the number
      dp[i][s] = dp[i - 1][s];
      // include the number, if it does not exceed the sum
      if (s >= num[i]) {
        dp[i][s] += dp[i - 1][s - num[i]];
      }
    }
  }
  console.table(dp);

  // the bottom-right corner will have our answer.
  return dp[num.length - 1][sum];
};

console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`); // 3
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`); // 9
