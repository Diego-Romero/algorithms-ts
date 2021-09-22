/*
If we have 5 marbles and we choose 3
N = 5
K = 3

we can follow the recursive formula to solve it 

N! / (N - K)! * K!
*/

// function choose(n, k) {
//   if (k === 0) return 1;
//   return choose(n - 1, k - 1) + choose(n - 1, k);
// }

// recursive formula that works
function choose(n, k) {
  if (k === 0) return 1;
  return (n * choose(n - 1, k - 1)) / k;
}

console.log(choose(10, 3));
