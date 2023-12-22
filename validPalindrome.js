/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var or = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  var t = or.split("").reverse().join("");
  return or === t ? true : false;
};
