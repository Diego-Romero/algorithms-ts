/**
 * Write a function that takes in a non empty sorted array of distinct integers, constructs a BST from integers and returns the root of the BST. The function should minimize the height of the BST.
 */

import { inOrderTraverse } from "./bst-traversal.test";


export function minHeightBst(array: number[]) {
  const insertOrder: number[] = [];
  function insertIntoTree(left: number, right: number) {
    if (left > right) return;
    let mid = Math.floor((left + right) / 2);
    // console.log(left, right, mid, array[mid])
    insertOrder.push(array[mid])
    insertIntoTree(left, mid -1)
    insertIntoTree(mid + 1, right)
  }
  insertIntoTree(0, array.length - 1);
  // console.log(insertOrder)
  let head: BST | null = null;
  for (let n of insertOrder) {
    if (head === null) head = new BST(n)
    else {
      head.insert(n)
    }
  }
  return head;
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

describe('minimum height BST', () => {
  test('should return a BST with the min possible height', () => {
      const minHeight = minHeightBst([1,2,5,7,10,13,14,15,22])
      const iot = inOrderTraverse(minHeight, [])
      expect(iot).toEqual([1,2,5,7,10,13,14,15,22])
  })
  
})
