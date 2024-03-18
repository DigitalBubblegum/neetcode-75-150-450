//Horrible brute force implementation but it works. 
/**
 * @param {string} s
 * @return {string}
 */

const palChecker = (s, l, r) => {
  // console.log('palchecker here',s,l,r)
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
var longestPalindrome = function (s) {
  // let l = 0
  // let r = 0
  let maxPal = "";
  if (s.length <= 1) return s;
  for (let l = 0; l < s.length; l++) {
    for (r = 0; r < s.length; r++) {
      if (palChecker(s, l, r) && maxPal.length < s.slice(l, r + 1).length) {
        maxPal = s.slice(l, r + 1);
      }
    }
  }
  return maxPal;
};
