/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let l = 0
    let r = 0
    let sum  = 0
    let count = 0
    while(r<arr.length){
        if(r-l+1<k){
            r++
        }else{
            for(let i = l;i<r+1;i++){
                sum+=arr[i]
            }
            if(sum/k>=threshold) count++
            sum=0
            l++
        }
    }
    return count
};