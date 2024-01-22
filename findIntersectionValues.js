/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  let c1 = 0;
  let c2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (s2.has(nums1[i])) {
      c1 += 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (s1.has(nums2[i])) {
      c2 += 1;
    }
  }
  return [c1, c2];
};
