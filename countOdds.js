/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let ret = 0;
  if (low % 2 === 0 && high % 2 === 0) {
    ret = (high - 1 - (low + 1)) / 2;
  } else if (low % 2 === 1 && high % 2 === 1) {
    ret = (high - low) / 2;
  } else if (low % 2 === 1 && high % 2 === 0) {
    ret = (high - 1 - low) / 2;
  } else if (low % 2 === 0 && high % 2 === 1) {
    ret = (high - (low + 1)) / 2;
  }
  return ret + 1;
};
