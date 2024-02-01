/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums = nums.sort((a, b) => b - a);
  // console.log(nums)
  let ret = [];
  let a = 0;
  let b = 0;
  while (nums.length > 0) {
    a = nums[nums.length - 1];
    nums.pop();
    b = nums[nums.length - 1];
    nums.pop();
    ret.push(b);
    ret.push(a);
  }
  return ret;
};
