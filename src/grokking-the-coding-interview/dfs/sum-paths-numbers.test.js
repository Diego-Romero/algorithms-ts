/*
Problem Statement#
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) time as we have to go trough all the nodes
// O(N) space as we are storing all the nodes in a numbers array
const find_sum_of_path_numbers = function (root) {
  // need to go to every leaf node, appending the current value to a string, once we reach the leaf, add it to a array of strings, then sum it
  let numbers = []; // create an array of strings here

  function traverse(node, string) {
    if (node === null) return;
    const newString = string + node.value;
    if (node.left === null && node.right === null) {
      numbers.push(newString);
    } else {
      traverse(node.left, newString);
      traverse(node.right, newString);
    }
  }
  traverse(root, "");
  console.log(numbers);

  return numbers.reduce((prev, current) => prev + parseInt(current), 0);
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
