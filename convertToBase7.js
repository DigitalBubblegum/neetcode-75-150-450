/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let ret = [];
  if (num === 0) {
    return "0";
  }
  while (num !== 0) {
    ret.push(Number.parseInt(num % 7));
    num = Number.parseInt(num / 7);
  }
  let res = 0;
  let step = ret.length - 1;
  ret = ret.reverse();
  ret.map((r) => {
    res += r * Math.pow(10, step);
    step -= 1;
  });
  return res.toString();
};
