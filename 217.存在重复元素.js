/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //   解法1: 88ms 50.89% 29.69%
  //   const temp = new Set(nums);
  //   return Array.from(temp).length !== nums.length;
  //
  //   解法2: 80ms 70.58% 16.42%
  const map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      return true;
    }
    map.set(i);
  }
  return false;
};
// @lc code=end
console.log(containsDuplicate([1, 2, 3, 4]));
