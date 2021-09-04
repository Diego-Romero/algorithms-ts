// very similar to fib, but we need to reach 0 from the bottom
// we need to reduce down in -1, -2, -3 fashion
// recursive function for this will give me O(3^N);
// const count = function (n) {
//   if (n < 0) return 0;
//   if (n === 0) return 1;

//   return count(n - 1) + count(n - 2) + count(n - 3);
// };

// console.log(`Number of ways: ---> ${count(3)}`);
// console.log(`Number of ways: ---> ${count(4)}`);
// console.log(`Number of ways: ---> ${count(5)}`);

// using a top down approach (memo), this should give me O(N) time | space
// const countTopDown = function (n, cache = { 0: 1 }) {
//   if (n < 0) return 0;
//   if (n in cache) return cache[n];

//   const firstStep = countTopDown(n - 1, cache);

//   const secondStep = countTopDown(n - 2, cache);

//   const thirdStep = countTopDown(n - 3, cache);

//   // N will be the result of all this steps
//   const totalCount = firstStep + secondStep + thirdStep;
//   cache[n] = totalCount;
//   return totalCount;
// };

// console.log(`Number of ways: ---> ${countTopDown(3)}`);
// console.log(`Number of ways: ---> ${countTopDown(4)}`);
// console.log(`Number of ways: ---> ${countTopDown(5)}`);

// using bottom up approach with tabulation - here we will effectively do the opposite
// construct an array or use variables to hold the last 3
// this should give us O(n) time | O(1) space
const countBottomUp = function (n) {
  // 4
  if (n < 1) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;

  let first = 1,
    second = 2,
    third = 4;

  for (let i = 4; i < n; i++) {
    // shift all the pointers by one
    const sum = first + second + third;
    let prev = third;
    third = sum;
    let prev2 = second;
    second = prev;
    first = prev2;
  }

  return first + second + third;
};

console.log(`Number of ways: ---> ${countBottomUp(3)}`);
console.log(`Number of ways: ---> ${countBottomUp(4)}`);
console.log(`Number of ways: ---> ${countBottomUp(5)}`);
