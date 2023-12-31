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


///FASTER SOLUTION
/**
 * @param {number[]} nums
 * @return {number}
 */
const getAllDigits = (num) => {
    let sum = 0
    while (num >= 10) {
        sum += num % 10
        num = Math.floor(num / 10)
    }

    return sum + num
}

var differenceOfSum = function (nums) {
    let sum = 0
    let sumDigits = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        sumDigits += getAllDigits(nums[i])
    }

    return Math.abs(sum - sumDigits)
};