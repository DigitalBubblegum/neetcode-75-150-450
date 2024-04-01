/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let ret = [];
  ret.push(first);
  for (let i in encoded) {
    ret.push(ret[ret.length - 1] ^ encoded[i]);
  }
  return ret;
};
