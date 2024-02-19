/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let bucket = word
    .slice(0, word.indexOf(ch) + 1)
    .split("")
    .reverse()
    .join("");
  let handle = word.slice(word.indexOf(ch) + 1, word.length);
  return bucket + handle;
};
