/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0) return null;
    return build(nums, 0, nums.length - 1)

};
var build = function(nums, lo, hi) {
  var index = -1; maxNum = Number.NEGATIVE_INFINITY;
  if(lo > hi) return null;
  for(var i = lo; i <= hi; i++) {
    if(nums[i] > maxNum) {
      maxNum = nums[i];
      index = i;
    }
  }
  let root = new TreeNode(maxNum);
  root.left = build(nums, lo, index - 1);
  root.right = build(nums, index + 1, hi)
  return root
}
// @lc code=end

