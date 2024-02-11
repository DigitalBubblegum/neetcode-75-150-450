/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ret = []
    for(let i = left;i<=right;i++){
        let flag = 0
        let s = i.toString().split('')
        s.map(j=>{
            if(i%Number.parseInt(j)===0){
                flag++
            }
        })
        if(flag===s.length){
            ret.push(i)
        }
    }
    return ret
};