/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    let cSum = numbers[l] + numbers[r];
    if (cSum > target) {
      r -= 1;
    } else if (cSum < target) {
      l += 1;
    } else {
      return [l + 1, r + 1];
    }
  }
};
