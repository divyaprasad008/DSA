function houseRobber(nums, i=0, memo={}){
    if(i in memo) return momo[i]

    if(i>=nums.length) return 0

    const skip = houseRobber(nums, i+1, memo)
    const take = nums[i] + houseRobber(nums, i+2,memo)

    memo[i] = Math.max(skip,take)

    return memo[i]
}