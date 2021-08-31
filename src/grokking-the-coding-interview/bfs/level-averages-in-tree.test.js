/*
Problem Statement#
Given a binary tree, populate an array to represent the averages of all of its levels.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    let sum = 0,
      count = 0;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      sum += node.value;
      count++;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(sum / count);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
