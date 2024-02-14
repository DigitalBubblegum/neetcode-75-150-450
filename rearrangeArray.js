/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let pos = [];
  let neg = [];
  let ret = [];
  for (let i in nums) {
    if (nums[i] > 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }
  for (let i = 0; i < pos.length; i++) {
    ret.push(pos[i]);
    ret.push(neg[i]);
  }
  return ret;
};
