/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let x = Math.log(n) / Math.log(4);
  console.log(x);
  if (x % 1 === 0) {
    return true;
  }
  return false;
};
