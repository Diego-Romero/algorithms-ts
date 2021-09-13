/*
Introduction#
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack with a capacity ‘C.’ The goal is to get the maximum profit out of the knapsack items. Each item can only be selected once, as we don’t have multiple quantities of any item.

Let’s take Merry’s example, who wants to carry some fruits in the knapsack to get maximum profit. Here are the weights and profits of the fruits:

Items: { Apple, Orange, Banana, Melon }
Weights: { 2, 3, 1, 4 }
Profits: { 4, 5, 3, 7 }
Knapsack capacity: 5

Let’s try to put various combinations of fruits in the knapsack, such that their total weight is not more than 5:

Apple + Orange (total weight 5) => 9 profit
Apple + Banana (total weight 3) => 7 profit
Orange + Banana (total weight 4) => 8 profit
Banana + Melon (total weight 5) => 10 profit

This shows that Banana + Melon is the best combination as it gives us the maximum profit, and the total weight does not exceed the capacity.

Problem Statement#
Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’ Each item can only be selected once, which means either we put an item in the knapsack or we skip it.
*/

// solve it recursively first, then try to use tabulation
// brute force approach is to recurse, through all possible combinations
// let solveKnapsack = function (profits, weights, maxCapacity) {
//   let maxProfit = 0;

//   function recurse(index, weight, profit) {
//     if (weight <= maxCapacity) {
//       maxProfit = Math.max(maxProfit, profit);
//     }
//     if (weight > maxCapacity || index === profits.length) return;

//     // recurse right, not adding this current capacity and profit
//     recurse(index + 1, weight, profit);

//     // recurse left, adding this current capacity and profit
//     const currentWeight = weight + weights[index];
//     const currentProfit = profit + profits[index];
//     recurse(index + 1, currentWeight, currentProfit);
//   }

//   recurse(0, 0, 0);

//   return maxProfit;
// };

let solveKnapsack = function (profits, weights, maxCapacity) {
  const dp = new Array(profits.length).fill(new Array(maxCapacity + 1).fill(0));

  // fill the first row, then start from the second
  const firstRow = dp[0].map((_, index) =>
    index >= weights[0] ? profits[0] : 0
  );
  dp[0] = firstRow;
  for (let i = 1; i < profits.length; i++) {
    const currentProfit = profits[i];
    const currentWeight = weights[i];
    for (let c = 1; c <= maxCapacity; c++) {
      let profit1 = 0,
        profit2 = dp[i - 1][c];

      if (c >= currentWeight)
        profit2 = currentProfit + dp[i - 1][c - currentWeight];

      dp[i][c] = Math.max(profit1, profit2);
    }
  }

  console.log(dp);
  return dp[profits.length - 1][maxCapacity];
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
); // 22
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
); // 17
