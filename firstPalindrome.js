/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i in words) {
    if (words[i] === words[i].split("").reverse().join("")) {
      return words[i];
    }
  }
  return "";
};
