// This is an input class. Do not edit.
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST) {
  function traverse(node: BST, min: number, max: number): boolean {
    // console.log('comparing', node.value, min, max, node.value < min, node.value > max)
    if (node.value < min) return false;
    if (node.value >= max) return false;
    const validLeft =
      node.left === null ? true : traverse(node.left, min, node.value);
    const validRight =
      node.right === null ? true : traverse(node.right, node.value, max);
    return validLeft && validRight;
  }
  return traverse(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
