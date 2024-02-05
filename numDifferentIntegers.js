/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  word = word.split(/[a-z]/);
  console.log(word);
  let ret = [];
  for (let i in word) {
    if (word[i] !== "") {
      ret.push(BigInt(word[i]));
    }
  }
  console.log(ret);
  return Array.from(new Set(ret)).length;
};
