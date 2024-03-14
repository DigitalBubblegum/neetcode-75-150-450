/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (0 <= i && i < j && j < nums.length && nums[i] + nums[j] < target) {
        // console.log(i,j,nums[i],nums[j])
        count++;
      }
    }
  }
  return count;
};
