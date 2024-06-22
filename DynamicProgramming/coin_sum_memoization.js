/*
"Coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements
from a given set, which can be used unlimited number of times.

sumPossible(8,[5,12,4]) -> true
sumPossible(103,[6,20,1]) -> true
sumPossible(8,[5,3,4]) -> true
sumPossible(15,[4,6,10]) -> false
*/

function coinSum(amount,numbers, memo={})
{
    if(amount in memo) return memo[amount];
    if(amount == 0) return true
    if(amount < 0 ) return false

    for (const n of numbers) {
        if(coinSum(amount-n,numbers, memo)){
            memo[amount] = true
            return true
        }
    }

    memo[amount] = false
    return false
}

console.log("success case: "+coinSum(4,[1,2,3]))
console.log("fail case: " + coinSum(15,[7,9]))