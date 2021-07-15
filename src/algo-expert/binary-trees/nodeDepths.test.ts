export function nodeDepths(root: BinaryTree): number {
  let counter = 0,
    queue: BinaryTree[] = [root],
    level = -1;
  while (queue.length !== 0) {
    level++;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      counter += level;
      if (node!.left !== null) queue.push(node!.left);
      if (node!.right !== null) queue.push(node!.right);
    }
  }

  return counter;
}

// This is the class of the input binary tree.
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
