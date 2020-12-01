/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

const { valid } = require("semver");


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
 * @return {boolean}
 */
var isValidBST = function(root) {
  return valid(root, null, null);
  function valid(root, min, max) {
    if(root === null) return true;
    if(min && root.val <= min.val) return false;
    if(max && root.val >= max.val) return false;
    return valid(root.left, min, root) && valid(root.right, root, max);
  }
};                                                                                                     
// @lc code=end

