/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 首先，高位数存放于数组头部，因此需要考虑首位溢出的情况。
// 从最后一位开始循环，每位加1，如果相加后的值大于10，则进位added = 1;
// 数组向前一位
// 如果不需要进位，则added = 0,循环停止。
var plusOne = function(digits) {
    var added = 1;
    let index = digits.length - 1;
    while(added !==0 && index >= 0) {
      added = Math.floor((digits[index] + 1) / 10);
      digits[index] = (digits[index] + 1) % 10;
      index--;
    }
    if(added) {
      digits.unshift(1)
    }
    return digits;
};

// @lc code=end

