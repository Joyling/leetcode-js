/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if(head === null) return null;
  var a,b;
  a = b = head;
  for(var i = 0; i < k; i++) {
    if(b === null) return head;
    b = b.next;
  }
  var newHead = reverse(a,b);
  a.next = reverseKGroup(b, k);
  return newHead;

  function reverse(a, b) {
    var pre, cur, nxt;
    pre = null;
    cur = a;
    nxt = a;
    while(cur !== b) {
      nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt;
    }
    return pre;
  }

};
// @lc code=end

