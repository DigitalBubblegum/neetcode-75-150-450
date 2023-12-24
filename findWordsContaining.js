/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const ret = [];
  words.reduce((acc, w) => {
    w.includes(x) ? ret.push(acc) : null;
    return acc + 1;
  }, 0);
  return ret;
};
