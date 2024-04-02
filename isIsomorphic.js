/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let smap = new Map();
  let tmap = new Map();
  for (let i in s) {
    smap.set(s[i], t[i]);
    tmap.set(t[i], s[i]);
  }
  let compString = "";
  let compString2 = "";
  for (let i in s) {
    compString += smap.get(s[i]);
  }
  for (let i in t) {
    compString2 += tmap.get(t[i]);
  }
  return compString === t && compString2 === s;
};
