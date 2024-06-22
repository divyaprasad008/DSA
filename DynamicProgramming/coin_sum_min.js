function coin_sum_min(amount, numbers, memo={}){
    if(amount in memo) return memo[amount];
    if(amount < 0) return -1
    if(amount === 0) return 0
    let minimum = Infinity
    
    for(n of numbers){
        $result = coin_sum_min(amount-n,numbers,memo)
        if($result!==-1){
            minimum = Math.min(minimum,$result+1) 
        }
    }

    // for(n of numbers){
    //     let recentCount = 1 + coin_sum_min(amount-n, numbers, memo)
    //     minimum = Math.min(recentCount,minimum)
    // }

    memo[amount] = minimum === Infinity ? -1 : minimum;
    return memo[amount]
}
console.log("true case: "+coin_sum_min(4,[1,2,3]))