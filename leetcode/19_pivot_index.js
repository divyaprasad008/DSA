/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc,num)=>acc+num,0)

    let leftSum = 0;
    for(let i=0;i<nums.length;i++){
        let rightSum = totalSum-leftSum-nums[i]
        if(rightSum==leftSum){
            return i
        }
        leftSum += nums[i]
        
    }
    return -1
};
nums = [1,7,3,6,5,6]
// Output: 3
console.log(pivotIndex(nums))

nums = [1,2,3]
// Output: -1
console.log(pivotIndex(nums))

nums = [2,1,-1]
// Output: 0
console.log(pivotIndex(nums))