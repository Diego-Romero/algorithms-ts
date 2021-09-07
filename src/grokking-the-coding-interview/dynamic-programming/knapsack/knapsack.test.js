/*
Introduction#
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack that has a capacity ‘C’. The goal is to get the maximum profit from the items in the knapsack. Each item can only be selected once, as we don’t have multiple quantities of any item.

Let’s take Merry’s example, who wants to carry some fruits in the knapsack to get maximum profit. Here are the weights and profits of the fruits:

Items: { Apple, Orange, Banana, Melon }
Weights: { 2, 3, 1, 4 }
Profits: { 4, 5, 3, 7 }
Knapsack capacity: 5

Let’s try to put different combinations of fruits in the knapsack, such that their total weight is not more than 5:

Apple + Orange (total weight 5) => 9 profit
Apple + Banana (total weight 3) => 7 profit
Orange + Banana (total weight 4) => 8 profit
Banana + Melon (total weight 5) => 10 profit

This shows that Banana + Melon is the best combination, as it gives us the maximum profit and the total weight does not exceed the capacity.

Problem Statement#
Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C’. Write a function that returns the maximum profit. Each item can only be selected once, which means either we put an item in the knapsack or skip it.

*/
// we can write a recursive function that generates every possible pair essentially
// This solution would run in O(2^N)
// let solveKnapsack = function (profits, weights, maxCapacity) {
//   let max = -Infinity;
//   // we want to recurse, increasing the index of each one, one tree adding the next number and the other remaining the same
//   function recurse(index, currentWeight, currentProfit) {
//     // base case, when our index is larger than profits or weights
//     if (index >= profits.length) {
//       if (currentWeight <= maxCapacity) {
//         max = Math.max(currentProfit, max);
//       }
//       return;
//     }
//     // only recurse to the left of the tree if the capacity allows
//     recurse(
//       index + 1,
//       currentWeight + weights[index],
//       currentProfit + profits[index]
//     ); // left tree
//     recurse(index + 1, currentWeight, currentProfit);
//   }

//   recurse(0, 0, 0);
//   return max;
// };

// This solution would run in O(2^N), this is what they are doing in the course || O(N) space, as we are doing this in a DFS sort of way
// let solveKnapsack = function (profits, weights, maxCapacity) {
//   // return the max valid weight to the top
//   function recurse(index, currentCapacity) {
//     if (currentCapacity <= 0 || index === weights.length) return 0;

//     let leftTree = 0;
//     if (weights[index] <= currentCapacity) {
//       leftTree =
//         profits[index] + recurse(index + 1, currentCapacity - weights[index]);
//     }
//     const rightTree = recurse(index + 1, currentCapacity);

//     return Math.max(leftTree, rightTree);
//   }

//   return recurse(0, maxCapacity);
// };

// solving it in a Memoized way (top down) approach, we can cache the values in a 2 dimensional array
// as we have 2 changing values, the index and the capacity
// N * C is the time | space complexity. Since we won't have more than N items and C capacity, similarly this is the space that we will need, we will also have N recursive calls, but it will resolve O(N * C);
// let solveKnapsack = function (profits, weights, maxCapacity) {
//   const dp = [];

//   function recurse(index, currentCapacity) {
//     if (currentCapacity <= 0 || index === weights.length) return 0;

//     dp[index] = dp[index] || [];
//     if (typeof dp[index][currentCapacity] !== "undefined")
//       return dp[index][currentCapacity]; // return the previously stored value

//     let leftTree = 0;
//     if (weights[index] <= currentCapacity) {
//       leftTree =
//         profits[index] + recurse(index + 1, currentCapacity - weights[index]);
//     }
//     const rightTree = recurse(index + 1, currentCapacity);

//     dp[index][currentCapacity] = Math.max(leftTree, rightTree);

//     return dp[index][currentCapacity];
//   }

//   return recurse(0, maxCapacity);
// };

// similarly to the last one, this one has a complexity of O(N * C) time | space
let solveKnapsack = function (profits, weights, maxCapacity) {
  const dp = new Array(profits.length).fill(new Array(maxCapacity + 1).fill(0));
  // fill the first row with profits from the first if is big enough

  // make the ones in the first row, the profit from the first number if that is possible

  if (weights[0] <= maxCapacity) {
    dp[0] = new Array(maxCapacity + 1).fill(profits[0]);
    dp[0][0] = 0;
  }
  console.table(dp);

  for (let index = 1; index < profits.length; index++) {
    for (let capacity = 1; capacity <= maxCapacity; capacity++) {
      let profit2 = 0;
      if (weights[index] <= capacity) {
        profit2 = profits[index] + dp[index - 1][capacity - weights[index]];
      }
      const profit1 = dp[index - 1][capacity];
      dp[index][capacity] = Math.max(profit1, profit2);
    }
  }

  console.table(dp);
  return dp[profits.length - 1][maxCapacity];
};

var profits = [1, 6, 10,16];
var weights = [1, 2, 3, 5];
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
); // 22
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
); // 17
