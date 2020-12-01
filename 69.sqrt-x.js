/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

import { right } from "inquirer/lib/utils/readline";

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 1;
    let end = x;
    let middle = Math.floor((start + end) / 2);
    while(start < end) {
      if(middle * middle <= x && (middle +1)*(middle +1) > x) return middle;
      if(middle * middle < x )  {
        start = middle + 1;
      }else if (middle * middle > x) {
        end = middle - 1;
      }
      middle = Math.floor((start + end) / 2)
    }
    return middle;
};
// @lc code=end

