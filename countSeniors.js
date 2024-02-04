/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;
  for (let i in details) {
    if (Number.parseInt(details[i].slice(11, 13)) > 60) {
      count += 1;
    }
  }
  return count;
};
