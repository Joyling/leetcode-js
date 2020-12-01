/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

import { assertFunctionTypeParam } from "babel-types";

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs === null || strs.length === 0) return ''  
  let prefix = strs[0];
  for(let i = 1; i < strs.length; i++) {
    for(let j = 0; j < prefix.length; j++ ) {
      if(prefix[j] !== strs[i][j]) {
        prefix = prefix.slice(0,j);
        break
      }
    }
  }
  return prefix;

};
// @lc code=end

