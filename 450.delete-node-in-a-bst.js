/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if(root === null) return null;
  if(key === root.val) {
    if(root.left === null) return root.right;
    if(root.right === null) return root.left;
    var min = findMin(root.right);
    root.val = min.val;
    root.right = deleteNode(root.right, min.val);
  } else if(key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if(key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  return root;
  function findMin(root) {
    var pointer = root;
    while(pointer.left) {
      pointer = pointer.left;
    }
    return pointer
  }
};
// @lc code=end

