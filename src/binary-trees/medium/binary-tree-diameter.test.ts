/**
 * Write a function that takes in a Binary Tree and returns its diameter. The diameter of a tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree
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

export function binaryTreeDiameter(tree: BinaryTree) {
  let max = 1;
  function traverse(node: BinaryTree | null): number {
    if (node === null) return 0;
    const left = traverse(node.left);
    const right = traverse(node.right);
    max = Math.max(max, left + right);
    return Math.max(left + 1, right + 1);
  }
  traverse(tree)
  return max;
}
