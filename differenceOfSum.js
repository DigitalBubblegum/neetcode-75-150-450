/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const init = 0;
  const sumOfElem = nums.reduce((acc, curr) => acc + curr, init);
  const temp = nums.join("").split("");
  const sumOfDigi = temp.reduce((acc, curr) => acc + Number(curr), init);
  return Math.abs(sumOfElem - sumOfDigi);
};
