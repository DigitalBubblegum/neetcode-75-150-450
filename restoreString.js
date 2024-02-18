/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let map = new Map();
  let ret = [];
  for (let i in (indices, s)) {
    map.set(indices[i], s[i]);
  }
  indices = indices.sort((a, b) => a - b);
  for (let i in indices) {
    ret.push(map.get(indices[i]));
  }
  return ret.join("");
};
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let map = new Map()
    let ret = []
    for(let i in indices,s){
        map.set(indices[i],s[i])
    }
    indices = indices.sort((a,b)=>a-b)
    for(let i in indices){
        ret.push(map.get(indices[i]))
    }
    return ret.join('')
};