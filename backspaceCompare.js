/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let res1 = [];
  let res2 = [];
  for (let i in s) {
    if (s[i] === "#") {
      res1.pop();
    }
    if (!(s[i] === "#")) {
      res1.push(s[i]);
    }
  }
  for (let i in t) {
    if (t[i] === "#") {
      res2.pop();
    }
    if (!(t[i] === "#")) {
      res2.push(t[i]);
    }
  }
  console.log(res1, res2);
  return res1.join("") === res2.join("");
};
