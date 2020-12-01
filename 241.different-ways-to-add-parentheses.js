/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */

const { parseInt } = require("core-js/fn/number");

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var len = input.length;
    var res = [];
    for(var i = 0; i < len; i++) {
      var char = input[i];
      if(char === '+' || char === '-' || char === '*') {
        var leftstr = input.substring(0, i);
        var rightstr = input.substring(i+1);
        var left = diffWaysToCompute(leftstr);
        var right = diffWaysToCompute(rightstr);
        for(var j = 0; j < left.length; j++) {
          for(var k = 0; k < right.length; k++) {
            var leftNum = parseInt(left[j]);
            var rightNum = parseInt(right[k]);
            if(char === '+') {
              res.push(leftNum + rightNum)
            }else if(char === '-') {
              res.push(leftNum - rightNum)
            }else {
              res.push(leftNum * rightNum)
            }
          }
        }
       
      }
    }
    if(res.length === 0) {
      res.push(input)
    }
    return res;
};
// @lc code=end

