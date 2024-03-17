/**
 * @param {string} s
 * @return {boolean}
 */
const validSubPal = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
var validPalindrome = function (s) {
  if (s.length <= 2) return true;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return validSubPal(s, left + 1, right) || validSubPal(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};
