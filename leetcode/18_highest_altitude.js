/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAlt = 0
    let currAlt = 0
    for(let i=0;i<gain.length;i++)
    {
        currAlt+=gain[i]
        maxAlt = Math.max(maxAlt,currAlt)
    }
    return maxAlt
};

gain = [-5,1,5,0,-7]
// Output: 1
console.log(largestAltitude(gain))

gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
console.log(largestAltitude(gain))