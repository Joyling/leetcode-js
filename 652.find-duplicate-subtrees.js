/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
 */

const { subtract } = require("lodash");

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
 * @return {TreeNode[]}
 */

var findDuplicateSubtrees = function (root) {
  var res = [];
  var memo = {};
  traverse(root);
  return res;

  function traverse(root) {
    if(root === null) {
      return '#'
    }
    var left = traverse(root.left);
    var right = traverse(root.right);

    var subTree = left + ',' + right + ',' + root.val;

    memo[subTree] = memo[subTree] || 0;
    var count = memo[subTree];
    if(count === 1) {
      res.push(root)
    }
    memo[subTree]++;

    return subTree;
  }
};


// @lc code=end
