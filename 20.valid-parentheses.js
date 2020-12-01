/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  // 用栈来实现
  if(s === null || s.length % 2 === 1) return false;
  if(s.length === 0) return true;
  let ret = [s[0]];
  for(let i = 1; i< s.length; i++) {
    ret.push(s[i]);
    if(map[ret[ret.length - 2]] === ret[ret.length - 1]) {
      ret.pop();
      ret.pop();
    } 
  }
  return !!!ret.length;
};

// @lc code=end

