/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let s = num ** 0.5;
  return s % 1 === 0 ? true : false;
};
