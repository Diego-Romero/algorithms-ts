/**
 * Write a function that inverts a given binary tree, and swaps the nodes from one side to the other.
 */

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

export function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
  if (tree === null) return null;
  const queue: BinaryTree[] = [tree]
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node: BinaryTree = queue.shift()! // 1
      const temp = node.right;
      node.right = node.left;
      node.left = temp;
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
  }
  
  return tree;
}

describe("should invert a binary tree", () => {
  test("should invert a tree", () => {
    const head = new BinaryTree(1);
    head.left = new BinaryTree(2);
    head.right = new BinaryTree(3);
    head.left.left = new BinaryTree(4);
    head.left.right = new BinaryTree(5);
    head.right.left = new BinaryTree(6);
    head.right.right = new BinaryTree(7);

    head.left.left.left = new BinaryTree(8);
    head.left.left.right = new BinaryTree(9);

    console.log(invertBinaryTree(head));
  });
});
