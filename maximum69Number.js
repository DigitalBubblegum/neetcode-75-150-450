/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = num.toString().split("");
  for (i in num) {
    if (num[i] === "6") {
      num[i] = "9";
      break;
    }
  }
  num = Number.parseInt(num.join(""));
  return num;
};
