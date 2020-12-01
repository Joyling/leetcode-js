/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var count = 0;  
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};
// @lc code=end

