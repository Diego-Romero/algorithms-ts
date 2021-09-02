/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {

}

function isValidBST(root: TreeNode | null, min: number =  -Infinity, max: number =  Infinity): boolean {
  // need to recursively know what is the max and min allow values for each side
  // if going left, the max allowed value is this current node
  // if going right, the min allowed value is this current node
  console.log('testing')
  return false
};