/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 */

const { MatcherList } = require("cssom");

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
 * @return {number}
 */
var countNodes = function(root) {
    if(root === null) return 0;
    var left = root.left;
    var right = root.right;
    var lh = 1;
    var rh = 1;
    while(left) {
      left = left.left;
      lh++;
    }
    while(right) {
      right = right.right;
      rh++;
    }
    if(lh === rh) {
      return Math.pow(2, lh) - 1;
    } else {
      return 1 + countNodes(root.left) + countNodes(root.right);
    }
};
// @lc code=end

