/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      ret = ret.split("").reverse().join("");
    } else {
      ret += s[i];
    }
  }
  return ret;
};
