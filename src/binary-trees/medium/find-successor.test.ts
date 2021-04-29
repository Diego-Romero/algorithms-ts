/**
 * Write a function that returns the next successor node, when traversing a tree in In Order Traversal fashion.
 * 
 */


// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree): BinaryTree | null {
  const inOrderSuccessor: BinaryTree[] = [];
  function traverse(node: BinaryTree | null) {
    if (node === null) return;
    traverse(node.left);
    inOrderSuccessor.push(node)
    traverse(node.right)
  }
  traverse(tree);
  let result: BinaryTree | null = null;
  for (let i = 0; i < inOrderSuccessor.length - 1; i++) {
    const n = inOrderSuccessor[i];
    if (n === node) return inOrderSuccessor[i + 1];
  }
  return result;
}

describe('find successor', () => {
})
