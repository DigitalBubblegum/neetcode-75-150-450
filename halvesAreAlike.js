/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vset = new Set(["a", "e", "i", "o", "u"]);
  let l = s.slice(0, s.length / 2).toLowerCase();
  let r = s.slice(s.length / 2, s.length + 1).toLowerCase();
  let lvc = 0;
  let rvc = 0;
  console.log(l, r);
  for (let i in l) {
    if (vset.has(l[i])) {
      lvc++;
    }
  }
  for (let i in r) {
    if (vset.has(r[i])) {
      rvc++;
    }
  }
  return lvc === rvc;
};
