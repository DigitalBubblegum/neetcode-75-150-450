/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let l = 0;
  let r = 0;
  let maxSp = Number.NEGATIVE_INFINITY;
  while (l < nums.length) {
    if (r >= nums.length) {
      r = l;
      l++;
    }
    if (Math.abs(nums[l] - nums[r]) <= Math.min(nums[l], nums[r])) {
      maxSp = Math.max(maxSp, nums[l] ^ nums[r]);
    }
    r++;
  }
  return maxSp;
};
