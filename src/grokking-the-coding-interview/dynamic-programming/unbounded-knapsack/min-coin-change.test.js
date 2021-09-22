/*
Introduction#
Given an infinite supply of ‘n’ coin denominations and a total money amount, we are asked to find the minimum number of coins needed to make up that amount.

Example 1:

Denominations: {1,2,3}
Total amount: 5
Output: 2
Explanation: We need a minimum of two coins {2,3} to make a total of '5'
Example 2:

Denominations: {1,2,3}
Total amount: 11
Output: 4
Explanation: We need a minimum of four coins {2,3,3,3} to make a total of '11'
Problem Statement#
Given a number array to represent different coin denominations and a total amount ‘T’, we need to find the minimum number of coins needed to make a change for ‘T’. We can assume an infinite supply of coins, therefore, each coin can be chosen multiple times.
*/

// Brute force approach
// let countChange = function (denominations, total) {
//   let min = Infinity;
//   const length = denominations.length;

//   function recurse(i, sum, used) {
//     if (i > length || sum > total) return used;
//     // there are 2 possible
//     // we can generate the next possible
//     const denom = denominations[i];
//     let p1 = Infinity;
//     if (denom + sum <= total) {
//       p1 = recurse(i, denom + sum, used + 1); // use this one
//     }
//     const p2 = recurse(i + 1, sum, used);
//     return Math.min(p1, p2);
//   }

//   return recurse(0, 0, 0);
// };

let countChange = function (denominations, total) {
  const length = denominations.length;
  const dp = Array(length)
    .fill(0)
    .map(() => Array(total + 1).fill(0));
  // fill the first row with 1s, as we can make 0
  for (let i = 0; i < length; i++) {
    const denom = denominations[i];
    for (let count = 1; count <= total; count++) {
      if (i === 0) {
        if (count >= denom) dp[i][count] = dp[i][count - denom] + 1;
      } else {
        if (count >= denom)
          dp[i][count] = Math.min(dp[i - 1][count], 1 + dp[i][count - denom]);
        else dp[i][count] = dp[i - 1][count];
      }
    }
  }
  console.log(dp);

  return dp[length - 1][total];
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(
  `Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`
);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Number of ways to make change: ---> ${countChange([3, 5], 7)}`);
