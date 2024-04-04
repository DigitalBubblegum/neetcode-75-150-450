/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map()
    for(let i in nums){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }
    }
    let tempMax = Number.NEGATIVE_INFINITY
    map.forEach((v,k)=>{
        tempMax = Math.max(tempMax,v)
    })
    if(tempMax ===1){
        return nums.length
    }
    let maxArray = Array.from(map.values()).sort((a,b)=>a-b)
    let retLen = 0
    while(maxArray.includes(tempMax)){
        retLen+=maxArray.pop()
    }
    return retLen
};