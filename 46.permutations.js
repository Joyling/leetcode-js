/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = [];
    backtrack(nums, []);
    return res;
    function backtrack(nums, track) {
      if(track.length === nums.length) res.push(track.slice());
      for(var i = 0; i < nums.length; i++) {
        if(track.indexOf(nums[i]) === -1) {
          track.push(nums[i])
          backtrack(nums, track);
          track.pop();
        }
      }
    }
};
// @lc code=end

