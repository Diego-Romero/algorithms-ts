/**
 * The distance between a node in a BT and the root is called the node's depth
 * Write a function that takes in a binary tree and returns the sum of its node's depths
 */

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

// solution using BFS
// export function nodeDepths(root: BinaryTree): number {
//   let counter = 0, queue: BinaryTree[] = [root], level = - 1;
//   while (queue.length !== 0) {
//     console.log('starting round queue', queue.map(n => n.value), 'level ', level, 'counter: ', counter)
//     level++;
//     const length = queue.length;
//     for (let i = 0; i < length; i++) {
//       const node = queue.shift()
//       counter += level;
//       if (node!.left !== null) queue.push(node!.left)
//       if (node!.right !== null) queue.push(node!.right)
//     }
//   }

//   return counter;
// }

// solution using recursion
export function nodeDepths(root: BinaryTree): number {
  function recurse(node: BinaryTree | null, sum: number): number {
    if (node === null) return 0;
    return sum + recurse(node.left, sum + 1) + recurse(node.right, sum + 1)
  }

  return recurse(root, 0)
}


describe("node depths", () => {
  const head = new BinaryTree(1);
  head.left = new BinaryTree(2);
  head.right = new BinaryTree(3);
  head.left.left = new BinaryTree(4);
  head.left.right = new BinaryTree(5);
  head.right.left = new BinaryTree(6);
  head.right.right = new BinaryTree(7);
  head.left.left.left = new BinaryTree(8);
  head.left.left.right = new BinaryTree(9);

  test("should return the sum of all tree branches", () => {
    expect(nodeDepths(head)).toEqual(16);
  });
});
