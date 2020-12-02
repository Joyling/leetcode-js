/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  var slow = head;
  var fast =  head;
  if(head === null || head.next === null) return null;
  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      break;
    }
  }
  if(slow !== fast) return null;

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};
// @lc code=end

