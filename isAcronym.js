/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let ws = words[i].split("");
    res.push(ws[0]);
  }
  let comp = res.join("");
  return comp === s;
};
