/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums = nums.sort();
  let count = nums.length;
  let modded = new Set(nums);
  let ret = [];
  let prev = nums[0];
  for (let i = 1; i < count; i++) {
    if (prev === nums[i]) {
      ret.push(prev);
    } else {
      prev = nums[i];
    }
  }
  for (let i = 1; i <= count; i++) {
    if (!modded.has(i)) {
      ret.push(i);
    }
  }
  return ret;
};
