/*
Problem Statement#
For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

Example 1:

Input: N=2
Output: (()), ()()
Example 2:

Input: N=3
Output: ((())), (()()), (())(), ()(()), ()()()
*/

// can do recursive solution, O(N * 2 ^ N) time | space
// const generate_valid_parentheses = function (num) {
//   const result = [];

//   function recurse(string, open, close) {
//     if (open === num && close === num) {
//       result.push(string);
//     }
//     // if we can push an open do it
//     if (open < num) recurse(string + "(", open + 1, close);
//     // push a closing bracket if there are
//     if (close < open) recurse(string + ")", open, close + 1);
//   }

//   recurse("(", 1, 0);
//   console.log(result);

//   return result;
// };

// O(N * 2 ^ N) creating two more based on each possibility, this is for time and space
const generate_valid_parentheses = function (n) {
  const queue = [["", 0, 0]];
  const result = [];

  while (queue.length > 0) {
    // I want to keep adding until the queue is empty
    const length = queue.length;
    console.log(queue);
    for (let i = 0; i < length; i++) {
      const [string, open, close] = queue.shift();
      if (open === n && close === n) {
        result.push(string);
        continue;
      }
      // add an open if is less than n
      if (open < n) queue.push([string + "(", open + 1, close]);
      // if close is smaller than open, then add one
      if (close < open) queue.push([string + ")", open, close + 1]);
    }
  }

  return result;
};

// console.log(
//   `All combinations of balanced parentheses are: ${generate_valid_parentheses(
//     2
//   )}`
// );

console.log(
  `All combinations of balanced parentheses are: ${generate_valid_parentheses(
    3
  )}`
);
