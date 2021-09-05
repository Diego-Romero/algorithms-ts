/*
Problem Statement#
Given a staircase with ‘n’ steps and an array of ‘n’ numbers representing the fee that you have to pay if you take the step. Implement a method to calculate the minimum fee required to reach the top of the staircase (beyond the top-most step). At every step, you have an option to take either 1 step, 2 steps, or 3 steps. You should assume that you are standing at the first step.

Example 1:

Number of stairs (n) : 6
Fee: {1,2,5,2,1,2}
Output: 3
Explanation: Starting from index '0', we can reach the top through: 0->3->top
The total fee we have to pay will be (1+2).
Example 2:

Number of stairs (n): 4
Fee: {2,3,4,5}
Output: 5
Explanation: Starting from index '0', we can reach the top through: 0->1->top
The total fee we have to pay will be (2+3).

*/

// can implement a recursive solution in O(3 ^ N) as we have 3 recursive trees happening at the same time
// const findMinFee = function (fees) {
//   let min = Infinity;
//   // Fee: {1,2,5,2,1,2}

//   function recurse(index, fee) {
//     if (index >= fees.length) {
//       min = Math.min(min, fee);
//       return;
//     }

//     // iterate to the next index increasing the fee's from this point
//     const currentFee = fees[index];
//     recurse(index + 1, currentFee + fee);
//     recurse(index + 2, currentFee + fee);
//     recurse(index + 3, currentFee + fee);
//   }
//   recurse(0, 0);

//   return min;
// };

// // using Memo, now this returns 0(N) as we are only solving the problem once
// const findMinFee = function (fees) {
//   // Fee: {1,2,5,2,1,2}
//   const cache = [];

//   // while recursing populate the cache
//   function recurse(index) {
//     if (index >= fees.length) {
//       return 0;
//     }

//     if (!cache[index]) {
//       const currentFee = fees[index];
//       const step1 = recurse(index + 1);
//       const step2 = recurse(index + 2);
//       const step3 = recurse(index + 3);
//       const smallestFee = Math.min(step1, step2, step3);
//       cache[index] = fees[index] + smallestFee;
//     }
//     return cache[index];
//   }

//   return recurse(0);
// };

// using bottom up, creating an array in which we keep the min fee at every point
const findMinFee = function (fees) {
  const cache = new Array(fees.length + 1).fill(0);
  cache[0] = 0;
  cache[1] = fees[0];
  cache[2] = fees[0];

  for (let i = 2; i < fees.length; i++) {
    cache[i + 1] = Math.min(
      fees[i] + cache[i],
      fees[i - 1] + cache[i - 1],
      fees[i - 2] - cache[i - 2]
    );
  }

  return cache[fees.length];
};

console.log(`Minimum fee needed: ---> ${findMinFee([1, 2, 5, 2, 1, 2])}`); // 3
console.log(`Minimum fee needed: ---> ${findMinFee([2, 3, 4, 5])}`); // 5
