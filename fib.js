/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 1) {
    return 1;
  }
  let sum = 0;
  let a = 0;
  let b = 1;
  if (n === 0) {
    return 0;
  }
  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
};
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 1){
        return 1
    }
    let sum = 0
    let a = 0
    let b = 1
    if(n===0){
        return 0
    }
    for(let i = 2;i<=n;i++){
        sum = a+b
        a = b
        b = sum
    }
    return sum
};/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 1){
        return 1
    }
    let sum = 0
    let a = 0
    let b = 1
    if(n===0){
        return 0
    }
    for(let i = 2;i<=n;i++){
        sum = a+b
        a = b
        b = sum
    }
    return sum
};