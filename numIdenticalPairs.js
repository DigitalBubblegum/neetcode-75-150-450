/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (i < j && nums[i] === nums[j]) {
        arr.push([i, j]);
      }
    }
  }
  return arr.length;
};
