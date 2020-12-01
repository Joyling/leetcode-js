/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [nums[0]];
    let max = dp[0];
    let len = nums.length;
    for(let i = 1; i < len; i++) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
      max = Math.max(dp[i], max);
    }
    return max
};
// @lc code=end

