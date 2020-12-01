/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法
var jump = function(nums) {
  var n = nums.length;
  var end = 0;
  var farthest = 0;
  var jumps = 0;
  for (var i = 0; i < n - 1; i++) {
      farthest = Math.max(nums[i] + i, farthest);
      if (end == i) {
          jumps++;
          end = farthest;
      }
  }
  return jumps;
}
// @lc code=end


// 动态规划（会超时）
// var memo = [];
// var jump = function(nums) {
//      var n = nums.length;
//      memo = Array(n).fill(n);
//      return dp(nums, 0);
// };
// function dp(nums, p) {
//   let n = nums.length;
//   // base case
//   if(p >= n - 1) {
//     return 0
//   }
//   if(memo[p] !== n) {
//     return memo[p]
//   }
//   let steps = nums[p];
//   for(let i = 1; i <= steps; i++) {
//     // 子问题
//     let subProblem = dp(nums, p + i);
       // 状态转移
//     memo[p] = Math.min(subProblem + 1, memo[p])
//   }
//   return memo[p]
// }
