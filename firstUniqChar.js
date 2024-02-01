/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let ret = -1;
  let hmap = new Map();
  s = s.split("");
  for (let i in s) {
    if (hmap.has(s[i])) {
      hmap.set(s[i], hmap.get(s[i]) + 1);
    } else {
      hmap.set(s[i], 1);
    }
  }
  let fnrc_index = Array.from(hmap.values()).findIndex((e) => e === 1);
  if (fnrc_index === -1) {
    return -1;
  }
  let fnrc_value = Array.from(hmap.keys())[fnrc_index];
  ret = s.indexOf(fnrc_value);
  return ret;
};
