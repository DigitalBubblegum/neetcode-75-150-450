/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let countArr = Array.from(new Set(nums));
  let hashMap = new Map();
  for (let i in nums) {
    if (hashMap.has(nums[i])) {
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
  }
  let max = Math.max(...Array.from(hashMap.values()));
  for (let j in countArr) {
    if (hashMap.get(countArr[j]) === max) {
      return countArr[j];
    }
  }
};
