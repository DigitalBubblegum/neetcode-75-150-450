/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let goat = "ma";
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    goat += "a";
    if (
      sentence[i][0].toLowerCase() == "a" ||
      sentence[i][0].toLowerCase() == "e" ||
      sentence[i][0].toLowerCase() == "i" ||
      sentence[i][0].toLowerCase() == "o" ||
      sentence[i][0].toLowerCase() == "u"
    ) {
      sentence[i] = sentence[i] + goat;
    } else {
      let slicer = sentence[i].slice(1, sentence[i].length);
      let snip = sentence[i][0];
      sentence[i] = slicer + snip + goat;
    }
  }
  sentence = sentence.join(" ");
  return sentence;
};
