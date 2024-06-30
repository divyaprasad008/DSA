/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWaterArea = 0
    let left = 0
    let right = height.length-1

    while(left<right){
        let currHeight = Math.min(height[left], height[right])
        let currWidth = right-left
        let currArea = currHeight * currWidth
        maxWaterArea = Math.max(maxWaterArea, currArea);

        //move pointer
        (height[left]<height[right]) ? left++ : right--    
    }
    return maxWaterArea
};

height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))
height = [1,1]
console.log(maxArea(height))