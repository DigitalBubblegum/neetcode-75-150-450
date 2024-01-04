/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let newS = s.split(' ')
   let ret = []
   for(let i=0;i<newS.length;i++){
       ret.push(newS[i].split('').reverse().join(''))
   }
   return ret.join(' ')
};