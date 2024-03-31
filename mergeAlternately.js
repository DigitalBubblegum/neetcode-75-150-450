/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let l = 0;
  let r = 0;
  let ret = "";
  while (l < word1.length || r < word2.length) {
    if (l < word1.length) {
      ret += word1[l];
    }
    if (r < word2.length) {
      ret += word2[r];
    }
    l++;
    r++;
  }
  return ret;
};
