/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let row = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let col = [1, 2, 3, 4, 5, 6, 7, 8];
  let color = true;
  let hmap = new Map();
  for (let i in row) {
    for (let j in col) {
      color = !color;
      hmap.set(row[i] + col[j], color);
    }
    color = !color;
  }
  // console.log(hmap)
  return hmap.get(coordinates);
};
