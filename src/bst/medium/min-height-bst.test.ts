import { inOrderTraverse } from "./bst-traversal.test";

/*
Use a binary search approach to keep inserting the middles out of each side, that way we can always guarantee that the array inserts left and right from this point.

Examples:
- needs to work with an array with no elements
- with one element
- a normal sorted array
- array with two elements
*/
export function minHeightBst(array: number[]) {
  function recurse(start: number, end: number) {
    if (start > end) return null;
    const mid = Math.floor((end + start) / 2);
    const newNode = new BST(array[mid]);
    newNode.left = recurse(start, mid - 1);
    newNode.right = recurse(mid + 1, end);
    return newNode;
  }
  return recurse(0, array.length - 1);
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

describe("minimum height BST", () => {
  test("should return a BST with the min possible height", () => {
    const minHeight = minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]);
    const iot = inOrderTraverse(minHeight, []);
    expect(iot).toEqual([1, 2, 5, 7, 10, 13, 14, 15, 22]);
  });
});
