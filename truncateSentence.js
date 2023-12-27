//Bandaid brute force solution
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let newS = ""
    if(k>s.length){
        return s
    }
    else{
        s = s.split(" ")
        for(let i=0;i<k;i++){
            newS+=s[i]+" "
        }
    }
    // console.log(newS.split(" ").join(" ").slice(0,-1))
    return newS.split(" ").join(" ").slice(0,-1)
};

//better solution

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {

    let arr = s.split(' ');
    arr.length = k;
    return arr.join(' ')
    
};