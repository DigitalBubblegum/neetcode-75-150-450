/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((i) => i.reverse().map((j) => (j ? 0 : 1)));
};
