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

/**
Questions:
- The values at both sides can be the same value as the current value.
- would a single node at the top be considered valid? yes
- A nested node could be down that makes the whole tree not a valid BST

Examples:
- Single node
- simple example with an obvious error
- A quite nested example where down under there are values which are invalid because they are bigger or smaller than a node at the top

Approach:
- We would have to recursively keep going down. checking the values that a value can be
- If we are going left, the max the value can be is the top node
- If we are going right the min value a node can be is the top node

*/
export function validateBst(tree: BST) {
  function recurse(node: BST | null, min: number, max: number) {
    if (node === null) return true;
    if (node.value < min || node.value > max) return false; // need to check this node exceeds any of the previously set values
    const left = recurse(node.left, min, node.value);
    const right = recurse(node.right, node.value, max);
    if (!left || !right) return false;
    return true;
  }
  return recurse(tree, -Infinity, Infinity);
}

describe("validate bst", () => {
  let head: BST;
  beforeEach(() => {
    head = new BST(10);
    head.left = new BST(5);
    head.left.left = new BST(2);
    head.left.right = new BST(5);
    head.left.left.left = new BST(1);
    head.right = new BST(15);
    head.right.left = new BST(13);
    head.right.right = new BST(22);
    head.right.left.right = new BST(14);
  });

  test("should return true when is a valid tree", () => {
    expect(validateBst(head)).toBeTruthy();
  });

  test("should return false when is invalid", () => {
    head.left!.right!.left = new BST(12);
    expect(validateBst(head)).toBeFalsy();
  });
  test("should return false when is invalid 2", () => {
    head.left!.left!.left!.left = new BST(2);
    expect(validateBst(head)).toBeFalsy();
  });

  test("should return false when is invalid 3", () => {
    head.right!.value = 9;
    expect(validateBst(head)).toBeFalsy();
  });
  test("should return false when is invalid 4", () => {
    head.right!.left!.value = 16;
    expect(validateBst(head)).toBeFalsy();
  });
});
