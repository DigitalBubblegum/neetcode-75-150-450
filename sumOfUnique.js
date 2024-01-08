/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let hmap = new Map();
  for (let n in nums) {
    if (hmap.has(nums[n])) {
      hmap.set(nums[n], hmap.get(nums[n]) + 1);
    } else {
      hmap.set(nums[n], 1);
    }
  }
  // console.log(hmap)
  let adder = 0;
  hmap.forEach((values, keys) => {
    if (values > 1 === false) {
      adder += keys;
    }
  });
  return adder;
};
