/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let countOpr =0;
    let left = 0
    let right = nums.length-1
    while(left<right){
        if(nums[left]+nums[right]==k){
            countOpr++ 
            left++
            right--
        }
        else if(nums[left]+nums[right]<k){
            left++
        }
        else{right--}
    }
    return countOpr
};

nums = [1,2,3,4], k = 5
console.log(maxOperations(nums, k))
nums = [3,1,3,4,3], k = 6
console.log(maxOperations(nums, k))
nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k=2
console.log(maxOperations(nums, k))

// method 2
var maxOperations2 = function(nums, k) {
    let map = new Map()
    let operations = 0

    for(const num of nums){
        let compliment = k-num
        if(map.get(compliment)>0){
            operations++
            map.set(compliment, map.get(compliment)-1)
        }
        else{
            map.set(num, (map.get(num) || 0) + 1)
        }

    }
    return operations
};

nums = [1,2,3,4], k = 5
console.log(maxOperations2(nums, k))
nums = [3,1,3,4,3], k = 6
console.log(maxOperations2(nums, k))