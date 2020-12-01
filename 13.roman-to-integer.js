/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    let ret = 0;
    
    for(let i=0; i < s.length; i) {
      let cur = map[s[i]];
      let right = map[s[i+1]] || 0;
      if(cur < right) {
        ret = ret + (right - cur)
        i = i+2;
      }else {
        ret = ret +cur;
        i = i+1;
      }
    }
    return ret;
};
// @lc code=end

