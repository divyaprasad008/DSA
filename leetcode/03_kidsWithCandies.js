/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max_candy = Math.max(...candies);
    return candies.map(candy =>  candy+extraCandies>=max_candy   )
    

};
var kidsWithCandies2 = function(candies, extraCandies) {
    i=0
    res = [];
    let max_candy = Math.max(...candies);
    console.log(max_candy)
    while(candies.length>i){
        console.log(candies[i]+extraCandies)
        res[i] = candies[i]+extraCandies>=max_candy ? true : false;

        i++
    }
    return res
};
console.log(kidsWithCandies([2,3,5,1,3],3))