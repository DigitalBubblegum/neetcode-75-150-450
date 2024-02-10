/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  const isPrime = (num) => {
    if (num == 2 || num == 3) return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i == 0 || num % (i + 2) == 0) return false;
    }
    return true;
  };
  let i = 0;
  let j = 0;
  let diag = [];
  while (i !== nums.length && j !== nums.length) {
    diag.push(nums[i][j]);
    i++;
    j++;
  }
  i = 0;
  j = nums.length - 1;
  while (i !== nums.length && j !== -1) {
    diag.push(nums[i][j]);
    i++;
    j--;
  }
  // console.log(diag)
  let greatPrime = 0;
  diag.map((i) => {
    if (isPrime(i) === true) {
      greatPrime = Math.max(greatPrime, i);
    }
  });
  return greatPrime;
};
