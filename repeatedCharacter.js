/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let hmap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!hmap.has(s[i])) {
      hmap.set(s[i], 1);
    } else {
      return s[i];
    }
  }
};
