/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let s = num.toString().split("");
  while (s.length != 1) {
    let sum = 0;
    for (let i in s) {
      sum += Number.parseInt(s[i]);
    }
    s = sum.toString().split("");
  }
  return s;
};
