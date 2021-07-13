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

// solution in O(log N) runtime and space;
export function findClosestValueInBst(tree: BST, target: number) {
  let currentNode = tree.value;

  function helper(node: BST | null) {
    if (node === null) return;
    const diff = Math.abs(target - node.value);
    if (diff < Math.abs(target - currentNode)) {
      currentNode = node.value;
    }
    if (target < node.value) helper(node.left);
    else if (target > node.value) helper(node.right);
    else return;
  }
  helper(tree);

  return currentNode;
}

// this solution is actually in O(log N) runtime and O(1) space
export function findClosestValueInBstIteratively(tree: BST, target: number) {
  let iterator: BST | null = tree,
    result = tree.value;
  while (iterator !== null) {
    if (Math.abs(iterator.value - target) < Math.abs(result - target))
      result = iterator.value;
    if (target < iterator.value) iterator = iterator.left;
    else if (target > iterator.value) iterator = iterator.right;
    else break;
  }

  return result;
} 

