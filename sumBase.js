/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let basek = n.toString(k).split("");
  let sum = 0;
  basek.map((i) => {
    sum += Number.parseInt(i);
  });
  return sum;
};
