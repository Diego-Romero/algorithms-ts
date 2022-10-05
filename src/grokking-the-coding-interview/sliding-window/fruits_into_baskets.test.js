/*
Problem Statement#
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

*/

/**
 * This follows the same pattern as the moving window, where we can move a pointer from the left and right
 * with the aim of having a O(N) runtime and O(1) space
 */
const fruits_into_baskets = function (fruits) {
  const map = {};
  let start = 0,
    unique = 0,
    max = 0;

  for (let end = 0; end < fruits.length; end++) {
    const endChar = fruits[end];
    if (!map[endChar]) {
      map[endChar] = 0;
      unique++;
    }

    if (unique > 2) {
      // remove from the left
      const startChar = map[start];
      map[startChar] -= 1;
      if (map[startChar] === 0) {
        unique--;
        delete map[startChar];
      }
      start++;
    }

    max = Math.max(max, end - start + 1);
  }

  return max;
};
