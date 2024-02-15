/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a);
  let sum = nums.reduce((a, c) => a + c, 0);
  let sides = nums.length;
  for (i in nums) {
    if (sides >= 3 && sum - nums[i] > nums[i]) {
      return sum;
    } else {
      sides--;
      sum = sum - nums[i];
    }
  }
  return -1;
};
