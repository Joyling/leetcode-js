/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

const { reverse } = require("core-js/fn/array");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var successor = null;
  
  // base case
  if (m == 1) {
    return reverseN(head, n);
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;

  function reverseN(head, n) {
    if(n === 1) {
      successor = head.next;
      return head;
    }
    var last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = successor;
    return last;
  }
};
// @lc code=end

