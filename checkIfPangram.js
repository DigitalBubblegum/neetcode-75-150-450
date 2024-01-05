/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let count = 0;
  let check = new Map();
  let checking = "thequickbrownfoxjumpsoverthelazydog";
  checking
    .split("")
    .sort()
    .map((s) => {
      check.set(s, 1);
    });
  for (let s in sentence) {
    if (check.has(sentence[s])) {
      count += 1;
      check.delete(sentence[s]);
    }
  }
  return count >= 26 ? true : false;
};
