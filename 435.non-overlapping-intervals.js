/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
};

var intervalSchedule = function (intervals) {
  if(intervals.length === 0) return 0;
  intervals.sort((a,b) => b[1] - a[1]);
  var x_end = intervals[0][1]
  var count = 1;
  for(var i = 1; i < intervals.length; i++) {
    if(intervals[i][0] )
  }
}
// @lc code=end

