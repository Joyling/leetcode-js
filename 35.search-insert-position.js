/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    var head = 0;
    var tail = len - 1;
    if(len === 0) return 0;
    if(target <= nums[head]) return head;
    if(target === nums[tail]) return tail;
    if(target > nums[tail]) return len;
    while(head <= tail) {
      let middle = Math.floor((head + tail) / 2);
      if(target === nums[middle]) return middle;
      if(target > nums[middle]) {
        head = middle + 1;
      }else {
        tail = middle - 1;
      }
    }
    ;
    return head;
};
// @lc code=end

