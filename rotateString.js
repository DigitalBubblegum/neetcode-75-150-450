/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let len = s.length - 1;
  let m = s.split("");
  while (len > -1) {
    let temp = m.shift();
    m.push(temp);
    if (m.join("") === goal) {
      return true;
    }
    len -= 1;
  }
  return false;
};
