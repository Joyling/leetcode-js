/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */


// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 主函数
var connect = function(root) {
  if(root === null) return null;
  connectTwoNodes(root.left, root.right);
  return root
};

// 定义：输入两个节点，将它俩连接起来
var connectTwoNodes = function(node1, node2) {
  if (node1 == null || node2 == null) {
    return;
}
  /**** 前序遍历位置 ****/
    // 将传入的两个节点连接
  node1.next = node2;
   // 连接相同父节点的两个子节点
  connectTwoNodes(node1.left, node1.right);
  connectTwoNodes(node2.left, node2.right);
  // 连接跨越父节点的两个子节点
  connectTwoNodes(node1.right, node2.left)
}
// @lc code=end

