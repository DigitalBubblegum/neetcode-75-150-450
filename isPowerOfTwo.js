/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let x = Math.log2(n);
  if (x % 1 === 0) {
    return true;
  }
  return false;
};
