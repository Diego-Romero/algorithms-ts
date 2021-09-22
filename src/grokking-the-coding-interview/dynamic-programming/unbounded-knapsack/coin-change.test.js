/*
Introduction#
Given an infinite supply of ‘n’ coin denominations and a total money amount, we are asked to find the total number of distinct ways to make up that amount.

Example:

Denominations: {1,2,3}
Total amount: 5
Output: 5
Explanation: There are five ways to make the change for '5', here are those ways:
  1. {1,1,1,1,1} 
  2. {1,1,1,2} 
  3. {1,2,2}
  4. {1,1,3}
  5. {2,3}
Problem Statement#
Given a number array to represent different coin denominations and a total amount ‘T’, we need to find all the different ways to make a change for ‘T’ with the given coin denominations. We can assume an infinite supply of coins, therefore, each coin can be chosen multiple times.
*/

// solve the problem using the knapsack approach, recursively
// this solution works in O(2 ^ N) time | O(N) space
// let countChange = function (denominations, total) {
//   let ways = 0;

//   function recurse(i, sum) {
//     if (i >= denominations.length || sum > total) return;
//     if (sum === total) {
//       ways++;
//       return;
//     }
//     const denom = denominations[i];
//     const newSum = denom + sum;
//     recurse(i, newSum); // same index but increase the sum
//     recurse(i + 1, sum); //
//   }

//   recurse(0, 0);

//   return ways;
// };

// tabular approach
let countChange = function (denominations, total) {
  const dp = new Array(denominations.length)
    .fill(0)
    .map(() => new Array(total + 1).fill(0));
  // need to fill the first col of each row with ones
  for (let i = 0; i < denominations.length; i++) dp[i][0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    const denom = denominations[i];
    for (let ways = 1; ways <= total; ways++) {
      if (i === 0 && ways >= denom) {
        dp[i][ways] = dp[i][ways - denom];
      } else {
        if (ways >= denom) {
          dp[i][ways] = dp[i - 1][ways] + dp[i][ways - denom];
        } else {
          dp[i][ways] = dp[i - 1][ways];
        }
      }
    }
  }
  console.log(dp);

  return dp[denominations.length - 1][total];
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`); //14
