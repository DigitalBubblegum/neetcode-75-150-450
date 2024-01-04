/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  let temp = title.split(" ");
  for (i = 0; i < temp.length; i++) {
    temp[i] = temp[i].toLowerCase();
    if (temp[i].length <= 2 === false) {
      temp[i] = temp[i].split("");
      temp[i][0] = temp[i][0].toUpperCase();
      temp[i] = temp[i].join("");
    }
  }
  return temp.join(" ");
};
