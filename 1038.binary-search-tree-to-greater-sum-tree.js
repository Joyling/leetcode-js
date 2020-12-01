/*
 * @lc app=leetcode id=1038 lang=javascript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
 */


// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  var param = {
    sum: 0
  }
    traverse(root, param)
    return root;
};
var traverse = function(root, param) {
  if(root === null) return;
  traverse(root.right, param);
  param.sum += root.val;
  root.val = param.sum;
  traverse(root.left, param);
}
// @lc code=end

