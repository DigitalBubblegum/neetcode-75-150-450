/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let hold = s.split('')
    let curr = hold.shift()
    // console.log(curr)
    for(let i in t){
        // console.log(curr,t[i])
        if(curr===t[i]){
            console.log(curr,t[i])
            curr = hold.shift()
        }
    }
    if(!curr){
        return true
    }
    if(curr){
        return false
    }
};