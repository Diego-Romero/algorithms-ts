/*
Problem Statement#
Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  const result = [];
  let zig = false;
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const levelNodes = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (zig) levelNodes.push(node.value);
      else levelNodes.unshift(node.value);
      zig = !zig;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelNodes);
  }
  console.log(result);

  return result;
};

var root = new TreeNode(12);

root.left = new TreeNode(7);
root.right = new TreeNode(1);

root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`); // 
