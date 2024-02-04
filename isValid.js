/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const map1 = new Map();
  map1.set("}", "{");
  map1.set("]", "[");
  map1.set(")", "(");
  for (let c in s) {
    if (map1.has(s[c])) {
      if (stack && stack[stack.length - 1] === map1.get(s[c])) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[c]);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
