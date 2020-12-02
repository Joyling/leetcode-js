/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  var left = getMax(weights);
  var right = getSum(weights) + 1;
  while(left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if(canFinish(weights, D, mid)) {
      right = mid;
    }else {
      left = mid + 1;
    }
  }
  return left;

  function canFinish(weights, D, cap) {
    var i = 0;
    for(var d = 0; d < D; d++) {
      var maxCap = cap;
      while((maxCap -= weights[i]) >= 0) {
        i++;
        if(i === weights.length) {
          return true;
        }
      }
    }
    return false
  }
  function getMax(weights) {
    var max = 0;
    for(var i = 0; i < weights.length; i++) {
      if(weights[i] > max) {
        max = weights[i]
      }
    }
    return max;
  }

  function getSum(weights) {
    var sum = 0;
    for(var i = 0; i < weights.length; i++) {
      sum += weights[i]
    }
    return sum;
  }


};
// @lc code=end

