/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let small = Infinity
    let second = Infinity
    for (const n of nums) {
        if(n<=small){
            small=n
        }
        else if(n<=second){
            second = n
        }
        else{
            return true
        }
    }

    return false    
};
console.log(increasingTriplet([2,1,5,0,4,6]))
console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([20,100,10,12,5,13]))