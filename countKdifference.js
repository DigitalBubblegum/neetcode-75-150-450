/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  // const htable = new Map()
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count += 1;
      }
    }
  }
  return count;
};
