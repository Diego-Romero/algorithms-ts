/**
 * Write a function that takes a BST and a positive integer k, and returns the kth largest integer contained in the BST.
 * You can assume that there will only be integer values in the BST and that k is less than or equal to the number of nodes in the tree.
 */

import { minHeightBst } from "./min-height-bst.test";

// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findKthLargestValueInBst(tree: BST, k: number) {
  const iot: number[] = [];
  function traverse(node: BST | null) {
    if (node === null) return;
    traverse(node.left);
    iot.push(node.value);
    traverse(node.right);
  }
  traverse(tree);
  return iot[iot.length - k]
}

describe("find kth largest value in BST", () => {
  test("should return the kth largest element", () => {
    const tree = minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]);
    expect(findKthLargestValueInBst(tree as BST, 3)).toEqual(14);
  });
});
