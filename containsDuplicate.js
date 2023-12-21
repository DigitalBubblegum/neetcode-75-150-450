/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const table = new Map();
  nums.map((num) => {
    if (table.has(num)) {
      return true;
    }
    table.set(num, 1);
  });
  return false;
};
