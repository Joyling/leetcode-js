/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var index = -1; 
    while(index + needle.length < haystack.length) {
      index++;
      if(haystack.substring(index, index+needle.length) === needle) {
        return index;
        break;
      }
    }
    return -1;
};
// @lc code=end

