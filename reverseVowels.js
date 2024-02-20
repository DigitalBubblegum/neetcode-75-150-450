/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");
  let vowel = [];
  for (let i in s) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u" ||
      s[i] === "A" ||
      s[i] === "E" ||
      s[i] === "I" ||
      s[i] === "O" ||
      s[i] === "U"
    ) {
      vowel.push(s[i]);
      s[i] = "_";
    }
  }
  vowel = vowel.reverse();
  for (let i in s) {
    if (s[i] === "_") {
      s[i] = vowel.shift();
    }
  }
  return s.join("");
};
