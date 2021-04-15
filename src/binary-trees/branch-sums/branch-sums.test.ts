/**
 * Write a function that takes a binary tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
 * A branch sum is the sum of al the 5s in a binary tree branch.
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

export function branchSums(root: BinaryTree): number[] {
  const result: number[] = []
  let sum = 0;
  function iterate(node: BinaryTree) {
    // when reached a bottom, push into results array
    if (node.left === null && node.right === null) {
      result.push(sum + node.value) // push the current sum plus the value of the bottom of the branch node
      return;
    }
    sum += node.value;
    if (node.left !== null) iterate(node.left)
    if (node.right !== null) iterate(node.right)
    sum -= node.value
    
  }
  iterate(root)
  return result;
}

describe('binary tree branch sums', () => {
  const head = new BinaryTree(1)
  head.left = new BinaryTree(2)
  head.right = new BinaryTree(3)
  head.left.left = new BinaryTree(4)
  head.left.right = new BinaryTree(5)
  head.right.left = new BinaryTree(6)
  head.right.right = new BinaryTree(7)
  head.left.left.left = new BinaryTree(8)
  head.left.left.right = new BinaryTree(9)
  head.left.right.left = new BinaryTree(10)

  test('should return the sum of all tree branches', () => {
    expect(branchSums(head)).toEqual([15, 16, 18, 10, 11])
  })
  
})
