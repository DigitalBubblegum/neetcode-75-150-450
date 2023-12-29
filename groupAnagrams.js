/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let temp = strs;
  let hmap = new Map();
  for (let i = 0; i < strs.length; i++) {
    if (!hmap.has(temp[i].split("").sort().join(""))) {
      hmap.set(temp[i].split("").sort().join(""), [strs[i]]);
    } else {
      hmap.get(temp[i].split("").sort().join("")).push(strs[i]);
    }
  }
  return Array.from(hmap.values());
};
