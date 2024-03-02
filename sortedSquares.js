/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i in nums) {
    nums[i] = nums[i] ** 2;
  }
  return nums.sort((a, b) => a - b);
};
