/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let arr1 = [...set1].filter(x => !set2.has(x))
    let arr2 = [...set2].filter(x => !set1.has(x))

    return [arr1,arr2]
};

nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
console.log(findDifference(nums1,nums2))

nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
console.log(findDifference(nums1,nums2))