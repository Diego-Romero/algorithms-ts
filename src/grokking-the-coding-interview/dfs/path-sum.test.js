/*
Problem Statement#
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// const has_path = function (node, sum) {
//   // go down all the way to the leaf
//   if (node.left === null && node.right === null) {
//     sum -= node.value;
//     return sum === 0;
//   } else {
//     let left = false,
//       right = false;
//     if (node.left) left = has_path(node.left, sum - node.value);
//     if (node.right) left = has_path(node.right, sum - node.value);
//     if (left || right) return true;
//     return false;
//   }
// };

//  O(N) time | O(H) space, where H is the height of the tree
// correction the worse case scenario is O(N) in case we are given a tree that resembles a linked list
const has_path = function (head, sum) {
  let found = false;
  function traverse(node, currentSum) {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      // if leaf test
      currentSum += node.value;
      if (currentSum === sum) found = true;
    } else {
      traverse(node.left, currentSum + node.value);
      traverse(node.right, currentSum + node.value);
    }
  }

  traverse(head, 0);
  return found;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`); // true
console.log(`Tree has path: ${has_path(root, 16)}`); // false
