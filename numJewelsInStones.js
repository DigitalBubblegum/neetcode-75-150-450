/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // console.log(stones,stones.length,stones[stones.length-1])
    let map = new Map()
    let count = 0
    for(let i in jewels){
        if(map.has(jewels[i])){
            map.set(jewels[i],map.get(jewels[i])+1)
        }
        if(!map.has(jewels[i])){
            map.set(jewels[i],1)
        }
    }
    for(let j =0;j<stones.length;j++){
        if(map.has(stones[j])){
            count++
        }
    }
    return count
};