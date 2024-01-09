/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magMap = new Map()
    let flag = 0
    for(let m in magazine){
        if(!magMap.has(magazine[m])){
            magMap.set(magazine[m],1)
        }
        else{
            magMap.set(magazine[m],magMap.get(magazine[m])+1)
        }
    }
    // console.log(magMap)
    for(let r in ransomNote){
        if(magMap.has(ransomNote[r])){
            // console.log(magMap)
            if(magMap.get(ransomNote[r])!==0){
                flag+=1
                magMap.set(ransomNote[r],magMap.get(ransomNote[r])-1)
            }
            else{
                magMap.delete(ransomNote[r])
            }
        }
    }
    // console.log(flag)
    return flag===ransomNote.length?true:false
};