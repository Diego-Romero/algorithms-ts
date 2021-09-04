/*
Problem Statement#
Given a number ‘n’, implement a method to count how many possible ways there are to express ‘n’ as the sum of 1, 3, or 4.

Example 1:

n : 4
Number of ways = 4
Explanation: Following are the four ways we can express 'n' : {1,1,1,1}, {1,3}, {3,1}, {4} 
Example 2:

n : 5
Number of ways = 6
Explanation: Following are the six ways we can express 'n' : {1,1,1,1,1}, {1,1,3}, {1,3,1}, {3,1,1}, 
{1,4}, {4,1}

*/

// approach in O(3 ^ N)
// const CountWays = function (n) {
//   // similar as counting steps
//   if (n < 0) return 0;
//   if (n === 0) return 1;
//   return CountWays(n - 1) + CountWays(n - 3) + CountWays(n - 4);
// };

// console.log(`Number of ways: ---> ${CountWays(4)}`);
// console.log(`Number of ways: ---> ${CountWays(5)}`);
// console.log(`Number of ways: ---> ${CountWays(6)}`);

// // approach in O(N) time and space
// const CountWays = function (n, cache = { 0: 1 }) {
//   // similar as counting steps
//   if (n < 0) return 0;
//   if (n in cache) return cache[n];

//   cache[n] = CountWays(n - 1) + CountWays(n - 3) + CountWays(n - 4);
//   return cache[n];
// };

// console.log(`Number of ways: ---> ${CountWays(4)}`);
// console.log(`Number of ways: ---> ${CountWays(5)}`);
// console.log(`Number of ways: ---> ${CountWays(6)}`);

// approach in O(N) time and O(N) space
// in this case, we need to build an array with the cached responses
const CountWays = function (n) {
  const cache = new Array(n + 1).fill(0);
  cache[0] = 1;
  cache[1] = 1;
  cache[2] = 1;
  cache[3] = 2;

  for (let i = 4; i <= n; i++) {
    const sum = cache[i - 1] + cache[i - 3] + cache[i - 4];
    // console.log(i, sum);
    cache[i] = sum;
  }

  // console.log(cache);
  return cache[n];
};

console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);
console.log(`Number of ways: ---> ${CountWays(6)}`);
console.log(`Number of ways: ---> ${CountWays(7)}`);
