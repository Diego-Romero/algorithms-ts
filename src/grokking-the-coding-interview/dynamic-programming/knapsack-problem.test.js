// recursively solving which side I should go to

// the time O(2 ^ N), this can be confirmed in the recursion tree, for every N, we generate 2 recursive calls, in this case 2 ^ N
let solveKnapsack = function (profits, weights, capacity) {
  // increase the current profit and the weight, checking if our number is the largest
  let max = 0;
  function recurse(index, profit, weight) {
    // return the current profit
    if (weight > capacity || index >= profits.length) return;
    // check the left tree first
    const currentProfit = profits[index] + profit;
    const currentWeight = weights[index] + weight;

    if (currentWeight <= capacity) {
      max = Math.max(max, currentProfit);
      recurse(index + 1, currentProfit, currentWeight);
    }
    // check right tree as well
    recurse(index + 1, profit, weight);
  }

  recurse(0, 0, 0);
  return max;
};

// solution in the course
// let solveKnapsack = function (profits, weights, capacity) {
//   // increase the current profit and the weight, checking if our number is the largest

//   function recurse(currentCapacity, index) {
//     if (capacity <= 0 || index >= profits.length) return 0;

//     let profit1 = 0;
//     const newWeight = weights[index];
//     const newProfit = profits[index];
//     if (newWeight <= currentCapacity) {
//       profit1 =
//         newProfit + recurse(currentCapacity - newWeight, index + 1);
//     }
//     const profit2 = recurse(currentCapacity, index + 1);
//     return Math.max(profit1, profit2);
//   }

//   return recurse(capacity, 0);
// };

// const profits = [1, 6, 10, 16];
// const weights = [1, 2, 3, 5];
// console.log(
//   `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
// ); // 22
// console.log(
//   `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
// ); // 17

// Improving the solution using Memo
let solveKnapsackWithMemo = function (profits, weights, capacity) {
  // increase the current profit and the weight, checking if our number is the largest
  const dp = [];

  function recurse(currentCapacity, index) {
    if (capacity <= 0 || index >= profits.length) return 0;

    dp[index] = dp[index] || []; // define it in case it has not been
    if (typeof dp[index][capacity] !== "undefined") return dp[index][capacity];

    let profit1 = 0;
    const currentWeight = weights[index];
    const currentProfit = profits[index];
    if (currentWeight <= currentCapacity) {
      profit1 =
        currentProfit + recurse(currentCapacity - currentWeight, index + 1);
    }
    const profit2 = recurse(currentCapacity, index + 1);
    const max = Math.max(profit1, profit2);
    dp[index][capacity] = max;
    console.log(dp);
    return max;
  }

  return recurse(capacity, 0);
};

// console.log(
//   `Total knapsack profit: ---> ${solveKnapsackWithMemo(profits, weights, 7)}`
// ); // 22
// console.log(
//   `Total knapsack profit: ---> ${solveKnapsackWithMemo(profits, weights, 6)}`
// ); // 17
