/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let ret = [];
  for (let i in index) {
    ret.splice(index[i], 0, nums[i]);
  }
  return ret;
};
