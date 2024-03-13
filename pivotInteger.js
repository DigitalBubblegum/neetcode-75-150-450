//HORRIBLE BUT WORKS SOLUTION TIME COMPLEXITY O(n**3) very very bad
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i <= n; i++) {
    let a = arr.slice(0, i + 1).reduce((acc, curr) => acc + curr, 0);
    let b = arr.slice(i, n).reduce((acc, curr) => acc + curr, 0);
    if (a === b) {
      return arr[i];
    }
  }
  return -1;
};


//BEST SOLUTION O(N)
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sumALL = (n*(n+1))/2
    let sumI = 0
    for(let i = n;i>-1;i--){
        if(sumI === sumALL-sumI-i){
            return i
        }
        sumI += i 
    }
    return -1
};