/*
Problem Statement#
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) time | N log N space, as we can have as many as every single path, looking through a path is log N, but this would be N times
const find_paths = function (root, sum) {
  allPaths = []; // need to push the array, as well as the current sum in the recursion stack

  function traverse(node, currentSum, array) {
    if (node === null) return;
    array.push(node.value);
    const newSum = currentSum + node.value;
    if (node.left === null && node.right === null) {
      if (newSum === sum) {
        allPaths.push([...array]); // push a copy
      }
    } else {
      traverse(node.left, newSum, array);
      traverse(node.right, newSum, array);
    }
    array.pop();
  }
  traverse(root, 0, []);

  return allPaths;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`);
