// Not great solution O(n) TC and O(m) SC not perfect. needs to be O(1) SC
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let pos = new Map()
  for(i in nums){
    if(nums[i]>0){
        if(pos.has(nums[i])){
            pos.set(nums[i],pos.get(nums[i])+1)
        }
        if(!pos.has(nums[i])){
            pos.set(nums[i],1)
        }
    }
  }
  let max = Math.max(...pos.keys())
  let min = Math.min(...pos.keys())
  let smallestposInt = 1
  if(!pos.has(smallestposInt)){
    if(min>smallestposInt){
        return smallestposInt
    }
  }
  if(pos.has(smallestposInt)){
    for(let i = min;i<=max;i++){
        if(!pos.has(i)){
            return i
        }
    }
  }
  return max+1
};
