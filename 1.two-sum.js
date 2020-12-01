1/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map = {};
   ret = [];
   for(let i = 0; i < nums.length; i++) {
     if(map[nums[i]]!==undefined) {
       ret = [map[nums[i]],i]
       break;
     }else {
       map[target - nums[i]] = i;
     }
   } 
   return ret;
};
// @lc code=end

