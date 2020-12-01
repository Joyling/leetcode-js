/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 */

const { null } = require("check-types");

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(root === null) return;
  flatten(root.left);
  flatten(root.right);
  var right = root.right;
  var left = root.left;
  root.left = null;
  root.right = left;
  var pointer = root;
  while(pointer.right !== null) {
    pointer = pointer.right;
  }
  pointer.right = right;
};
// @lc code=end

