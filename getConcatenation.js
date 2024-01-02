/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

///wihout concat function
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ret = []
    for(let i = 0;i<nums.length;i++){
        ret.push(nums[i])
    }
    for(let i = 0;i<nums.length;i++){
        ret.push(nums[i])
    }
    return ret
};
