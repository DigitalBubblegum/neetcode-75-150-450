/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let l = 0;
  let ret = [];
  for (let r = 1; r < nums.length; r = r + 2) {
    let freq = nums[l];
    let val = nums[r];
    while (freq > 0) {
      ret.push(val);
      freq--;
    }
    l = l + 2;
  }
  return ret;
};
