/*
Problem Statement#
Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N^2) time, as for every node, we can traverse up to all the nodes twice
// O(N) space for the recursive stack, in case we are dealing with a linked list type of tree
const count_paths = function (root, targetSum) {
  let paths = 0;
  // need to have a current sum, as well as start a new sum at every number
  function traverse(node, currentSum) {
    if (node === null) return;

    let sum = currentSum + node.value;
    if (sum === targetSum || node.value === targetSum) paths++;
    // try this increasing the current sum, as well as starting from this point
    traverse(node.left, sum);
    traverse(node.left, 0);
    traverse(node.right, sum);
    traverse(node.right, 0);
  }
  traverse(root, 0);
  return paths;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
