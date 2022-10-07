/**
 * Write three functions that take a BST and an empty array, and puts teh values of the BST into those arrays.
 */

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

export function inOrderTraverse(node: BST | null, array: number[]) {
  if (node === null) return;
  inOrderTraverse(node.left, array);
  array.push(node.value);
  inOrderTraverse(node.right, array);
  return array;
}
export function preOrderTraverse(node: BST | null, array: number[]) {
  if (node === null) return;
  array.push(node.value);
  preOrderTraverse(node.left, array);
  preOrderTraverse(node.right, array);
  return array;
}

export function postOrderTraverse(node: BST | null, array: number[]) {
  if (node === null) return;
  postOrderTraverse(node.left, array);
  postOrderTraverse(node.right, array);
  array.push(node.value);

  return array;
}

describe("bst traversal", () => {
  let head: BST;
  head = new BST(10);
  head.left = new BST(5);
  head.left.left = new BST(2);
  head.left.right = new BST(5);
  head.left.left.left = new BST(1);
  head.right = new BST(15);
  head.right.left = new BST(13);
  head.right.right = new BST(22);
  head.right.left.right = new BST(14);

  test("should return IOT", () => {
    expect(inOrderTraverse(head, [])).toEqual([1, 2, 5, 5, 10, 13, 14, 15, 22]);
  });
  test("should return pre order traversal", () => {
    expect(preOrderTraverse(head, [])).toEqual([
      10,
      5,
      2,
      1,
      5,
      15,
      13,
      14,
      22,
    ]);
  });
  test("should return post order traversal", () => {
    expect(postOrderTraverse(head, [])).toEqual([
      1,
      2,
      5,
      5,
      14,
      13,
      22,
      15,
      10,
    ]);
  });
});
