/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  let result=[]
  backtrack(0,[])
  return result

  function backtrack(start,track){
    result.push(track.slice())
    for(let i=start;i<nums.length;i++){
      track.push(nums[i])
      backtrack(i+1,track)
      track.pop()
    }
  }
};
// @lc code=end

