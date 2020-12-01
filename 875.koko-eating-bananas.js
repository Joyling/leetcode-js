/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    var left = 1, right = getMax(piles) + 1;
    while(left < right) {
      var mid = left + Math.floor((right - left) / 2);
      if(canFinish(mid, piles, H)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
};
var getMax = function(piles) {
  var max = 0;
  for(var i = 0; i < piles.length; i++) {
    if(piles[i] > max) {
      max = piles[i]
    }
  }
  return max
}
var canFinish = function(speed, piles, H) {
  var time = 0 ;
  for(var i = 0; i < piles.length; i++) {
    time += getTimeOf(speed, piles[i])
  }
  return time <= H
}
var getTimeOf = function(speed, pile) {
  return Math.ceil(pile / speed);
}
// @lc code=end

