//Wrong solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let ret = []
    let hmap = new Map()
    for(let i =0;i<nums.length;i++){
        if(hmap.has(nums[i])){
            ret.push(nums[i])
        }
        else{
            hmap.set(nums[i],1)
        }
    }
    return ret
};