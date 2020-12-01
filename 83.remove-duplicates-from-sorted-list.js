/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
// var deleteDuplicates = function(head) {
//   if(head === null) return head
//   var pre = head;
//   var current = head.next;
//   while(current) {
//     if(pre.val === current.val) {
//       pre.next = current.next;
//     }else {
//       pre = current;
//     }
//     current = current.next;
//   }
//   return head;
// };
var deleteDuplicates = function(head) {
  if(head === null || head.next ===null) return head;
  var cur = head;

  while(cur.next !== null){
      // 如果目前Node的值与下一个相同，跳过下一个
      if(cur.val == cur.next.val){
          cur.next = cur.next.next;
      } else {
          cur = cur.next;
      }
  }
  return head;
};
// @lc code=end

