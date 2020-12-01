/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0;
    let len = nums.length;
    for(var i = 0; i < len - 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
      // 可能碰到了 0，卡住跳不动了
      if (farthest <= i) return false;
    }
    return farthest >= len -1;
};
// @lc code=end

