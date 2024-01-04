/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let hmap = new Map();
  for (let i = 0; i < names.length; i++) {
    hmap.set(heights[i], names[i]);
  }
  // console.log(hmap)
  let harray = Array.from(hmap.keys()).sort((a, b) => b - a);
  for (let i = 0; i < harray.length; i++) {
    harray[i] = hmap.get(harray[i]);
  }
  return harray;
};
