/*
Introduction#
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack that has a capacity ‘C’. The goal is to get the maximum profit from the items in the knapsack. The only difference between the 0/1 Knapsack problem and this problem is that we are allowed to use an unlimited quantity of an item.

Let’s take the example of Merry, who wants to carry some fruits in the knapsack to get maximum profit. Here are the weights and profits of the fruits:

Items: { Apple, Orange, Melon }
Weights: { 1, 2, 3 }
Profits: { 15, 20, 50 }
Knapsack capacity: 5

Let’s try to put different combinations of fruits in the knapsack, such that their total weight is not more than 5.

5 Apples (total weight 5) => 75 profit
1 Apple + 2 Oranges (total weight 5) => 55 profit
2 Apples + 1 Melon (total weight 5) => 80 profit
1 Orange + 1 Melon (total weight 5) => 70 profit

This shows that 2 apples + 1 melon is the best combination, as it gives us the maximum profit and the total weight does not exceed the capacity.

Problem Statement#
Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C’. We can assume an infinite supply of item quantities; therefore, each item can be selected multiple times.
*/

// brute force solution, we can get a way with slightly modifying the knapsack problem
// assuming that we will always have a valid profits and weights array
// let solveKnapsack = function (profits, weights, capacity) {
//   function recurse(index, currentCapacity) {
//     // base case to stop recursing
//     if (currentCapacity <= 0 || index >= profits.length) return 0;

//     // need to try with a few different ways
//     const currentWeight = weights[index];
//     const currentProfit = profits[index];
//     let profit1 = 0;
//     if (currentWeight <= currentCapacity) {
//       profit1 = currentProfit + recurse(index, currentCapacity - currentWeight);
//     }
//     const profit2 = currentProfit + recurse(index + 1, currentCapacity);

//     return Math.max(profit1, profit2);
//   }
//   return recurse(0, capacity);
// };

// solution in the exercise, this is O(2 ^ N + C) as we need to try all the possible combinations
// the space complexity will be O(N + C)
// let solveKnapsack = function (profits, weights, capacity) {
//   function recurse(currentCapacity, currentIndex) {
//     // base checks
//     if (
//       currentCapacity <= 0 ||
//       profits.length == 0 ||
//       weights.length != profits.length ||
//       currentIndex >= profits.length
//     ) {
//       return 0;
//     }

//     // recursive call after choosing the items at the currentIndex, note that we recursive call on all
//     // items as we did not increment currentIndex
//     let profit1 = 0;
//     if (weights[currentIndex] <= currentCapacity) {
//       profit1 =
//         profits[currentIndex] +
//         recurse(currentCapacity - weights[currentIndex], currentIndex);
//     }

//     // recursive call after excluding the element at the currentIndex
//     const profit2 = recurse(currentCapacity, currentIndex + 1);

//     return Math.max(profit1, profit2);
//   }

//   return recurse(capacity, 0);
// };

// O(N * C) C being capacity, time | space
let solveKnapsack = function (profits, weights, maxCapacity) {
  const length = profits.length;
  const dp = new Array(length).fill(new Array(maxCapacity + 1).fill(0));
  // set up the tabular data in a way that we fill the first row first, with however many we can add
  for (let c = 1; c <= maxCapacity; c++) {
    if (weights[0] <= c) dp[0][c] = dp[0][c - weights[0]] + profits[0];
  }

  for (let i = 1; i < length; i++) {
    const currentWeight = weights[i],
      currentProfit = profits[i];
    for (let c = 1; c <= maxCapacity; c++) {
      // if the current weight < c, just copy
      let profit1 = 0,
        profit2 = 0;
      profit1 = dp[i - 1][c];
      if (currentWeight <= c) {
        profit2 = currentProfit + dp[i][c - currentWeight];
      }
      dp[i][c] = Math.max(profit1, profit2);
    }
  }

  console.table(dp);

  return dp[profits.length - 1][maxCapacity];
};

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`
);
