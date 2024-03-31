/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let ccode = "a".charCodeAt(0);
  let cmap = new Map();
  let var1 = "";
  let var2 = "";
  let res = "";
  for (let i = 0; i <= 9; i++) {
    cmap.set(String.fromCharCode(ccode), i);
    ccode++;
  }
  for (let i in firstWord) {
    var1 += cmap.get(firstWord[i]);
  }
  for (let i in secondWord) {
    var2 += cmap.get(secondWord[i]);
  }
  for (let i in targetWord) {
    res += cmap.get(targetWord[i]);
  }
  console.log(Number(var1), Number(var2), Number(res));
  return Number(var1) + Number(var2) === Number(res);
};
