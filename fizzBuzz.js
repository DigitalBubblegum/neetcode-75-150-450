/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let ret = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      ret.push("FizzBuzz");
    } else if ((i + 1) % 3 === 0) {
      ret.push("Fizz");
    } else if ((i + 1) % 5 === 0) {
      ret.push("Buzz");
    } else {
      ret.push((i + 1).toString());
    }
  }
  return ret;
};
