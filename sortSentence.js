/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let hmap = new Map();
  let arr = s.split(" ");
  for (let i in arr) {
    hmap.set(arr[i].slice(-1), arr[i].slice(0, -1));
  }
  let sortKey = Array.from(hmap.keys()).sort((a, b) => a - b);
  let sortArr = [];
  for (let i in sortKey) {
    sortArr[i] = hmap.get(sortKey[i]);
  }
  return sortArr.join(" ");
};
