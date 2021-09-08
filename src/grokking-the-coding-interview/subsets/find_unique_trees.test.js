/*
Structurally Unique Binary Search Trees (hard) ##
Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?

Example 1:

Input: 2
Output: List containing root nodes of all structurally unique BSTs.
Explanation: Here are the 2 structurally unique BSTs storing all numbers from 1 to 2:
    1   
    2   
    2   
    1   
Example 2:

Input: 3
Output: List containing root nodes of all structurally unique BSTs.
Explanation: Here are the 5 structurally unique BSTs storing all numbers from 1 to 3:
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// without memo, this would run in O(2 ^ N)
// with memoization this runs in O(N ^2) time | space. Since we are iterating through all the numbers
const count_trees = function (n) {
  let cache = { 0: 1, 1: 1 };

  // we need to recursively calculate each side, reducing down the numbers
  function recurse(number) {
    if (number in cache) return cache[number];

    let current = 0;
    let rightTree = number - 1;
    for (let leftTree = 0; leftTree < number; leftTree++) {
      const leftResult = recurse(leftTree);
      const rightResult = recurse(rightTree);
      current += leftResult * rightResult;
      rightTree--;
    }

    cache[number] = current;
    console.log(cache);
    return current;
  }

  return recurse(n);
};

// console.log(`Total trees: ${count_trees(2)}`);
console.log(`Total trees: ${count_trees(3)}`);
