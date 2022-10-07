/*
A BST is said to be valid if 
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

  insert(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number) {
    // Write your code here.
    return false;
  }

  // should not remove anything if there is only one node.
  remove(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}
