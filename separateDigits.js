/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let ret = [];
  for (let i in nums) {
    nums[i] = nums[i].toString().split("");
    nums[i].map((j) => ret.push(j));
  }
  return ret;
};

/////ONE LINER

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ret = []
    for(let i in nums){
        nums[i] = nums[i].toString().split('')
        nums[i].map(j=>ret.push(j))
    }
    return ret
};
