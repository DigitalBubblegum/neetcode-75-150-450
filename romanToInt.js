/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanInt = new Map();
  let res = 0;
  romanInt.set("I", 1);
  romanInt.set("V", 5);
  romanInt.set("X", 10);
  romanInt.set("L", 50);
  romanInt.set("C", 100);
  romanInt.set("D", 500);
  romanInt.set("M", 1000);
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanInt.get(s[i]) < romanInt.get(s[i + 1])) {
      res -= romanInt.get(s[i]);
    } else {
      res += romanInt.get(s[i]);
    }
  }
  return res;
};
