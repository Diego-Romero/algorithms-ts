// This is the class of the input root.
// Do not edit it.
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

export function branchSums(root: BinaryTree): number[] {
  const result: number[] = [];
  let sum = 0;
  function iterate(node: BinaryTree) {
    // when reached a bottom, push into results array
    if (node.left === null && node.right === null) {
      result.push(sum + node.value); // push the current sum plus the value of the bottom of the branch node
      return;
    }
    sum += node.value;
    if (node.left !== null) iterate(node.left);
    if (node.right !== null) iterate(node.right);
    sum -= node.value;
  }
  iterate(root);
  return result;
}
