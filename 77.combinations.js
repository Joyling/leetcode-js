/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    if (k <= 0 || n <= 0) return res;
    backtrack(n,k,1,[])
    return res;
    function backtrack(n,k,start,track) {
      if(k === track.length) {
        res.push(track.slice())
        return;
      }
      for(var i = start; i <= n; i++) {
        track.push(i);
        backtrack(n, k, i + 1, track);
        track.pop();
      }
    }
};
// @lc code=end

