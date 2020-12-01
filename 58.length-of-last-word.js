/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//     var arr = s.trim().split(' ');
//     if(arr === null || arr.length === 0) return 0;
//     return arr[arr.length - 1].length;

// };
// 1. 用split将字符串拆分成数组
// 2. 取出数组最后一个元素
// 3. 如果是空格，则返回第二步。如果不是空格，返回字符串长度
var lengthOfLastWord = function(s) {
  var arr = s.split(/\s/);

  if(s.length == 0) return 0;
  if(arr.length == 0) return 0;

  while(arr.length > 0){
      var v = arr.pop();
      if(v.length > 0){
          return v.length;
      }

  }

  return 0;
};
// @lc code=end

