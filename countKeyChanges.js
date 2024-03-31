/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  s = s.toLowerCase();
  let diff = 0;
  let count = 0;
  let l = 0;
  for (let r = 1; r < s.length; r++) {
    if (s[l] !== s[r]) {
      count++;
    }
    l++;
  }
  return count;
};
