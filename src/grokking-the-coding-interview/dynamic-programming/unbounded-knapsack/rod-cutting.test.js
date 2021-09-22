/*
Problem Statement#
Given a rod of length ‘n’, we are asked to cut the rod and sell the pieces in a way that will maximize the profit. We are also given the price of every piece of length ‘i’ where ‘1 <= i <= n’.

Example:

Lengths: [1, 2, 3, 4, 5]
Prices: [2, 6, 7, 10, 13]
Rod Length: 5

Let’s try different combinations of cutting the rod:

Five pieces of length 1 => 10 price
Two pieces of length 2 and one piece of length 1 => 14 price
One piece of length 3 and two pieces of length 1 => 11 price
One piece of length 3 and one piece of length 2 => 13 price
One piece of length 4 and one piece of length 1 => 12 price
One piece of length 5 => 13 price

This shows that we get the maximum price (14) by cutting the rod into two pieces of length ‘2’ and one piece of length ‘1’.
*/

// brute force solution recursively
/*
Need to try every possible way to increase the profit, using the length of the rod
O(3 ^ N) time | O(N) space
*/
// const solveRodCutting = function (lengths, prices, maxLength) {
//   let maxProfit = 0;

//   function recurse(index, length, profit) {
//     if (index >= prices.length || length > maxLength) return;
//     maxProfit = Math.max(maxProfit, profit);

//     const currentLength = lengths[index];
//     const currentPrice = prices[index];

//     recurse(index, length + currentLength, profit + currentPrice); // adding one of the same
//     recurse(index + 1, currentLength + length, currentPrice + profit); // move to the next one adding this one
//     recurse(index + 1, length, profit); // move to the next one
//   }

//   recurse(0, 0, 0);

//   return maxProfit;
// };

// approach using tabulation
// O(N * L) time | space
const solveRodCutting = function (lengths, prices, maxLength) {
  const dp = new Array(prices.length + 1)
    .fill(0)
    .map(() => new Array(maxLength + 1).fill(0));

  console.log(dp);

  for (let i = 1; i <= prices.length; i++) {
    const currentPrice = prices[i - 1];
    const currentLength = lengths[i - 1];
    for (let len = 1; len <= maxLength; len++) {
      const p1 = dp[i - 1][len];
      let p2 = 0;
      if (len >= currentLength) {
        p2 = currentPrice + dp[i][len - currentLength];
      }

      dp[i][len] = Math.max(p1, p2);
    }
  }
  console.log(dp);

  return dp[prices.length][maxLength];
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`); // 14
