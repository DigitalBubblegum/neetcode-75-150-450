/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  words = words.join(separator).split(separator);
  let ret = [];
  for (let i in words) {
    if (words[i].length !== 0) {
      ret.push(words[i]);
    }
  }
  return ret;
};
