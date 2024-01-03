/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let a = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    a[i] = i;
  }
  let setB = new Set(nums);
  for (let i = 0; i < a.length; i++) {
    if (!setB.has(a[i])) {
      return a[i];
    }
  }
};
