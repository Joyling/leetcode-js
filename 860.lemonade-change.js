/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var fiveCount = 0;
    var tenCount = 0;
    for(var i = 0; i < bills.length; i++) {
      if(bills[i] === 5) {
        fiveCount++;
      }else if (bills[i] === 10) {
        if(fiveCount) {
          fiveCount--;
          tenCount++;
        }else {
          return false;
        }
      }else {
        // 贪心算法，优先使用10块的
        if(tenCount && fiveCount) {
          tenCount--;
          fiveCount--;
        }else if(fiveCount >= 3) {
          fiveCount = fiveCount - 3;
        }else {
          return false;
        }
      }
    }
    return true;
};
// @lc code=end

