class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function invertBinaryTree(tree: BinaryTree | null) {
  const helper = (node: BinaryTree | null) => {
    if (node !== null) {
      // swap them
      const temp = node.left;
      node.left = node.right;
      node.right = temp;

      helper(node.left);
      helper(node.right);
    }
  };

  helper(tree);

  return tree;
}
