/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum=0;
    let sum=0
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
    maxSum = sum
    for(let j=k;j<nums.length;j++){
        sum = sum-nums[j-k]+nums[j]
        maxSum = Math.max(sum,maxSum)
    }
    return maxSum/k
};
nums = [1,12,-5,-6,50,3], k = 4
console.log(findMaxAverage(nums,k))