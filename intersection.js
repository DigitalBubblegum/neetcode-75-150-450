/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = Array.from(new Set(nums2));
  let ret = [];
  for (let i = 0; i < nums2.length; i++) {
    if (nums1.has(nums2[i])) {
      ret.push(nums2[i]);
    }
  }
  return ret;
};
