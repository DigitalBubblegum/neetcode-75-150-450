/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let gc = 0;
  for (let i in nums) {
    if (nums[i] >= k) {
      gc++;
    }
  }
  return nums.length - gc;
};
