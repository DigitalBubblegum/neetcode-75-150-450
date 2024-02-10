/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return res.toString(2);
};
