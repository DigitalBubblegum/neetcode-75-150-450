/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let flag = -1;
  n = n.toString().split("");
  let sum = 0;
  n.map((i) => {
    flag = flag * -1;
    sum += i * flag;
  });
  return sum;
};
