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

/*
You should return the node with the closest value to the target

Clarifying questions:
- Can we assume that the tree is a valid BST (meaning that the values on the right are stricly bigger and the left are equal or smaller than the current node)
- What if there are more than 1 closest value? Return either
- Can we find the actual target? Yes you can
- Can the tree be empty or only have one value? Yes, it can ony have one value
- can the target be negative? Yes it can be
- can the tree contain negative values? yes it can
- return the node or the value of the node that is closer to target?

Examples:
- tree with one node
- tree with multiple close targets
- tree with the target present
- Tree that has same value nodes, make sure that we don't get stuck in an infinite recursive call.

Approach:
- Recursively traverse the tree, recording the distance at every point, since its a BST we know which way to traverse, stop when we find null
*/
// O(N) time | space, because of the recursive stack that we are creating.
export function findClosestValueInBst(tree: BST, target: number): number {
  let closestValue = tree.value;
  let closestDistance = Infinity;

  function recurse(node: BST | null) {
    if (node === null) return;
    const currentDistance = getDistance(node.value, target); // 13 - 12 = 1
    if (currentDistance < closestDistance) {
      closestDistance = currentDistance;
      closestValue = node.value;
    }

    if (target > node.value) {
      recurse(node.right);
    } else {
      recurse(node.left);
    }
  }

  recurse(tree);
  return closestValue;
}

function getDistance(x: number, y: number) {
  return Math.abs(x - y);
}
