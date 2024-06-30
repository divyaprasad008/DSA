/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length
    let left = new Array(length).fill(1)
    let right = new Array(length).fill(1)
    let answer = new Array(length)

    //left array
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i-1] * left[i-1]
    }

    //right array
    for(let i=nums.length-2;i>=0;i--){
        right[i] = nums[i+1]* right[i+1]
    }

    // console.log(right,left)

    for(let i = 0;i<nums.length;i++){
        answer[i] = left[i]*right[i]
    }

    return answer
};

console.log(productExceptSelf([1,2,3,4]))
//output : [24,12,8,6]
// [1,2,3,4]

// l [1,1,2,6]
// multiply
// r [24,12,4,1]

console.log(productExceptSelf([-1,1,0,-3,3]))