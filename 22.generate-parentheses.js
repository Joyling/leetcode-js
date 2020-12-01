/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 0) {
      return []
    }
    var res = [];
    var track = [];
    backtrack(n,n,track, res);
    function backtrack(left, right, track, res) {
      if(right > left) return
      if(left < 0 || right < 0) return;
      if(left === 0 && right === 0) res.push(track.slice())
    }
};
// @lc code=end

