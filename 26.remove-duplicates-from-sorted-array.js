/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var count = 0;
  if(nums.length === 1) count = 1;
  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] !== nums[i+1]) {
      ++count;
      nums[count] = nums[i+1];
    }
  }
  return count+1;
};
// @lc code=end

