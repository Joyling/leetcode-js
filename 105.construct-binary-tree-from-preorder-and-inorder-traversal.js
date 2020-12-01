/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};
var build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) {
    return null;
  }
  var rootVal = preorder[preStart];
  var index = 0;
  for (var i = inStart; i <= inEnd; i++) {
    if (inorder[i] == rootVal) {
      index = i;
      break;
    }
  }
  var leftSize = index - inStart;

  var root = new TreeNode(rootVal);

  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    index - 1
  );
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  );
  return root;
};
// @lc code=end
