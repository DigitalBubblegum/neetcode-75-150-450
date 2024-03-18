/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  let res = [];
  if (num1.length > num2.length) {
    let diff = num1.length - num2.length;
    while (diff != 0) {
      num2.push("0");
      diff--;
    }
  }
  if (num1.length < num2.length) {
    let diff = num2.length - num1.length;
    while (diff != 0) {
      num1.push("0");
      diff--;
    }
  }
  let addor = 0;
  for (let i = 0; i < num2.length; i++) {
    let sum = 0;
    sum += Number(num1[i]) + Number(num2[i]) + addor;
    addor = 0;
    if (sum >= 10) {
      sum = sum - 10;
      addor = 1;
    }
    res.push(sum);
    if (i === num2.length - 1 && addor === 1) {
      res.push(addor);
    }
  }
  return res.reverse().join("");
};
