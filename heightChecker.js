/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let ret = [];
  let expected = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) {
      ret.push(i);
    }
  }
  return ret.length;
};
