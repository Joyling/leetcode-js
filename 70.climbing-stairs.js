/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

import { func } from "assert-plus";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// !!!!!time limit exceeded
// var climbStairs = function(n) {
//     if(n === 1) return 1
//     if(n === 2) return 2
//     return climbStairs(n-1) + climbStairs(n-2)
// };
var climbStairs = function(n) {
  var ret = [1, 2];
  if(n === 1) return 1
  if(n === 2) return 2
  for(var i = 2; i < n; i++) {
    ret.push(ret[i-1] + ret[i-2])
  }
  return ret[n - 1];
}
// @lc code=end

