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

// tabular solution would be in O(N * L) time | space, where L is the length of the rod
const solveRodCutting = function (lengths, prices, maxLength) {
  const dp = new Array(lengths.length).fill(new Array(maxLength + 1).fill(0));
  // need to fill the first row
  console.table(dp);
  const firstPrice = prices[0];
  const firstLength = lengths[0];
  const firstRow = new Array(maxLength + 1).fill(0);
  for (let i = 0; i <= maxLength; i++) {
    if (i >= firstPrice) {
      const prevPrice = firstRow[i - firstLength];
      firstRow[i] = firstPrice + prevPrice;
    }
  }
	dp[0] = firstRow;

  console.table(dp);

  return dp[prices.length - 1][maxLength];
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);
