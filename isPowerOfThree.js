/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return 3 ** parseInt(Math.log(n) / Math.log(3)) === n;
};
