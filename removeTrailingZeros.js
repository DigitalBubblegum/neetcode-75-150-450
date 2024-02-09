/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  num = num.split("");
  for (let i = num.length - 1; i > -1; i--) {
    if (num[i] === "0") {
      num.pop();
    } else {
      break;
    }
  }
  return num.join("");
};
