/**
 * find the target node that is the closest value to it in a valid BST
 * a valid BST is considered a tree that has all the nodes to its left be less than its value, and all the nodes to its right
 * be equal or greater than the value, this has to be valid for all the nodes in the tree. Alternatively the child nodes can be null.
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

// solution traversing the whole tree in O(N)
// export function findClosestValueInBst(tree: BST, target: number): number {
//   if (tree === null) return -1;
//   let closest = [tree.value, Math.abs(tree.value - target)]

//   function traverseTree(node: BST | null) {
//     if (node === null) return;
//     traverseTree(node.left);
//     const calc = Math.abs(node.value - target)
//     if (closest[1] > calc) closest = [node.value, calc]
//     traverseTree(node.right)
//   }
//   traverseTree(tree)

//   return closest[0];
// }
export function findClosestValueInBst(tree: BST, target: number): number {
  let result = [tree.value, Math.abs(tree.value - target)];

  function traverse(node: BST | null) {
    if (node === null) return;
    // if the target is smaller go left, else right
    const currentDif = Math.abs(node.value - target);
    if (currentDif < result[1]) result = [node.value, currentDif] // record diff if is smaller
    if (target === node.value) result = [node.value, currentDif] 
    else if (target < node.value) traverse(node.left)
    else traverse(node.right)
  }
  traverse(tree)

  return result[0]
}

describe("find-closest-value", () => {
  const head = new BST(10)
  head.left = new BST(5)
  head.right = new BST(15)

  head.left.left = new BST(3)
  head.left.right = new BST(6)
  head.right.left = new BST(11)
  head.right.right = new BST(20)

  test("should return the correct node closest to the target", () => {
      expect(findClosestValueInBst(head, 12)).toBe(11)
  });
  test("should return the correct node closest to the target if a same number is provided", () => {
      expect(findClosestValueInBst(head, 20)).toBe(20)
  });
});
