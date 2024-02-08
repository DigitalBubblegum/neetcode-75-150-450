/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let s = num.toString().split("");
  let count = 0;
  s.map((i) => {
    if (num % Number.parseInt(i) === 0) {
      count += 1;
    }
  });
  return count;
};
