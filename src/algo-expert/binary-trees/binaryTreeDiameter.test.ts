// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function binaryTreeDiameter(tree: BinaryTree) {
  let max = 0;

  const helper = (node: BinaryTree | null): number => {
    if (node === null) return 0;
    else {
      const left = helper(node.left);
      const right = helper(node.right);
      max = Math.max(max, left + right);

      return Math.max(left + 1, right + 1);
    }
  };

  helper(tree);

  return max;
}
