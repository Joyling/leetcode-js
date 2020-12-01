/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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
var convertBST = function(root) {
  var sum = 0;
  traverse(root);
  return root;

  function traverse(root) {
    if(root === null) return;
    traverse(root.right);
    sum += root.val;
    root.val = sum;
    traverse(root.left);
  }

};

// @lc code=end

