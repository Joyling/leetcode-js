/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;
    let ret = 0;
    let y = x;
    while(y > 0) {
        ret = ret * 10 + y % 10;
        y = parseInt(y / 10);
    }
    return x === ret;
};
// @lc code=end

