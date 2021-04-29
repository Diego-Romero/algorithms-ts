/**
 * Write a BST class, that supports: insert, remove (you can't remove values from a single node tree) and contains.
 * in a BST is only valid if its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or null
 */
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  inOrderTraversal(): number[] {
    const result: number[] = [];
    function traverse(node: BST | null) {
      if (node === null) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(this);
    console.log("in order traversal:", result);
    return result;
  }

  insert(value: number): BST {
    function traverse(node: BST) {
      if (value < node.value) {
        if (node.left === null) node.left = new BST(value);
        else traverse(node.left);
      } else {
        // value >= node.value
        if (node.right === null) node.right = new BST(value);
        else traverse(node.right);
      }
    }
    traverse(this);
    return this;
  }

  contains(value: number): boolean {
    function traverse(node: BST | null): boolean {
      if (node === null) return false;
      if (node.value === value) return true;
      if (value > node.value) return traverse(node.right);
      else return traverse(node.left);
    }
    return traverse(this);
  }

  remove(value: number): BST { // todo: need to finish with removal
    if (value === this.value) {
      // in case we want to remove the head, the left node takes over, otherwise the right, if the head is a single node, it can't remove it.
      const leftVal = this.left,
        rightVal = this.right;
      if (leftVal === null && rightVal === null) return this;
      else if (leftVal !== null) {
        this.value = this.left!.value;
        this.left = this.left!.left;
      } else {
        this.value = this.right!.value;
        this.right = this.right!.right;
      }
    }
    // else we know the node is not the head and we need to traverse
    else {
      traverse(this);
    }

    function traverse(node: BST) {
      if (value < node.value) { // we check left
        if (node.left === null) return; // we can't remove a node that isn't there
        else if (node.left.value === value)  { // if we found it and is the node to the left we need to replace it with its right one if it has, else with its left one
          if (node.left.left === null && node.left.right === null) { // if we are trying to remove a leaf
            node.left = null;
            return;
          }
          else if (node.left.right !== null) { // node.left becomes its right
            node.left = node.left.right
          }
        }
      }
    }
    return this;
  }
}
describe("construction of BST", () => {
  let head: BST;
  function createTree(): BST {
    const head = new BST(20);
    head.insert(10);
    head.insert(30);
    // more complex example
    head.insert(5);
    head.insert(5);
    head.insert(1);
    head.insert(6);
    head.insert(9);

    return head;
  }
  beforeEach(() => {
    head = createTree();
  });
  test("should insert in the right places", () => {
    expect(head.inOrderTraversal()).toEqual([1, 5, 5, 6, 9, 10, 20, 30]);
  });
  test("should return false for the nodes it does not contain", () => {
    expect(head.contains(19)).toBeFalsy();
    expect(head.contains(11)).toBeFalsy();
    expect(head.contains(31)).toBeFalsy();
  });
  test("should return true for the nodes it contains", () => {
    expect(head.contains(20)).toBeTruthy();
    expect(head.contains(9)).toBeTruthy();
    expect(head.contains(30)).toBeTruthy();
  });
  test("should be able to delete the head from the tree", () => {
    const singleHead = new BST(10);
    singleHead.remove(10);
    expect(singleHead.value).toEqual(10);
    expect(singleHead.left).toEqual(null);
    expect(singleHead.right).toEqual(null);
    head.remove(20);
    expect(head.inOrderTraversal()).toEqual([1, 5, 5, 6, 9, 10, 30]);
    // should also remove the right one when there is only 2 nodes
    const newHead = new BST(10);
    newHead.insert(20);
    newHead.remove(10);
    expect(newHead.value).toEqual(20);
  });
  test("should delete nodes in the middle as well", () => {
    head.insert(11)
    head.remove(10);
    expect(head.inOrderTraversal()).toEqual([1, 5, 5, 6, 9, 20, 30]);
  });
});
