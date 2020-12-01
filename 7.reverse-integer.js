/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let y = Math.abs(x);
  let result = 0;
  while(y > 0) {
    result = result * 10 + y % 10;
    y = parseInt(y / 10);  
  }
  result = x < 0 ? -result : result;
  return result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31) ? 0 : result;
  
};
// @lc code=end

