/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (j = 1; j < nums.length; j++) {
      if (nums[j - 1] === 0) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      }
    }
  }
};

//O(N) Solution with the help of two pointers
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length<=1){
        return nums
    }
    let l = 0
    let r = 1
    while(r<nums.length){
        if(nums[l]!=0 && nums[r]===0){
            r++
            l++
            continue
        }
        if(nums[l]!=0 && nums[r]!==0){
            r++
            l++
            continue
        }
        if(nums[l]===0 && nums[r]!==0){
            let temp = nums[r]
            nums[r] = nums[l]
            nums[l] = temp
            r++
            l++
            continue
        }
        r++
    }
};