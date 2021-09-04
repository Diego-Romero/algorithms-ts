/*
Examples with Fibonacci using different approaches
*/

function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

// top down DP is done using memoization

function topDownFib(n, cache = { 0: 0, 1: 1 }) {
  if (n in cache) return cache[n];

  cache[n] = topDownFib(n - 1) + topDownFib(n - 2);
  return cache[n];
}

console.log(topDownFib(30));


// bottom up with tabulation typically involves filling up a N size table,
// as opposed to top down, in which we solve the problem once and the save the result,
// here we don't actually recurse, rather we save the results in a table, this is called tabulation
function bottomUpFib(n) {
  if (n <= 1) return 1;
  let a = 1,
    b = 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return a + b;
}

console.log(bottomUpFib(1000));
