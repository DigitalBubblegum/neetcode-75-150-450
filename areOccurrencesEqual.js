/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let hmap = new Map();
  s = s.split("");
  // console.log(s)
  for (let i = 0; i < s.length; i++) {
    if (hmap.has(s[i])) {
      hmap.set(s[i], hmap.get(s[i]) + 1);
    } else {
      hmap.set(s[i], 1);
    }
  }
  let chArr = Array.from(hmap.values());
  // console.log(chArr)
  let temp = chArr[0];
  for (let i = 1; i < chArr.length; i++) {
    if (chArr[i] !== temp) {
      return false;
    }
    temp = chArr[i];
  }
  return true;
};
