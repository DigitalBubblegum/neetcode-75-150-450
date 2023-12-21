/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const table = new Map();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let numtofind = target - nums[i];
    if (!table.has(numtofind)) {
      table.set(nums[i], i);
    } else {
      return [table.get(numtofind), i];
    }
  }
};
