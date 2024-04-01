//slowest O(n) solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0
    let l = 0
    let r = 0
    let pro = 1
    while(l<nums.length){
        pro*=nums[r]
        if(l===r && nums[r]<k){
            count++
            r++
            pro*=nums[r]
        }
        if(pro<k){
            count++
            r++
        }else{
            l++
            r=l
            pro = 1
        }
    }
    return count
};