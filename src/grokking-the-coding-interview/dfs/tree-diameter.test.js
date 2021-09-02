/*
Tree Diameter (medium) ##
Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

Note: You can always assume that there are at least two leaf nodes in the given tree.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  // O(N) time, as I have to check all the nodes
  // O(N) space, as in the worse case scenario, the tree looks like a linked list
  find_diameter(root) {
    let diameter = 0;

    // traverse the tree, returning the longest subtree + 1
    function traverse(node) {
      // should return a number
      if (node === null) return 0;
      const leftValue = traverse(node.left);
      const rightValue = traverse(node.right);

      // see if the current diameter is the largest one
      diameter = Math.max(diameter, leftValue + rightValue + 1);

      let currentMax = Math.max(leftValue, rightValue) + 1;
      return currentMax;
    }

    traverse(root);

    return diameter;
  }
}

var treeDiameter = new TreeDiameter();
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`); // 5
root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`); // 7, there is a smallest subtree down the line
