/**
 * Write a function that takes a potentially invalid BST and returns a boolean representing wether is valid.
 */

import { nodeDepths } from "../../binary-trees/easy/node-depths/node-depths.test";

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
    const validLeft = node.left === null ? true : traverse(node.left, min, node.value)
    const validRight = node.right === null ? true : traverse(node.right, node.value, max)
    return validLeft && validRight;
  }
  return traverse(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

describe('validate bst', () => {
  let head: BST;
  beforeEach(() => {
    head = new BST(10)
    head.left = new BST(5)
    head.left.left = new BST(2)
    head.left.right = new BST(5)
    head.left.left.left = new BST(1)
    head.right = new BST(15)
    head.right.left = new BST(13)
    head.right.right = new BST(22)
    head.right.left.right = new BST(14)
  })

  test('should return true when is a valid tree', () => {
    expect(validateBst(head)).toBeTruthy()
  })

  test('should return false when is invalid', () => {
    head.left!.right!.left = new BST(12)
    expect(validateBst(head)).toBeFalsy()
  })
  test('should return false when is invalid 2', () => {
    head.left!.left!.left!.left = new BST(2)
    expect(validateBst(head)).toBeFalsy()
  })
  
  test('should return false when is invalid 3', () => {
    head.right!.value = 9;
    expect(validateBst(head)).toBeFalsy()
  })
  test('should return false when is invalid 4', () => {
    head.right!.left!.value = 16;
    expect(validateBst(head)).toBeFalsy()
  })
  
})
