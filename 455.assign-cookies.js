/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  if(g.length === 0 || s.length === 0) {
    return 0
  }
  g = g.sort((a, b) => a-b);
  s = s.sort((a, b) => a-b);
  var i = 0, j = 0;
  var result = 0;
  while(!((i > g.length - 1) || (j > s.length -1))) {
    if(s[j] >= g[i]) {
      i++;
      j++;
      result++;
    }else {
      j++;
    }
  }
  return result;
};
// @lc code=end

