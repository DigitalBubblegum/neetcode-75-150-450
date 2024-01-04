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

///better solution with o(n) time
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const words = title.toLowerCase().split(' ')

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        }
    }

    return words.join(' ')
};
