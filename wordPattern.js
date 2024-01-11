/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let patset = Array.from(new Set(pattern.split("")));
  let senset = Array.from(new Set(s.split(" ")));
  // console.log(patset,senset)
  let hmap = new Map();
  for (let i = 0; i < patset.length; i++) {
    hmap.set(patset[i], senset[i]);
  }
  let newsen = [];
  for (let i = 0; i < pattern.length; i++) {
    newsen.push(hmap.get(pattern[i]));
  }
  return newsen.join(" ") === s;
};
