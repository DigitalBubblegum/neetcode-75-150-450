/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let s = n.toString().split("");
  let sum = 0;
  let mul = 1;
  s.map((i) => {
    sum += Number.parseInt(i);
  });
  s.map((j) => {
    mul *= Number.parseInt(j);
  });
  return mul - sum;
};
