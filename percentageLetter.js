/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let letterCount = 0;
  for (let i in s) {
    if (s[i] === letter) {
      letterCount++;
    }
  }
  return Math.floor((letterCount / s.length) * 100);
};
