/**
 * Given a pre-order traversal array, you need to write a function that reconstructs the tree from the state it used to be.
 */

import { preOrderTraverse } from "./bst-traversal.test";

// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  if (preOrderTraversalValues.length === 0) return null;
  function traverse(left: number, right: number): BST | null {
    if (left > right ) return null;
    else {
      const newNode = new BST(preOrderTraversalValues[left])
      console.log(newNode.value, left, right, preOrderTraversalValues)
      // the first larger number from left to right is the right side, everything else is the left side.
      let rightIndex: number = -1;
      for (let i = left + 1; i <= right; i++) {
        if (preOrderTraversalValues[i] > newNode.value) {
          rightIndex = i;
          break;
        }
      }
      rightIndex !== -1 ? newNode.left = traverse(left + 1, rightIndex - 1) : newNode.left = traverse(left + 1, right)
      rightIndex !== -1 ? newNode.right = traverse(rightIndex, right) : newNode.right = null;
      return newNode;
    }
  }
  return traverse( 0, preOrderTraversalValues.length - 1)
}


describe('reconstruct bst', () => {
  test('should reconstruct the tree from pre order traversal', () => {
    const array = [10, 4, 2, 1, 5, 17, 19, 18];
    const result = reconstructBst(array);
    expect(preOrderTraverse(result, [])).toEqual(array)
  })
  
})

