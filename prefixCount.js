/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let prefCount = pref.length;
  let count = 0;
  for (i in words) {
    if (words[i].slice(0, prefCount) === pref) {
      count++;
    }
  }
  return count;
};
