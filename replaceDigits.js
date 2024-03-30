/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].charCodeAt(0) >= "0".charCodeAt(0) &&
      s[i].charCodeAt(0) <= "9".charCodeAt(0)
    ) {
      ret += String.fromCharCode(s[i - 1].charCodeAt(0) + Number(s[i]));
      // console.log(s[i])
    } else {
      ret += s[i];
    }
  }
  return ret;
};
