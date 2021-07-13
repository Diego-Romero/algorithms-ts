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

export function inOrderTraversal(tree: BST) {
  let result: string = "";

  function helper(tree: BST | null) {
    if (tree !== null) {
      helper(tree.left);
      result += tree.value.toString() + ", ";
      helper(tree.right);
    }
  }
  helper(tree);
  return result;
}

describe("in order traversal", () => {
  const head = new BST(10);
  head.left = new BST(5);
  head.left.left = new BST(3);
  head.left.left.left = new BST(2);
  head.left.left.right = new BST(4);
  head.right = new BST(20);
  head.right.left = new BST(15);
  head.right.right = new BST(35);
  test("should print the in order traversal of the tree", () => {
    const result = inOrderTraversal(head);
    console.log(result);
  });
});
