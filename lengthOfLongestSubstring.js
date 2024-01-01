/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let longest = 0;
  var charSet = new Set();
  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l += 1;
    }
    charSet.add(s[r]);
    // console.log(charSet)
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
};
