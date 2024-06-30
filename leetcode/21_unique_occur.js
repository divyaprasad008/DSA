/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let countMap = new Map()
    for(let i of arr){
        countMap.set(i,( countMap.get(i) || 0)+1)
    }

    let countSet = new Set()
    for(let i of countMap.values()){
        if(countSet.has(i)){
            return false
        }
        countSet.add(i)
    }
    return true
};

arr = [1,2,2,1,1,3]
// Output: true
console.log(uniqueOccurrences(arr))

arr = [1,2]
// Output: false
console.log(uniqueOccurrences(arr))

arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
console.log(uniqueOccurrences(arr))