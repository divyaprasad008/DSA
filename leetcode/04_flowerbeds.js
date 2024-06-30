/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i=0;
    let planted=0;
    while(i<flowerbed.length){
        if(flowerbed[i]===0){

            let leftEmpty = (i===0 || flowerbed[i-1]==0)
            let rightEmpty = (i===flowerbed.length-1 || flowerbed[i+1]==0)
            if(leftEmpty && rightEmpty){
                flowerbed[i] = 1
                planted++;
                if(planted>=n){
                    return true
                }
            }
        }
        i++;
    }
    console.log(planted)
    return planted>=n
};

console.log(canPlaceFlowers([1,0,0,0,1],1))
console.log(canPlaceFlowers([1,0,0,0,1],2))