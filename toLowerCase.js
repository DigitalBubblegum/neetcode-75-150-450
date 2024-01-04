/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let ret = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s.charCodeAt(i) >= "A".charCodeAt(0) &&
      s.charCodeAt(i) <= "Z".charCodeAt(0)
    ) {
      let newChar = String.fromCharCode(s[i].charCodeAt("0") + 32);
      ret.push(newChar);
    } else {
      ret.push(s[i]);
    }
  }
  return ret.join("");
};
