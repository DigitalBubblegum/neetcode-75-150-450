/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var b = 0;
  var s = 1;
  var maxPro = 0;
  while (s < prices.length) {
    if (prices[b] < prices[s]) {
      let currPro = prices[s] - prices[b];
      maxPro = Math.max(maxPro, currPro);
    } else {
      b = s;
    }
    s += 1;
  }
  return maxPro;
};
