/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  nums = nums.sort();
  let hmap = new Map();
  let ret = [];
  for (let i = 0; i < nums.length; i++) {
    if (!hmap.has(nums[i])) {
      hmap.set(nums[i], 1);
    } else {
      hmap.set(nums[i], hmap.get(nums[i]) + 1);
    }
  }
  // console.log(hmap)
  const newMap = Array.from(hmap).sort((a, b) => b[1] - a[1]);
  const sortedMap = new Map(newMap);
  // console.log(sortedMap)
  return Array.from(sortedMap.keys()).slice(0, k);
};
