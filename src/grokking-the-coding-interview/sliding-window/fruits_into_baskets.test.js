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

// approach in O(N) time | O(1) space
const fruits_into_baskets = function (fruits) {
  // iterate from left to right, adding the count to the right, whenever we have 3 keys, we need to remove from the left, until we can delete a char
  const map = {};
  let max = 0;
  let left = 0;
  for (let right = 0; right < fruits.length; right++) {
    let fruit = fruits[right];
    if (map[fruit]) map[fruit]++;
    else map[fruit] = 1;

    while (Object.keys(map).length > 2) {
      // reduce the keys
      fruit = fruits[left];
      map[fruit]--;
      if (map[fruit] <= 0) delete map[fruit];
      left++;
    }

    max = Math.max(right - left + 1);
  }

  return max;
};
