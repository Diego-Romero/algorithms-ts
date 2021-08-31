class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) time as we need to traverse all the nodes in the Tree
// O(N) space, as it can happen that we have all the nodes in the queue at the same time
const traverse = function (root) {
  result = [];
  const queue = [root];
  while (queue.length > 0) {
    const size = queue.length;
    const current = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      // console.log(node);
      current.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(current);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
