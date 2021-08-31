class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) time | space
const traverse = function (root) {
  result = [];
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    let levelNodes = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelNodes.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(levelNodes); // inserts at the start of the array
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
console.log(`Reverse level order traversal: ${traverse(root)}`);
