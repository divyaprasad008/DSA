function coinSum(amount, numbers, memo={}){
    if(amount in memo ) return memo[amount]
    if(amount==0) return true
    if(amount<0) return false

    for (const n of numbers) {
        if(coinSum(amount-n,numbers,memo)){
            memo[amount] = true
            return true
        }
        
    }
    memo[amount] = false
    return false
}

console.log("true case: "+ coinSum(4,[1,2,3]))
console.log("false case: "+coinSum(12,[7,9]))