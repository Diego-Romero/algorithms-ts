/**
 * Write a function that determines wether a binary tree is balanced, a tree is unbalanced when any of its subtrees has a disparity of more than 1 level of difference between each other.
 */
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

export function heightBalancedBinaryTree(tree: BinaryTree) {
  let isBalanced = true;

  function traverse(node: BinaryTree | null): number {
    if (node === null) return 0;
    const left = traverse(node.left)
    const right = traverse(node.right)
    if (left > right) {
      if (right + 1 < left) isBalanced = false;
    } else {
      if (left + 1 < right) isBalanced = false;
    }
    return Math.max(left, right) + 1;
  }
  traverse(tree)

  return isBalanced;
}
