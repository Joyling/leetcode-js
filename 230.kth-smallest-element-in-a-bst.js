/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
  var rank = 0;
  var res = 0;
  traverse(root,k);
  return res;
  function traverse(root,k) {
    if(root === null) return;
    traverse(root.left, k);
    rank++;
    if(rank === k) {
      res = root.val;
      return;
    }
    traverse(root.right, k);
  }
};


// @lc code=end

