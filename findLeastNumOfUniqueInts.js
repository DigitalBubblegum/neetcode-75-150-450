/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let map = new Map();
  // let numset = new Set(arr)
  for (i in arr) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  let v = Array.from(map.values());
  let count = 0;
  v.sort((a, b) => a - b);
  for (let i = 0; i < v.length; i++) {
    if (k > v[i]) {
      k -= v[i];
      v[i] = 0;
    } else {
      v[i] -= k;
      k = 0;
    }
    if (v[i] !== 0) {
      count++;
    }
  }
  return count;
};
