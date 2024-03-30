/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let morseArr = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let ccode = "a".charCodeAt(0);
  let map = new Map();
  let ret = [];
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(ccode), morseArr[i]);
    ccode++;
  }
  for (let i = 0; i < words.length; i++) {
    // console.log(words[i].length)
    let temp = "";
    for (let j = 0; j < words[i].length; j++) {
      temp += map.get(words[i][j]);
    }
    ret.push(temp);
  }
  let set = new Set(ret);
  // console.log(set)
  return set.size;
};
