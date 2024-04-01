/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    let s = n.toString(i);
    if (isPal(s, 0, s.length - 1)) {
      null;
    } else {
      return false;
    }
  }
  return true;
};
const isPal = (s, l, r) => {
  while (l < r) {
    console.log(s[l], s[r]);
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
